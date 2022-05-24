
// 69. Sqrt(x): https://leetcode.com/problems/sqrtx/

// video solution:
//https://www.youtube.com/watch?v=eC0b6lUj84w
//https://www.youtube.com/watch?v=VYtEKhxKd1Q
//https://www.youtube.com/watch?v=Jzcag2SOgYk
/**
// linear search
// The time complexity of the above approach is O(√ n), since we are running a loop from 0 till the square root of that number and space complexity is O(1);
// Algorithm
//y*y <= x
// we have to find out if y satisfy the condition or not
// we return y-1 not y. because for checking last condition y is already incremented so we have to decrese it one.
var mySqrt = function(x) {
    let y= 0;
    while(y*y<=x){
        y++;
    }
    return y-1;
};

*/
// binary search solution
// time: O(log(√ n)) and space: O(1)
// Algorithm: 
// mid*mid === x then retrn mid
// mid*mid > x then end = mid-1
// mid*mid <x then start = mid+1
// to integer overflow instead of writing mid*mid === x , we wrote mid === x/mid

var mySqrt = function(x) {
  let start = 0;
  let end = x;
  while(start<=end){ 
      let mid = start + Math.floor((end-start)/2);
      if(x/mid===mid){
          return mid;
      }else if(mid>x/mid){
          end = mid-1;
      }else{
          start = mid+1;
      }
  }
  return end
};
