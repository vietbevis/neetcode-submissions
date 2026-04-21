class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let size = s.length
        let max = 0

        while (size) {
            for (let i = 0; i <= s.length - size; i++) {
                const str = s.slice(i, i + size).split("")
                const strs = new Set(str)

                for (const char of strs.values()) {
                    const countOrtherChar = str.filter(c => c !== char).length
                    if (countOrtherChar <= k) return str.length
                }
            }

            size--
        }

        return max
    }
}