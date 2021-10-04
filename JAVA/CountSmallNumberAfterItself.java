import java.util.*;
public class CountSmallNumberAfterItself
{
 public static void main(String[] args) {
     int n,count,i,j;  
        Scanner sc=new Scanner(System.in);  
        System.out.print("Enter the number of elements: ");  
        n=sc.nextInt();  
        int[] nums = new int[n];
        int[] counts = new int[n];
        System.out.println("Enter the elements of the array: ");  
        for(i=0; i<n; i++)  
        {  
            nums[i]=sc.nextInt();  
        }  
         for(i=0; i<n; i++)  
        {  
            count=0;
             for(j=i+1; j<n; j++)  
            {  
                 if(nums[i]>nums[j]) {
                     count++;
                 }
            }  
            counts[i]=count;
        }  
        System.out.println(Arrays.toString(counts));  
 }
}
