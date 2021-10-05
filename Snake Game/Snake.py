import pygame
import random
import math
from pygame import mixer

#Initialize the pygame
pygame.init()

#Starting coordinates of snake and food
snake_x = [380]
snake_y = [280]
snake_x_change = [0]
snake_y_change = [0]
temp_x = random.randint(0,39)
food_x = temp_x*20 + 2
temp_y = random.randint(0,29)
food_y = temp_y*20 + 2
position = [0]*1201
position_y = [0]*1201
#Create the Screen
screen = pygame.display.set_mode((800,600))

#Title 
pygame.display.set_caption("Snake by Addison Hardley")

#Score
score_value = 0
font = pygame.font.Font('freesansbold.ttf', 28)
gameover_font = pygame.font.Font('freesansbold.ttf', 100)

#Snake
def drawSnake(i):
    pygame.draw.rect(screen, (66, 100, 245), (snake_x[i],snake_y[i],20,20))

def drawFood(food_x, food_y):
    pygame.draw.rect(screen, (66, 245, 100), (food_x, food_y, 17, 17))

def drawGrids():
    for x in range(0, 800, 20): # draw vertical lines
        pygame.draw.line(screen, (66, 100, 245), (x,0),(x,600))
    for y in range (0, 600, 20): # draw horizontal lines
        pygame.draw.line(screen, (66, 100, 245), (0,y), (800, y))

def show_score():
    score = font.render("Score: " + str(score_value), True, (0,0,0))
    screen.blit(score, (2, 2))

def game_over():
    gameover = gameover_font.render("GAME OVER", True, (0,0,0))
    screen.blit(gameover, (85,250))

def main():
    global food_x, food_y, snake_x_change, snake_y_change, score_value, position, position_y
    #Game Loop
    running = True
    while running:
        #Background Screen
        screen.fill((66, 160,245))
        drawGrids()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        for i in range(score_value  + 1):
            drawSnake(i)
        drawFood(food_x, food_y)

        #Snake Movement
        if event.type == pygame.KEYDOWN:
            if snake_x[0] % 20 == 0 and snake_y[0] % 20 == 0:
                if event.key == pygame.K_RIGHT and snake_x_change[0] >= 0:
                    snake_x_change[0] = 0.25
                    snake_y_change[0] = 0
                if event.key == pygame.K_UP and snake_y_change[0] <= 0:
                    snake_y_change[0] = -0.25
                    snake_x_change[0] = 0
                if event.key == pygame.K_DOWN and snake_y_change[0] >= 0:
                    snake_y_change[0] = 0.25
                    snake_x_change[0] = 0
                if event.key == pygame.K_LEFT and snake_x_change[0] <= 0:
                    snake_x_change[0] = -0.25
                    snake_y_change[0] = 0
        
        #Snake tail follows the head
        for i in range(1, score_value + 1):
                        position[i] = snake_x[i-1] 
                        position_y[i] = snake_y[i-1]
                        if snake_x[i] == position[i] and snake_y_change[i-1] > 0:
                            snake_y_change[i] = 0.25
                            snake_x_change[i] = 0
                        position[i] = snake_x[i-1] 
                        position_y[i] = snake_y[i-1]

                        if snake_x[i] == position[i] and snake_y_change[i-1] < 0:
                            snake_y_change[i] = -0.25
                            snake_x_change[i] = 0
                            position[i] = snake_x[i-1] 
                            position_y[i] = snake_y[i-1]

                        if snake_y[i] == position_y[i] and snake_x_change[i-1] > 0:
                            snake_x_change[i] = 0.25
                            snake_y_change[i] = 0
                        position[i] = snake_x[i-1] 
                        position_y[i] = snake_y[i-1]
                        
                        if snake_y[i] == position_y[i] and snake_x_change[i-1] < 0:
                            snake_x_change[i] = -0.25
                            snake_y_change[i] = 0
                        position[i] = snake_x[i-1] 
                        position_y[i] = snake_y[i-1]


        #Wall Constraints and Game Over by hitting tail
        if snake_x[0] < 0 or snake_x[0] > 780 or snake_y[0] <0 or snake_y[0] > 580:
            game_over()
            for i in range(score_value + 1):
                snake_x_change[i] = 0
                snake_y_change[i] = 0
        
        for i in range(1, score_value + 1):
            if snake_x[0] == snake_x[i] and snake_y[0] == snake_y[i]:
                game_over()
                for j in range(score_value + 1):
                    snake_x_change[j] = 0
                    snake_y_change[j] = 0
    
        #Scoring
        if math.sqrt(math.pow(snake_x[0] - food_x, 2)) < 10 and math.sqrt(math.pow(snake_y[0] - food_y, 2)) < 10:
            food_x = random.randint(0,39)*20 + 2
            food_y = random.randint(0,29)*20 + 2
            score_value = score_value + 1
            if snake_x_change[score_value - 1] > 0:
                snake_x.append(snake_x[score_value-1] - 20)
                snake_y.append(snake_y[score_value-1])
            if snake_x_change[score_value - 1] < 0:
                snake_x.append(snake_x[score_value-1] + 20)
                snake_y.append(snake_y[score_value-1])
            if snake_y_change[score_value - 1] > 0:
                snake_x.append(snake_x[score_value-1])
                snake_y.append(snake_y[score_value-1] - 20)
            if snake_y_change[score_value - 1] < 0:
                snake_x.append(snake_x[score_value-1])
                snake_y.append(snake_y[score_value-1] + 20)
            snake_x_change.append(snake_x_change[score_value-1])
            snake_y_change.append(snake_y_change[score_value-1])
        
        for i in range(score_value+1):
            snake_x[i] += snake_x_change[i]
            snake_y[i] += snake_y_change[i]

        show_score()

        #To constantly update the screen
        pygame.display.update()
main()