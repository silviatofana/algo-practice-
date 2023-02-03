'''
SILVIA TOFANA 
silviatofana 0040760889756
https://www.linkedin.com/in/bhat-manoj/


nlogn
n 

[9, 12, 17, 2, 4, 5]
            ^
         *

offset = search(left, right, mid)
if arr[right]> arr[mid]:
  right = mid
else
  left = mid + 1
  

mid = (right-left)/2 + left
            
            
[ 2, 4, 5, 9, 12, 17]
offset = search(left, right, index)

mid 

-> (mid+offset)%len(arr)

left, right, mid
'''


'''

[9, 12, 17, 2, 4, 5]
            ^
offset= 3

[ 2, 4, 5, 9, 12, 17]
  ^
0
'''

def shifted_arr_search(arr, num):
  
  # find the offset
  left, right = 0, len(arr)-1
  while left<=right:
    mid = (right-left)//2 + left
    
    if left == mid:
      break
    if arr[right]> arr[mid] and arr[left] < arr[mid] :
      right = mid-1
    else:
      left = mid+1
      
  offset = left

  # find the num
  left, right = 0, len(arr)-1
  while left<=right:
    mid = (right-left)//2 + left
    if arr[(mid+offset)%len(arr)] == num:
      return (mid+offset)%len(arr)
    
    if arr[(mid+offset)%len(arr)] > num:
      right = mid
    else:
      left = mid+1
  return -1

print(shifted_arr_search([6, 7, 8, 9, 2, 3, 4, 5], 6))