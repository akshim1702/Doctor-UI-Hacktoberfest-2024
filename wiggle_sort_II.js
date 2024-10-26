/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a , b) => a - b);
    const tmp = [...nums];
    let mid = Math.floor((nums.length - 1)/2);
    let right = nums.length -1;
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            nums[i] = tmp[mid];
            mid--;
        } else {
            nums[i] = tmp[right];
            right--;
        }
    }
    return nums;
};
