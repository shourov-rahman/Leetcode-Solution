// 852. Peak Index in a Mountain Array: https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
// linear search algorithm
// time: O(n) and space: O(1)
var peakIndexInMountainArray = function(arr) {
    let mountainArrayIndex = 1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            mountainArrayIndex = i
        }
    }
    return mountainArrayIndex
};
*/

/**
// binary search approach
// time:O(logn) and space: O(1)
// 6 7 8 9 10 5 4 3 2 1
// mountain array must contain 3 elment.So the middle element must be between start and end. So we do not need to think about edge cases(condition for start and mid)
// as the array is mountain array, so before the mountain position is ascending order and after the mountain position is descending order.(before 10 is ascending order and after 10 is descending order and 10 is the peak element)
// In peak index arr[mid] > arr[mid+1] and arr[mid]>arr[mid-1]{return mid}
// In ascending order arr[mid]<arr[mid+1]{ start = mid+1 } 
// In descending order arr[mid]< arr[mid-1]{ end =mid-1 } 
// https://www.youtube.com/watch?v=W9QJ8HaRvJQ&t=11618s

var peakIndexInMountainArray = function(arr) {
    if(arr.length<3){
        return -1;
    }
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]>arr[mid+1] && arr[mid]>arr[mid-1]){
            return mid
        }else if(arr[mid]<arr[mid+1]){
            start = mid+1
        }else if(arr[mid]<arr[mid-1]){
            end= mid-1
        }
    }
};
*/

// recursive approach
// time:O(logn) and space: O(1)
// 6 7 8 9 10 5 4 3 2 1
// read the above explanation
var peakIndexInMountainArray = function(arr,start=0,end=arr.length-1) {
    if(arr.length<3){
        return -1;
    }
    
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        
        if(arr[mid]>arr[mid+1] && arr[mid]>arr[mid-1]){
            return mid;
        }else if(arr[mid]<arr[mid+1]){
            return peakIndexInMountainArray(arr,mid+1,end)
        }else{
            return peakIndexInMountainArray(arr,start,mid-1)
        }
    }
};




