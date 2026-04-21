class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b)

        const result = []

        for (let i = 0; i < nums.length; i++) {
            const temp = -nums[i]
            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
            const sum = nums[left] + nums[right]

            if (sum === temp) result.push([nums[i], nums[left], nums[right]])

            if (sum > temp) right--
            else left++
            }
        }

        return [
            ...new Map(
            result.map(item => {
                const key = [...item].sort((a, b) => a - b).join(',');
                return [key, item];
            })
            ).values()
        ]
    }
}
