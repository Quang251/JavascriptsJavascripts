
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
function isPrime(n){
    if(n < 2){
        return false;
    }
    for (i = 2; i < n/2; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
function getPrimes(min, max){
    let result = [];
    for (let i = min; i <= max; i++){
        if(isPrime(i)){
            result.push(i)
        }
    }
    return result;
}
console.log(result)

/*
BÀI 2: CHUẨN HÓA HỌ TÊN (String Manipulation) Yêu cầu: 
Viết hàm formatName(str) nhận vào một chuỗi họ tên bị thừa khoảng trắng và viết hoa lung tung. 
Hàm trả về chuỗi đã được làm sạch và viết hoa chữ cái đầu mỗi từ. 
Ví dụ: formatName(" nguYen  vAn aN ") => "Nguyen Van An"
*/
function formatName(str){
    const cleanedStr = str.trim().toLowerCase()
    const words = cleanedStr.split(/\s+/)
    let result = [];
    for(let i = 0; i < words.length; i++){
    let word = words[i]
        if(word.length > 0){
            let newWord = word[0].toUpperCase() + word.slice(1)
            result.push(newWord)
        }
    }
    return result.join(' ')
}
console.log(result)

/*
BÀI 3: TẦN SUẤT XUẤT HIỆN (Array & Object) Yêu cầu: Cho một mảng gồm nhiều phần tử trùng lặp. 
Viết hàm đếm số lần xuất hiện của mỗi phần tử và trả về một Object với Key là giá trị phần tử, 
Value là số lần xuất hiện. 
Ví dụ: countFrequency(['a', 'b', 'a', 'c', 'b', 'a']) => { a: 3, b: 2, c: 1 }
*/

function countFrequency(arr){
    let counts = {};
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        if (counts[element]){
            counts[element]++;
        }else{
            counts[element] = 1;
        }
    }
    return counts;  
}
const filterObject = Object.entries(counts)
    .filter(([key, value]) => value % 2 === 0)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) 
console.log(counts)
console.log(filterObject)

/*
BÀI 4: TÌM SỐ LỚN THỨ HAI (Logic) Yêu cầu: Cho một mảng số nguyên. 
Viết hàm tìm số lớn thứ hai trong mảng. Lưu ý: Không sử dụng phương thức .sort(). 
Ví dụ: findSecondLargest([5, 12, 10, 12, 9]) => 10
*/
function findSecondLargest(arr){
    if(arr.length < 2){
        console.log('mảng phải lớn hơn 2 phần tử');
        console.log('QUang');
               
        return null
    }
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]; 
        }
    }
    let secondLargest = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < largest){
            if(secondLargest === null || arr[i] > secondLargest){
                secondLargest = arr[i];
            }
        }
    }
    return secondLargest;
}
console.log(secondLargest);

/*
BÀI 5: TÍNH TOÁN GIỎ HÀNG (Reduce) Yêu cầu: 
Cho một mảng các Object đại diện cho sản phẩm trong giỏ hàng (mỗi object có: name, price, quantity). 
Sử dụng hàm .reduce() để tính tổng tiền. Nếu tổng tiền > 2000, giảm giá 10% trên tổng hóa đơn. 
Ví dụ: cart = [{p: 1000, q: 2}, {p: 500, q: 1}] => Total: 2250 (đã giảm)
*/

function totalCart(cart){
    let totalPrice = cart.reduce(function(acc, item){
        let itemTotal = item.quantity * item.price;
        return acc + itemTotal;
    },0)
    console.log(totalPrice)
    let finalPrice = totalPrice;
    if (totalPrice > 2000){
        let discount = (totalPrice * 10)/100
        finalPrice = totalPrice - discount
    }else{
        console.log('mua thêm de duoc discount')
    }
    return finalPrice
}
console.log(finalPrice)

/*
BÀI 6: LỌC TRÙNG VÀ GỘP MẢNG (Set & ES6) Yêu cầu: 
Viết hàm mergeAndUnique(arr1, arr2) nhận vào hai mảng số nguyên. 
Trả về một mảng mới gồm tất cả các phần tử của hai mảng, 
đã loại bỏ các phần tử trùng lặp và sắp xếp tăng dần. 
Ví dụ: merge([1, 2, 3], [2, 3, 4, 5]) => [1, 2, 3, 4, 5]
*/

function mergeAndUnique(arr1, arr2){
    let groups = arr1.concat(arr2)
    console.log(groups);
    
}