#include<stdio.h>
  int main()
  {int n,i,j;
      printf("enter n\n");
      scanf("%d",&n);
      
    int sp = n / 2;
    int st = 1;
    for (int i = 1; i <= n; i++)
    {
      for (int j = 1; j <= sp; j++)
      {
        printf("	");
      }
      for (int j = 1; j <= st; j++)
      {
        printf("*	");
      }
      if (i <= n / 2)
      {
        sp--;
        st += 2;
      }
      else
      {
        sp++;
        st -= 2;
      }
      printf("\n");
    }return 0;
  }
