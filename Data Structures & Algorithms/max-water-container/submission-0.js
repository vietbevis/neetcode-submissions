class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1

        let max = 0

        while (left < right) {
            const area = Math.min(heights[left], heights[right]) * (right - left)
            max = Math.max(max, area)

            if (heights[left] <= heights[right]) {
            left++
            } else {
            right--
            }
        }

        return max
    }
}
