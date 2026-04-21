/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
    let currentNode = head

    const arrVal = []

    while (currentNode !== null) {
      arrVal.push(currentNode.val)
      currentNode = currentNode.next
    }

    const newArr = []
    let left = 0
    let right = arrVal.length - 1

    while (left <= right) {
      newArr.push(arrVal[left])
      newArr.push(arrVal[right])

      left++
      right--
    }

    currentNode = head

    let index = 0
    while (currentNode !== null) {
      currentNode.val = newArr[index++]
      currentNode = currentNode.next
    }

    return head
  }
}
