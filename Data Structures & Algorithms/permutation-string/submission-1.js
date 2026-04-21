class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const size = s1.length
        const s1Sort = s1.split("").sort().join("")

        for (let i = 0; i <= s2.length - size; i++) {
            const strs = s2.slice(i, i + size).split("").sort().join("")
            if (strs === s1Sort) return true
        }

        return false
    }
}
