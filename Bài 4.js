/*
BÀI 4: TÌM SỐ LỚN THỨ HAI (Logic) Yêu cầu: Cho một mảng số nguyên. 
Viết hàm tìm số lớn thứ hai trong mảng. Lưu ý: Không sử dụng phương thức .sort(). 
Ví dụ: findSecondLargest([5, 12, 10, 12, 9]) => 10
*/

function findSecondLargest(arr) {
    console.log('Mảng ban đầu:', arr);
    
    // BƯỚC 1: Kiểm tra mảng có ít nhất 2 phần tử không
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
    
    // BƯỚC 3: Tìm số lớn thứ hai
    // Số lớn thứ hai là số lớn nhất trong các số NHỎ HƠN số lớn nhất
    let secondLargest = null; // Ban đầu chưa có số lớn thứ hai
    
    // Duyệt qua tất cả các phần tử
    for (let i = 0; i < arr.length; i++) {
        // Nếu số này NHỎ HƠN số lớn nhất
        if (arr[i] < largest) {
            // Nếu chưa có số lớn thứ hai HOẶC số này lớn hơn số lớn thứ hai hiện tại
            if (secondLargest === null || arr[i] > secondLargest) {
                secondLargest = arr[i]; // Cập nhật số lớn thứ hai
            }
        }
    }
    
    // BƯỚC 4: Kiểm tra kết quả
    if (secondLargest === null) {
        console.log('Tất cả các số đều bằng nhau, không có số lớn thứ hai');
        return null;
    }
    
    console.log('Số lớn thứ hai:', secondLargest);
    return secondLargest;
}
//console.log('Kết quả:', findSecondLargest([5, 12, 10, 12, 9]));
