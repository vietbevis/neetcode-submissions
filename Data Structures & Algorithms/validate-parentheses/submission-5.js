class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i)
    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      stack.push(currentChar)
      console.log("🚀 ~ isValid ~ stack:", stack);
    } else {
      console.log("🚀 ~ isValid ~ stack:", stack);
      switch (currentChar) {
        case ")":
          if (stack[stack.length - 1] === "(") stack.pop()
          else return false
          break
        case "}":
          if (stack[stack.length - 1] === "{") stack.pop()
          else return false
          break
        case "]":
          if (stack[stack.length - 1] === "[") stack.pop()
          else return false
          break
      }
    }
  }

  return stack.length === 0
    }
}
