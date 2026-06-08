class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix_arr = [];
        let prefix = 1;
        for(const n of nums){
            prefix_arr.push(prefix);
            prefix = prefix*n;
        }
        const res = Array(nums.length).fill(0);
        let postfix = 1
        for(let i = nums.length-1;i >= 0; i--){
            res[i] = postfix*prefix_arr[i];
            postfix = postfix*nums[i]
        }
        return res;
    }
}
