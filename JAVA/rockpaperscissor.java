
import java.util.Scanner;
import java.util.Random;
public class project_rock_paper_scissor {
    public static void main(String[] args) {
        System.out.println("****Rock Paper Scissor Game****");
        System.out.println("0 is for Rock");
        System.out.println("1 is for Paper");
        System.out.println("2 is for Scissor");
        Scanner sc = new Scanner(System.in);
        Random rand = new Random();

        int rand_int1 = rand.nextInt(3);
        System.out.println("IF 0=" + "\uD83D\uDDFF,1=✋,2=" + "✂️");
        System.out.println("ENTER YOUR NUMBER");
        int anything= sc.nextInt();
        System.out.println("MY NUMBER IS: ");
        System.out.println(rand_int1);

        if(rand_int1==0&& anything==2){
            System.out.println("I Got Stone" + "\uD83D\uDDFF");
            System.out.println("I won!!");
        }
        else if(rand_int1==1&& anything==0){
            System.out.println("I Got Paper✋");
            System.out.println("I won!!");
        }
        else if(rand_int1==2&& anything==1){
            System.out.println("I Got Scissors✂");
            System.out.println("I won!!");
        }
        else {
            System.out.println("I Lost!!");
        }

    }
}


