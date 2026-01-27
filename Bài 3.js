/*
BÀI 3: TẦN SUẤT XUẤT HIỆN (Array & Object) Yêu cầu: Cho một mảng gồm nhiều phần tử trùng lặp. 
Viết hàm đếm số lần xuất hiện của mỗi phần tử và trả về một Object với Key là giá trị phần tử, 
Value là số lần xuất hiện. 
Ví dụ: countFrequency(['a', 'b', 'a', 'c', 'b', 'a']) => { a: 3, b: 2, c: 1 }
*/


function countFrequency(arr){
    const counts = [];
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        
        if (counts[element]){
            counts[element]++ ;
        }
        else{
            
            counts[element] = 1;
        }
    }
    console.log(counts);
   
    const arr2 = [];
    for (let key of counts){
        let value = counts[key];
        console.log(value);
        if (value % 2 === 0){
            let text = `${key}: ${value}`; 
            arr2.push(text);
        }       
    }
    return arr2
}
console.log(countFrequency(arr))







