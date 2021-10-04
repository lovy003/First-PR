public class Longest_Substring_Without_Repeating_Characters {
   
     public int lengthOfLongestSubstring(String s) {
        int a[]=new int[256];
        int i=0,res=0;
        Arrays.fill(a,-1);
        for(int j=0;j<s.length();j++)
        {
            i=Math.max(i,a[s.charAt(j)]+1);
            res=Math.max(res,j-i+1);
            a[s.charAt(j)]=j;
        }
        return res;
    }
    
}
