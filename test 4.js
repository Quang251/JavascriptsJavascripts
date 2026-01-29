/*
cho 1 mảng, trong mảng có các phần tử. Yêu cầu cứ cách 2 phần tử thì cách nhau bởi dấu phẩy và kết câu bằng dấu chấm
*/

let str = "Số nguyên tố được định nghĩa là số tự nhiên lớn";

// const trimStr = str.trim().replaceAll(' ', '');

// const result = str.split(" ");
// console.log(result)
// let newResult = "";
// console.log(newResult)
// for(let i = 0; i < result.length; i++) {
//     newResult +=  " " + result[i];
//     if(i % 2 !== 0) {
//         newResult += ",";
//     }
// }
// newResult += ".";
// console.log(newResult);


let arr = [1, 4, 5, 2, 6,3]
arr.sort((a, b) => a-b);
console.log (arr)
