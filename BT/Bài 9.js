/*BÀI 9: GIẢ LẬP ASYNC/AWAIT (Promises)
Yêu cầu: Viết hàm mockFetchData(id) trả về một Promise. 
Sau 2 giây, nếu id hợp lệ (>0) thì trả về Object {id, status: "Success"}, 
nếu id <= 0 thì reject với lỗi "Invalid ID". 
Sử dụng Async/Await để gọi hàm và xử lý lỗi bằng try/catch.
*/

function mockFetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, status: "Success" }); // Thành công
            } else {
                reject("Invalid ID"); 
            }
        }, 2000); 
    });
}

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
fetchData(5);  
fetchData(-1);  
