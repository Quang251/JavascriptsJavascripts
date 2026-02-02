/*
BÀI 3: TẦN SUẤT XUẤT HIỆN (Array & Object) Yêu cầu: Cho một mảng gồm nhiều phần tử trùng lặp. 
Viết hàm đếm số lần xuất hiện của mỗi phần tử và trả về một Object với Key là giá trị phần tử, 
Value là số lần xuất hiện. 
Ví dụ: countFrequency(['a', 'b', 'a', 'c', 'b', 'a']) => { a: 3, b: 2, c: 1 }
*/


function countFrequency(arr){
    const counts = {}; 
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];  
        if (counts[element]){
            counts[element]++ ;
        }
        else{
            counts[element] = 1;
        }
    }
   

    const result = {}; 
    for (let key in counts){
        let value = counts[key];
        if (value % 2 === 0){
            result[key] = value;
        }       
    }
    return result;
}
//arr = ['a', 'b', 'a', 'c', 'b', 'a'];
console.log(countFrequency(arr));

const arr = ['a', 'b', 'a', 'c', 'b', 'a']
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
const counts = countFrequency(arr)
const filterObject = Object.entries(counts)
    .filter(([key, value]) => value % 2 !== 0)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) 
console.log(filterObject)






