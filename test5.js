
// function groupByDept (list){
//     let result = {};
//     for(let i = 0; i < list.length; i++){
//         let emp = list[i];
//         let department = emp.dept;
//         if(!list[department]){
//             list[department] = [];
//         }
//         else{
//             list[department].push(emp);
//         }
//     }
//     return result;
// }
// console.log{list};

/*BÀI 8: 
NHÓM DỮ LIỆU (Group By) Yêu cầu: Cho mảng danh sách nhân viên: 
employees = [{name: 'A', dept: 'IT'}, {name: 'B', dept: 'HR'}, {name: 'C', dept: 'IT'}]. 
Viết hàm nhóm các nhân viên theo phòng ban (dept). Kết quả mong muốn: { IT: [{...}, {...}], HR: [{...}] }
*/

// const groups =[
//     {name: 'A', dept: 'IT'},
//     {name: 'B', dept: 'HR'},
//     {name: 'C', dept: 'IT'},
//     {name: 'D', dept: 'HR'}
// ];
// const grouped = Object.groupBy(groups,({dept}) => dept);
// console.log(grouped)

/*BÀI 1: TÌM SỐ NGUYÊN TỐ (Algorithms) Yêu cầu: Viết một hàm getPrimes(min, max) nhận vào hai số nguyên. 
Hàm trả về một mảng chứa tất cả các số nguyên tố trong khoảng từ min đến max. 
Ví dụ: getPrimes(10, 20) => [11, 13, 17, 19]
*/
// function isPrime(n){
//     if(n < 2){
//         return false;
//     }
//     for (i = 2; i < n/2; i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// function getPrimes(min, max){
//     let result = [];
//     for (let i = min; i <= max; i++){
//         if(isPrime(i)){
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(result)

/*
BÀI 2: CHUẨN HÓA HỌ TÊN (String Manipulation) Yêu cầu: 
Viết hàm formatName(str) nhận vào một chuỗi họ tên bị thừa khoảng trắng và viết hoa lung tung. 
Hàm trả về chuỗi đã được làm sạch và viết hoa chữ cái đầu mỗi từ. 
Ví dụ: formatName(" nguYen  vAn aN ") => "Nguyen Van An"
*/
function formatName(str){
    const cleanedStr = str.trim().toLowercase()
    
}
