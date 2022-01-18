const numbers = [175, 50, 25];
arr = ["a", "b", "c"];
console.log(numbers.reduce(mFunc));
function mFunc(total, num, idx, arr) {
    console.log("total = " + total + "\t");
    console.log("num = " + num + "\t");
    console.log("idx = " + idx + "\t");
    console.log("arr = " + arr);
    return total - num;
}
