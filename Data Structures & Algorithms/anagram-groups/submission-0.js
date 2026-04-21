class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for (const word of strs) {
            const wordSorted = word.split("").sort().join("")
            map.set(wordSorted, [...(map.get(wordSorted) || []), word])
        }

        const result = []

        map.forEach((value) => result.push(value))

        return result
    }
}
