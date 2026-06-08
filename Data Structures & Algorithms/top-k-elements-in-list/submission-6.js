class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //count the values
        const counts = {}
        for(const n of nums){
            counts[n] ??= 0;
            counts[n]++;
        }
        //fill buckets
        const buckets = Array.from({length: nums.length+1}, () => []);
        for(const n of Object.keys(counts)){
            buckets[counts[n]].push(n);
        }
        //build results from buckets
        const res = [];
        for(let i = nums.length; i >= 0; i--){
            for(const n of buckets[i]){
                res.push(n)
                if(res.length == k){
                    return res;
                }
            }
        }
    }
}
