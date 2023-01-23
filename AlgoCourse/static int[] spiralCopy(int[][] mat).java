import java.io.*;
import java.util.*;

class Solution {
  
  static int[] spiralCopy(int[][] mat) {
    // your code goes here
    //4 for loops
    //mat --> m*n
    //and 1 while loop
    //direction1 row 0    col   0 to n-1       [left to right]
    //direction2 col n-1  row   1 to m-1       [top to bootom]
    //direction3 row m-1  col   n-2 to 0       [right to left] 
    //direction4 col 1    row   m-2 to 1       [bottom to top]     
    int m = mat.length;
    int n = mat[0].length;
    int x,y,out[] = new int[m*n],pos = 0,left=0,right=n-1,bottom=m-1,top=0;
    while(pos<m*n){
      for(x=left;x<=right;x++)
        out[pos++] = mat[top][x];
      top++;
      for(y=top;y<=bottom;y++)
        out[pos++] = mat[x][right];
      right--;
      for(x=right;x>=left;x--)
        out[pos++] = mat[bottom][y];
      bottom--;
      for(y=bottom;y>=top;y--)
        out[pos++] = mat[x][left];
      left++;
    }
    return out;
  }

  public static void main(String[] args) {

  }

}