class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const map = new Map()
        for (const c of s) {
            map.set(c, (map.get(c) || 0) + 1)
        }
        for (const c of t) {
            let count = map.get(c)
            if (count) {
                if (count > 0) {
                    map.set(c, --count)
                }
                if (count === 0) map.delete(c)
            } else {
                return false
            }
        }
        return map.size === 0
    }
}
