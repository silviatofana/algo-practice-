#include <iostream>
#include <vector>

using namespace std;

vector<int> sortKMessedArray( const vector<int>& a, int k ) 
{
  // your code goes here
  vector<int> arr = a;
  for(int i = 0;i + 1 <arr.size();i++){
    int mn = arr[i + 1], mnidx = i + 1;
    for(int j = i + 1; j<=i + k && j < arr.size(); j++){
      if(mn > arr[j]){
        mn = arr[j];
        mnidx = j;
      }
    }
    if(mn < arr[i]){
      swap(arr[i], arr[mnidx]);
    }
  }
  return arr;
}

int main() {
  return 0;
}

/*
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9], k = 2
  
  O(N * k)

*/