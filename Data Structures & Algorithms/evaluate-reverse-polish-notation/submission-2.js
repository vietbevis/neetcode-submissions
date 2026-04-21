class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

  for (const token of tokens) {
    if (token !== "+" && token !== "-" && token !== "*" && token !== "/") {
      stack.push(token)
    } else {
      const second = +stack.pop()
      const first = +stack.pop()
      switch (token) {
        case "+":
          stack.push(first + second)
          break
        case "-":
          stack.push(first - second)
          break
        case "*":
          stack.push(first * second)
          break
        case "/":
          const res = first / second
          stack.push(res > 0 ? Math.floor(res) : Math.ceil(res))
          break
      }
    }
  }

  return stack.pop()
    }
}
