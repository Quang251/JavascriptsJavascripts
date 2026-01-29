/*BÀI 9: GIẢ LẬP ASYNC/AWAIT (Promises)
Yêu cầu: Viết hàm mockFetchData(id) trả về một Promise. 
Sau 2 giây, nếu id hợp lệ (>0) thì trả về Object {id, status: "Success"}, 
nếu id <= 0 thì reject với lỗi "Invalid ID". 
Sử dụng Async/Await để gọi hàm và xử lý lỗi bằng try/catch.
*/

// Bước 1: Tạo hàm mockFetchData trả về Promise
// Promise: đại diện cho tác vụ bất đồng bộ (chờ đợi)
function mockFetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, status: "Success" }); // Thành công
            } else {
                reject("Invalid ID"); // Thất bại
            }
        }, 2000); // Chờ 2 giây
    });
}

// Bước 2: Sử dụng async/await để gọi hàm
// async: khai báo hàm bất đồng bộ
// await: chờ Promise hoàn thành
// try/catch: xử lý lỗi
async function fetchData(id) {
    try {
        const data = await mockFetchData(id);
        console.log(data);
        return data;
    } catch (error) {
        console.log("Lỗi:", error);
        return null;
    }
}

// Test
fetchData(5);   // Thành công: { id: 5, status: "Success" }
fetchData(-1);  // Lỗi: "Lỗi: Invalid ID"
