class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let sizeSliding = 1
        let max = 0
        while (sizeSliding < prices.length) {
            for (let i = 0; i < prices.length - sizeSliding; i++) {
                max = Math.max(max, prices[i + sizeSliding] - prices[i])
            }
            sizeSliding++
        }

        return max
    }
}
