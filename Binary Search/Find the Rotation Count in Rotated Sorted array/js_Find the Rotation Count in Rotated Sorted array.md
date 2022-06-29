[Find the Rotation count in Rotated Sorted array](https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/
)


Consider an array of distinct numbers sorted in increasing order. The array has been rotated (clockwise) k number of times. Given such an array, find the value of k.

Input : arr = [15, 18, 2, 3, 6, 12]<br>
Output: 2

Explanation : Initial array must be [2, 3,
6, 12, 15, 18]. We get the given array after 
rotating the initial array twice.

Input : arr = [7, 9, 11, 12, 5] <br>
Output: 4

Input: arr = [7, 9, 11, 12, 15];<br>
Output: 0

### <span style="color:orange; font-weight:700">Solution - 1 </span>
```javascript
//linear search approach
// time complexity: O(n)  and space complexity: O(1)

// Algorithm:
//smallest element index will be the rotation count
// the smallest element in the array is placed after pivot element . So (pivot+1) element will be rotation count 
// here pivot+1 === smallest element index in a array
// edge case: [0,1,2,4,5,6,7], in this case the array rotated maximum time or O time. So 0 will be the answer.

// so we will run a for loop , check every time whether the current element(arr[i]) smallest or not. If current element is smallest/minimum then we update smallest/minimum element and smallest element index.

function RotationCount(arr){
    let minValue = arr[0];
    let minIndex = 0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]<minValue){
        minValue = arr[i];
        minIndex = i
      }
    }
    return minIndex;
}

console.log(RotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(RotationCount([7, 9, 11, 12, 5])); // 4
console.log(RotationCount([7, 9, 11, 12, 15])); // 0
```

### <span style="color:orange; font-weight:700">Solution - 2 </span>

```javascript
// binary search approach
// time complexity: O(logn) and space: O(1)
// Algorithm:
// find out the pivot element 
// pivot+1 will be the rotation count
// edge case: [1,2,3,4,5] in this case pivot will be 4 but we have to return rotation count 0.

function findPivot(arr,start,end){
  while(start<=end){
      let mid = start + Math.floor((end-start)/2);
      if(arr[mid]>=arr[0]){
          start = mid+1
      }else{
          end = mid-1
      }
  }
  return end ;
}

function RotationCount(arr){
  let pivot = findPivot(arr,0,arr.length-1);
  if(pivot===arr.length-1){ //edge case : if the array is not rotated/maximum rotated, pivot will be equal to the last element index of that array. In this case it rotated 0 time so here we return 0.
    return 0;
  }else{
     return pivot+1;
  }

}

console.log(RotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(RotationCount([7, 9, 11, 12, 5])); // 4
console.log(RotationCount([7, 9, 11, 12, 15])); // 0

```

