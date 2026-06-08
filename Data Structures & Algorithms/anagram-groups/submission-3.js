class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};
        for(const word of strs){
            const counts = Array(26).fill(0);
            for(let i = 0; i < word.length; i++){
                const char_i = word.charCodeAt(i) - 97;
                counts[char_i]++;
            }
            groups[counts] ??= [];
            groups[counts].push(word);
        }
        return Object.values(groups);
    }
}
