export function camelToKabab(inputStr) {
    let left = 0, right = 0;
    let res = '';
    while (right < inputStr.length) {
        if (inputStr[right] >= 'A' && inputStr[right] <= 'Z') {
            res += inputStr.slice(left, right);
            const lower = String.fromCharCode(inputStr[right].charCodeAt() - 'A'.charCodeAt() + 'a'.charCodeAt());
            if (right > 0) {
                res += '-' + lower;
            }
            else res += lower;
            left = right + 1;
        }
        right++;
    }
    res += inputStr.slice(left, right);
    return res;
}
