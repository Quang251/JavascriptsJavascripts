/*
BÀI 2: CHUẨN HÓA HỌ TÊN (String Manipulation) Yêu cầu: 
Viết hàm formatName(str) nhận vào một chuỗi họ tên bị thừa khoảng trắng và viết hoa lung tung. 
Hàm trả về chuỗi đã được làm sạch và viết hoa chữ cái đầu mỗi từ. 
Ví dụ: formatName(" nguYen  vAn aN ") => "Nguyen Van An"
*/

//Tạo hàm
function formatName(str) {
    let cleanStr = str.trim().toLowerCase();
    let words = cleanStr.split(/\s+/);
    let result = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(word.length > 0){
            let newWord = word[0].toUpperCase() + word.slice(1);
            result.push(newWord);
        }
    }
    return result.join(" ");
}
console.log(result);

