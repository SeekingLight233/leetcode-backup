/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (let i = 0; i < s.length; i++){
        let key = s.charAt(i)
        if (!map.has(key)) {
            map.set(key, 1)
            continue
        }
        //这样就能保证set中的字母至少是存在的
        let count = map.get(key)
        map.set(key,++count)
    }
    for (let i = 0; i < t.length; i++){
        let key = t.charAt(i);
        if (!map.has(key)) return false;
        let count = map.get(key)
        map.set(key,--count)
    }
    //最后遍历下map，检查结果是否存在非0的情况
    for (let val of map) {
        if (val[1] !== 0) {
            return false
        }
    }
    return true
};