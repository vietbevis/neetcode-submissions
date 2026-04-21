class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const map = new Map()

        for (let i = 0; i < height.length; i++) {
            let maxLeft = 0
            let maxRight = 0
            let left = 0
            let right = height.length - 1

            while (left < i) {
            maxLeft = Math.max(maxLeft, height[left++])
            }
            while (right > i) {
            maxRight = Math.max(maxRight, height[right--])
            }

            map.set(i, [maxLeft, maxRight])
        }

        let sum = 0
        for (let i = 0; i < height.length; i++) {
            const temp = map.get(i)
            if (height[i] > temp[0] || height[i] > temp[1]) continue
            sum += Math.min(Math.max(temp[0], temp[1]), Math.min(temp[0], temp[1]) - height[i])
        }

        return sum
    }
}
