import java.util.Scanner;
import java.util.Random;

class Game {
    Scanner sc = new Scanner(System.in);
    Random rc = new Random();

    public void playGame() {
        System.out.println("Enter a Number between 1 to 100 to play the game");
        System.out.println("You have 10 attempts to guess");
        int computer = rc.nextInt(100);
        int i = 0;
        while (i < 10) {
            System.out.println("");
            System.out.print("Guess a Number between 1 to 100:  ");
            int user = sc.nextInt();
            i++;
            if (user > computer) {

                System.out.println("Guess don't matched. Please enter number less than " + user);
            } else if (user < computer) {
                System.out.println("Guess don't matched. Please enter a number greater than " + user);
            } else {
                System.out.println("Correct Guess !!! .Number Matched. You have guessed in " + i + " attempts");
                break;
            }
            if (i == 9) {
                System.out.println("You have finished");
                System.out.println("the number was " + computer);
            }
        }
    }
}

public class number_guessing_game {
    public static void main(String[] args) {
        Game g = new Game();
        g.playGame();
    }
}
