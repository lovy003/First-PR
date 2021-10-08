#include <stdio.h>
#include<stdlib.h>
#include<time.h>

int main()
{
    int number, guess, numguess ,no;
    srand(time(0));            //Number Generator
    number = rand() % 100 + 1; //Generates a random number between 1-100
    printf("Enter no of Chances in which you can crack this game "); scanf("%d",&no);

    printf("Here starts the game\n");
    for (numguess=1; guess != number && numguess<no+1; numguess++)
    {
        printf("Enter your guess\n");
        scanf("%d", &guess);

        if (guess < number)
        {
            printf("higher number please\n");
        }
        else if (guess > number)
        {
            printf("lower number please\n");
        }
        else
        {
            printf("Congratulations! You have cracked this Challenge in %d times!!!\n", numguess);
            break;
        }
    }
    if (numguess==no+1 && guess!=number){
        printf("You Failed in this challenge,Better Luck next time!!!\n");
    }

    // do
    // {
    //     printf("Enter your guess\n");
    //     scanf("%d", &guess);

    //     if (guess < number)
    //     {
    //         printf("higher number please\n");
    //     }
    //     else if (guess > number)
    //     {
    //         printf("lower number please\n");
    //     }
    //     else
    //     {
    //         printf("You guessed it right in %d times\n", numguess);
    //     }
    //     numguess++;
    // } while (guess != number);
    return 0;
}
