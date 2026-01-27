/*
BÀI 6: LỌC TRÙNG VÀ GỘP MẢNG (Set & ES6) Yêu cầu: 
Viết hàm mergeAndUnique(arr1, arr2) nhận vào hai mảng số nguyên. 
Trả về một mảng mới gồm tất cả các phần tử của hai mảng, 
đã loại bỏ các phần tử trùng lặp và sắp xếp tăng dần. 
Ví dụ: merge([1, 2, 3], [2, 3, 4, 5]) => [1, 2, 3, 4, 5]
*/

function mergeAndUnique (arr1, arr2){
    let merged = arr1.concat(arr2);
    let unique = merged.filter(function(item, index){
        return merged.indexOf(item) === index;
    });
    return unique.sort(function(a, b) {
        return a - b;
    });
   
}
console.log (merged)





