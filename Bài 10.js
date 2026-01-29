/*BÀI 10: THUẬT TOÁN PHÂN TRANG (Pagination)
Yêu cầu: Viết hàm paginate(dataArray, pageNumber, pageSize). 
Hàm trả về mảng con dữ liệu tương ứng với số trang và kích thước trang được truyền vào. 
Ví dụ: paginate([1,2,3,4,5], 2, 2) => [3, 4] (Trang 2, mỗi trang 2 phần tử)
*/

function paginate(dataArray, pageNumber, pageSize) {
    // Công thức: startIndex = (pageNumber - 1) * pageSize
    // Tại sao (pageNumber - 1)? Vì trang đếm từ 1, nhưng mảng đếm từ 0
    // Ví dụ: Trang 2, mỗi trang 2 phần tử → startIndex = (2-1) * 2 = 2
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    // slice(start, end): cắt mảng từ start đến end (không bao gồm end)
    return dataArray.slice(startIndex, endIndex);
}

// Test
console.log(paginate([1, 2, 3, 4, 5], 2, 2)); // [3, 4]
console.log(paginate([1, 2, 3, 4, 5], 1, 2)); // [1, 2]
console.log(paginate([1, 2, 3, 4, 5], 3, 2)); // [5]
