import java.util.Scanner;

public class DiseriumCalculator {public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    int sum=0,c=0;
    int num1=num;
    while(num>0)
    {
        int i=num%10;
        c++;
        sum=sum+(int)(Math.pow(i,c));
        num=num/10;

    }
    if(num1==sum)
    {System.out.println("diserium");}
    else
        System.out.println("non diserium");
}
}