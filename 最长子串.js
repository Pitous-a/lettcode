/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let dp = new Array(s.length).fill(0);
    let max = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ')') {

            let j = i + 1 + dp[i + 1];
            if (j < s.length && s[j] === ')') {
                dp[i] = dp[i + 1] + 2;
                if (j + 1 < s.length) {
                    dp[i] += dp[j + 1];
                }
            }

            max = Math.max(max, dp[i]);
        }

    };
    return max;
}