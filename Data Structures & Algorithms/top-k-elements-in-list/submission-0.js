class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  const sortedMap = new Map(
    [...map.entries()].sort((a, b) => b[1] - a[1])
  )

  const res = []
  let count = k
  sortedMap.forEach((value, key) => {
    if (count === 0) return res
    res.push(key)
    count--
  })

  return res
    }
}
