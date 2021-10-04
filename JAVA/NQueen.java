import java.util.Scanner;
import java.lang.Math;
public class NQueen 
{
    static int count;
    static int[] x= new int[20];
    public static void main(String[] args) 
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the value of n");
        int n=sc.nextInt();
        count=0;
        Nqueen(1,n);
        if(count==0)
        System.out.println("no solution");
        /*char board[][]=new char[n][n];
        for(int i=0;i<n;i++)
            for(int j=0;j<n;j++)
                board[i][j]='-';
        if(solveNQueens(board,0,n)) solution(board,n);
        else System.out.println("No solution exists");*/
    }
    public static void Nqueen(int k, int n)
    {
        for(int i=1;i<=n;i++)
        {
            if(place(k,i)){
                x[k]=i;
                if(k==n)
                writeQ(n);
                else
                Nqueen(k+1,n);
            }
        }
    }
    public static void writeQ( int n)
    {
        int i,j;
        ++count;
        System.out.println("\n solution "+count+":");
        for(i=1;i<=n;i++)
        {
            System.out.println("");
            for(j=1;j<=n;j++){
                if(x[i]==j)
                System.out.print("\tQ");
                else
                System.out.print("\t-");
            }
        }
    }
    public static boolean place(int k, int i)
    {
        for(int j=1;j<=k-1;j++)
        {
            if(x[j]==i || Math.abs(x[j]-i)==Math.abs(j-k))
                return false;
        }
        return true;
    }
}
