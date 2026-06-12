class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        seen = set()
        longest = 0
        for n in nums:
            if n in seen:
                continue
            curr_longest = 1
            i = n-1
            while i in num_set:
                curr_longest += 1
                i -= 1
            if curr_longest > longest:
                longest = curr_longest
        return longest