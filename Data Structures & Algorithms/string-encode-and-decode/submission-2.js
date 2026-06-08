class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = [];
        for (const s of strs){
            res.push(`${s.length}#${s}`);
        }
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let len_s = '';
        let i = 0;
        while(i < str.length){
            if(str[i] === '#'){
                const len = Number(len_s);
                res.push(str.slice(i+1,i+1+len))
                i = i+1+len;
                len_s = ''
            }else{
                len_s += str[i];
                i++;
            }
        }
        return res;
    }
}
