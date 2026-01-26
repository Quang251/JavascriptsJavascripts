// --- KHAI BÁO HÀM --- có hỗ trợ AI vì chưa học hết, hiểu 1 phần 

function formatName(str) {
    // 1. Xử lý sơ bộ: Xóa khoảng trắng 2 đầu và chuyển hết về chữ thường
    // Ví dụ: "  nguYen   vAn  " -> "nguyen   van"
    let cleanStr = str.trim().toLowerCase();// Hiểu trim để xóa các khoảng trống và LowerCase sẽ chuyển tất cả chữ hoa thành thường và lưu vào biến cleanStr

    // 2. Tách chuỗi thành mảng các từ
    // Mẹo: Dùng /\s+/ là biểu thức chính quy (Regex) để tách
    // bất kể có bao nhiêu dấu cách ở giữa.
    let words = cleanStr.split(/\s+/);//Cứ có cách thì sẽ chia thành 1 phần tử và lư vào mảng words
    
    // Tạo mảng chứa kết quả
    let result = [];//Mảng rỗng để lưu kết quả có tên result hay còn gọi là thùng chứa result  

    // 3. Duyệt qua từng từ để viết hoa chữ cái đầu
    for (let i = 0; i < words.length; i++) {
        let word = words[i];//Lấy từng từ trong mảng words và lưu vào biến word để đem đi xử lý
        
        // Chỉ xử lý nếu từ đó không bị rỗng
        if (word.length > 0) {
            let newWord = word[0].toUpperCase() + word.slice(1);//'N'+'guyen' (slice là cắt chuỗi từ ký tự thứ 2 đến hết)
            
            result.push(newWord);//Đẩy kết quả vào mảng result
        }
    }

    
    return result.join(" ");//Nối lại thành chuỗi, cách nhau bởi 1 dấu cách
}


console.log("✅ Đã khai báo hàm formatName!");
console.log("👉 Hãy thử gõ: formatName('  nguYen   vAn   aN ')");