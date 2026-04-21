class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            // Xet tung dong
            const arr = board[i].filter((r) => r !== ".");
            const row = new Set(arr);
            if (row.size !== arr.length) return false;

            // Xet tung cot
            const colSet = new Set();
            let count = 0;
            for (let j = 0; j < 9; j++) {
                if (board[j][i] !== ".") {
                    colSet.add(board[j][i]);
                    count++;
                }
            }
            if (colSet.size !== count) return false;
        }

        const boardFlat = board.flat();
        const arrK = [0, 3, 6, 27, 30, 33, 54, 57, 60]

        for (const k of arrK) {
            const temp = new Set();
            let count = 0;
            for (let i = k; i < k + 3; i++) {
                if (boardFlat[i] !== ".") {
                    temp.add(boardFlat[i]);
                    count++;
                }
                if (boardFlat[i + 9] !== ".") {
                    temp.add(boardFlat[i + 9]);
                    count++;
                }
                if (boardFlat[i + 18] !== ".") {
                    temp.add(boardFlat[i + 18]);
                    count++;
                }
            }
            console.log(temp)
            console.log(count)
            if (count !== temp.size) return false;
        }

        return true;
    }
}
