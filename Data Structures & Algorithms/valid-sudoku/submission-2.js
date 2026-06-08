class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const rows = Array.from({length: COLS}, ()=>({}));
        const cols = Array.from({length: ROWS}, ()=>({}));
        const squares = Array.from({length: ROWS}, ()=>({}));
        for(let r = 0; r<ROWS;r++){
            for(let c = 0; c < COLS; c++){
                if(board[r][c] !== '.'){
                    const val = Number(board[r][c]);
                    const sq = Math.floor(r/3)*3 + Math.floor(c/3);
                    if(rows[r].hasOwnProperty(val) || cols[c].hasOwnProperty(val) || squares[sq].hasOwnProperty(val)){
                        return false;
                    }
                    rows[r][val] = true;
                    cols[c][val] = true;
                    squares[sq][val] = true;
                }
            }
        }
        return true;
    }
}
