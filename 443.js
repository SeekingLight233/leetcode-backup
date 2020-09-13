/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let sum = 1;
    let res = [];
    for (let i = 0; i < chars.length; i++){
        if (chars[i] === chars[i + 1]) {
            sum++
        } else {
            let comStr = [];
            if (sum == 1) {
                //只有一个字符就没必要把1也加上了
                res.push(chars[i])
            } else {
                comStr.push(chars[i])
                comStr.push(sum.toString())
                res.push(...comStr)
            }
            sum = 1
        }
    }
    return res.length
};
let res = compress(["a", "a", "b", "b", "c", "c", "c"])
console.log(res);
