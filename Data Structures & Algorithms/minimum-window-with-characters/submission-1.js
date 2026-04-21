class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let size = t.length;

        while(size <= s.length) {
            for(let i = 0; i <= s.length - size; i++) {
                let str = s.slice(i, i + size)
                const res = str
                let j = t.length - 1
                while(j >= 0) {
                    const index = str.indexOf(t.charAt(j))
                    if (index !== -1) {
                        str = str.slice(0, index) + str.slice(index + 1)
                    } else {
                        break;
                    }
                    j--
                }

                if (j < 0) {
                    return res
                }
            }

            size++
        }

        return ""
    }
}