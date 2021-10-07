
public class BinarySearch {
    public static void main(String[] args) {
        int[] arr ={ 10,20,30,40,50,60,70,80,90,100 };
        int target = 41;
        int start = 0 , end = arr.length-1,done=0;
        while(start <= end){
            // (start + end ) / 2 ; start + end may exceed int range in java
            int mid = start + (end-start)/2;
            if (target>arr[mid]){
                start = mid + 1;
            }
            else if (target<arr[mid]){
                end = mid - 1;
            }
            else{
                System.out.println("Target Found at index "+(mid+1));
                done = 1;
                break;
            }

        }
        if(done == 0){
            System.out.println("Target Not Found in the Array");
        }
    }
}
