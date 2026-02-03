/*BÀI 1: TÌM SỐ NGUYÊN TỐ (Algorithms) Yêu cầu: Viết một hàm getPrimes(min, max) nhận vào hai số nguyên. 
Hàm trả về một mảng chứa tất cả các số nguyên tố trong khoảng từ min đến max. 
Ví dụ: getPrimes(10, 20) => [11, 13, 17, 19]
*/
// Bước 1: Kiểm tra số nguyên
function isPrime(n){ 
    if(n < 2){
        return false;
    }
    for (let i = 2; i <= n/2; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
// Bước 2: Tạo hàm getPrimes(min,max) có mảng rỗng để lưu trữ
function getPrimes(min, max){
    let result = [];
    for(let i = min; i <= max; i++){
        if(!isPrime(i)){
            result.push(i);
        }
    }  
    return result.join(",");
}
console.log(result);
