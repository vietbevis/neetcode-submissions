class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0
        if (s.length === 1) return 1
        let size = 1
        let max = 0

        while (size <= s.length + 1) {
            for (let i = 0; i <= s.length - size; i++) {
                const sizeSet = new Set(s.slice(i, i + size).split(""))

                if (sizeSet.size === size) {
                    max = Math.max(max, sizeSet.size)
                }
            }

            size++
        }

        return max
    }
}
