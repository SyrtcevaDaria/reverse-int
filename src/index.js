module.exports = function reverse(n) {
    let res = n.toString().split('').reverse().join('');
    console.log(res);
    if (res[res.length - 1] === '-') {
        res = res.slice(0, res.length - 1);
    }
    console.log(res);
    return Number(res)
}
module.exports(152);