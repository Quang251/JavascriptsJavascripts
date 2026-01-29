/*
BÀI 2: CHUẨN HÓA HỌ TÊN (String Manipulation) Yêu cầu: 
Viết hàm formatName(str) nhận vào một chuỗi họ tên bị thừa khoảng trắng và viết hoa lung tung. 
Hàm trả về chuỗi đã được làm sạch và viết hoa chữ cái đầu mỗi từ. 
Ví dụ: formatName(" nguYen  vAn aN ") => "Nguyen Van An"
*/

//Tạo hàm
function formatName(str) {
    const cleanStr = str.trim();  
    const words = cleanStr.split(/\s+/);
    let result = [];
    for(let i = 0; i < words.length; i += 2){
        if(words.length > 0){
            let newWord =  words.slice(i, i + 2);
            result.push(newWord.join(" "));
            // console.log(newWord);    
        }
    }
    return result.join() + ".";
}
console.log(result);

