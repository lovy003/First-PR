#Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses. 
# Here the system generates a random word and user have to guess that word correctly.

import random       # To generate a random number
from words import list_of_words


def getRandom():
    word = random.choice(list_of_words)   #For choosing a random element from a non-empty sequence
    return word.upper()

def play(word):
    word_completion = '_'*len(word)  
    guessed = False
    guessed_letters = []
    guessed_words = []
    tries = 6

    print('Let\'s Play the Hangman game!')
    print(display(tries))
    print(word_completion)
    print('Hint: You have to guess the word letter by letter or you can directly guess the whole word.')
    print('\n')
    #print(word_completion)

    # Loop continues until guessed becomes True
    while not guessed and tries > 0:
        guess = input("Enter Your guess: ").upper()
        
        if len(guess) == 1 and guess.isalpha():
            if guess in guessed_letters:
                print('You have already guessed the letter %s' % (guess))
            elif guess not in word:
                print(guess, "is not in the word.")
                tries -= 1
                print("You have", tries, "tries left.")
                guessed_letters.append(guess)
            else:
                print("Good job,", guess, "is the letter.")
                guessed_letters.append(guess)
                word_as_list = list(word_completion)
                indices = [i for i, letter in enumerate(word) if letter == guess]
                for index in indices:
                    word_as_list[index] = guess
                word_completion = "".join(word_as_list)
                if '_' not in word_completion:
                    guessed = True 

        elif len(guess) == len(word) and guess.isalpha():
            if guess in guessed_words:
                print('You have already guessed the word %s' % (guess))
            elif guess not in word:
                print(guess, 'is not in the word.')
                tries -= 1
                print("You have", tries, "tries left.")
                guessed_words.append(guess)
            else:
                guessed = True
                word_completion = word

        else:
            print('Not a valid guess.')
        print(display(tries))
        print(word_completion)
        print('\n')
    if guessed:
        print("Congrats, you guessed the correct word! You win the game!")
    else:
        print("Sorry, you ran out of tries. The word was", word, ". Better luck next time.")
        print('Game over!!')

# To display the hangman structure depending on the wrong guesses
def display(tries):
    stages = [#6 final state: head, torso, both arms, and both legs
            """
                ______________
                |            |
                |            O
                |           \\|/
                |            |
                |           / \\
                _
            """,
            #5 head, torso, both arms and one leg
            """
                ______________
                |            |
                |            O
                |           \\|/
                |            |
                |           /
                _ 
            """,
            #4 head, torso and both arms
            """
                ______________
                |            |
                |            O
                |           \\|/
                |            |
                |           
                _ 
            """,
            #3 head, torso and one arm
            """
                ______________
                |            |
                |            O
                |            |/
                |            |
                |           
                _ 
            """,
            #2 head and torso
            """
                ______________
                |            |
                |            O
                |            |
                |            |
                |           
                _ 
            """,
            #1 head
            """
                ______________
                |            |
                |            O
                |           
                |            
                |           
                _ 
            """,
            #0 empty state
            """
                ______________
                |            |
                |            
                |           
                |          
                |           
                _ 
            """     
        ]
    return stages[tries]

# The function to be called first
def main():
    word = getRandom()
    #print(word)
    play(word)

    while input("Do you want to play again?(Y/N): ").upper() == 'Y':
        word = getRandom()
        #print(word)
        play(word)

# When the program runs, python interpreter directly calls the main() first
if __name__ == "__main__":
    main()