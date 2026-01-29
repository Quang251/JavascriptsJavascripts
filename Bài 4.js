/*
BÀI 4: TÌM SỐ LỚN THỨ HAI (Logic) Yêu cầu: Cho một mảng số nguyên. 
Viết hàm tìm số lớn thứ hai trong mảng. Lưu ý: Không sử dụng phương thức .sort(). 
Ví dụ: findSecondLargest([5, 12, 10, 12, 9]) => 10
*/

function findSecondLargest(arr) {
    console.log('Mảng ban đầu:', arr);
    if (arr.length < 2) {
        console.log('Mảng phải có ít nhất 2 phần tử');
        return null;
    }
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    let secondLargest = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < largest) {
            if (secondLargest === null || arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
    }
    console.log('Số lớn thứ hai:', secondLargest);
    return secondLargest;
}
//console.log('Kết quả:', findSecondLargest([5, 12, 10, 12, 9]));
