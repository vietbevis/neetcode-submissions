class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.split("").filter(char => /^[a-zA-Z0-9]$/.test(char))

        if (s.length === 0) return true

        let first = 0
        let last = s.length - 1

        while (first < last) {
            if (s[first].toLowerCase() !== s[last].toLowerCase()) return false
            first++
            last--
        }

        return true
    }
}
