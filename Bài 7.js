/*
BÀI 7: KIỂM TRA CHUỖI ĐỐI XỨNG (Regex & String) Yêu cầu: 
Viết hàm isPalindrome(str) kiểm tra một chuỗi có đối xứng hay không (đọc xuôi ngược đều giống nhau). 
Yêu cầu bỏ qua các ký tự đặc biệt, dấu câu và khoảng trắng. Ví dụ: isPalindrome("Race Car!") => true
*/


function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = cleanedStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false; 
        }
    }
    return true;
}
console.log(isPalindrome(str));
