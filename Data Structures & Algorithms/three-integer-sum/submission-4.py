class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        i = 0
        nums.sort()
        res = []
        while i < len(nums)-2:
            if nums[i] > 0:
                break
            j = i+1
            k = len(nums) -1
            while j < k:
                sum = nums[i] + nums[j] + nums[k]
                if sum > 0:
                    k -=1
                elif sum < 0:
                    j += 1
                else:
                    res.append([nums[i],nums[j],nums[k]])
                    j += 1
                    k -= 1
                    while j < k and nums[j] == nums[j-1]:
                        j+=1
            i += 1
            while i < len(nums) and nums[i] == nums[i-1]:
                i+=1
        return res