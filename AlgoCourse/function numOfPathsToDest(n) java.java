//0040760889756
 // silviatofana
  
  //https://www.linkedin.com/in/delphine-nyaboke/
  //+254 732 067 592 whatsapp

// am actively interviewing for junior s
//software and machine learning roles

// input: n - a positive integer representing the grid size.
//# output: number of valid paths from (0,0) to (n-1,n-1).

//function numOfPathsToDest(n):
   // # allocate a 2D array for memoization
   // memo = [][]

   // # the memoization array is initialized with -1
   // # to indicate uncalculated squares.
    //for i from 0 to n-1:
      //  for j from 0 to n-1:
           // memo[i][j] = -1

   // return numOfPathsToSquare(n-1, n-1, memo)


//# input:
//#    i, j - a pair of non-negative integer coordinates
//#    memo - a 2D memoization array.
//# output:
//#    number of paths from (0,0) to the square represented in (i,j),

//#function numOfPathsToSquare(i, j, memo):
   // #if (i < 0 OR j < 0):
       //# return 0
   // #else if (i < j):
    //  # memo[i][j] = 0
   // #else if (memo[i][j] != -1):
       // #return memo[i][j] 
   //# else if (i == 0 AND j == 0):
     //   #memo[i][j] = 1
   // #else:
     //   #memo[i][j] = numOfPathsToSquare(i, j -1, memo) +
     //   #numOfPathsToSquare(i - 1, j, memo)

 //  # return memo[i][j] 

// am trying to comment out
// please copy the answer to this, and may
//maybe we can link up later

import java.io.*;
import java.util.*;

class Solution {

  static int numOfPathsToDest(int n) {
    // your code goes here
 //n = 2
    int startX = 0;
    int startY = 0;


    int numPoss = numPaths(startX,startY,n);


    return numPoss;


  }

  static private int numPaths(int startX, int startY, int n )
  {
    int destX = n - 1;
    int destY = n - 1;
    int numPoss = 0;

    //Base case
    if((startX == destX) && (startY == destY ))
      numPoss++;

    //Recursive condition
    else 
      {
        if( (startX >= startY) && (startX < n) && ( startY < n ))
        {
          //East 
          numPoss += numPaths(startX+1, startY,n);

          //North
           numPoss +=  numPaths(startX,startY + 1, n);
        } 

        //Time complexity: O(2^n) -> O(n^2) in memoization
       //Space complexity: O(n^2)
      //Bottom up approach: O(n) space complexity
      //Time complexity: O(n)
      }

    return numPoss;
  }

  public static void main(String[] args) {
    System.out.println(numOfPathsToDest(2));
  }

}

//n = 4
//#squares = 4 + 3 + 2 + 1

//#squares = n + n-1 + n-2 + ... 1 = n(n + 1)/2

//square 0 - eastx 4/ n - 1 

//square (1,0): up - 1, east -  3/(n - 1)

//square (2,0): up - 2, east: 2/(n - 2)

//east + north : n 
//

  // seeing i have a meeting with a recruiter in 10 mins,
  // would you pls copy the answer then maybe we can link up 
  // when you're less busy for practise r something?
  
