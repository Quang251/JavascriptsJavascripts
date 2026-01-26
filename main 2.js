/*
Ưu tiên 1: Luôn dùng const (mặc định).

Ưu tiên 2: Chỉ dùng let khi biết chắc giá trị sẽ thay đổi.

Tuyệt đối tránh: Không dùng var (trừ khi bảo trì code cũ từ 10 năm trước).
*/ 

function run(a) {
    if(a % 15 === 0){
        return 3;
    }
    else if (a % 5 === 0){
        return 2;
    }
    else if (a % 3 === 0){
        return 1;
}
}

// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

var course = {
    name: 'Javascript',
    coin: 100,
}
if(course.coin > 0){
    console.log(`${course.coin} coin`);
}else{
    console.log('No coin');
}

var result = course.coin > 0 ? `${course.coin} coin` : 'No coin';
console.log(result);

/*
 Vòng lặp - Loop
 1. for - Lặp với điều kiện đúng
 2. for/in - Lặp qua key của đối tượng
 3. for/of - Lặp qua value của đối tượng
 4. while - Lặp với điều kiện đúng
 5. do/while - Lặp ít nhất 1 lần,sau đó lặp khi điều kiện đúng

 */
//For Loop
/*
Là gì: Vòng lặp cơ bản nhất, chạy theo chỉ số (index) i.
Khi nào dùng: Khi bạn cần sử dụng chỉ số i 
(ví dụ: để biết vị trí phần tử, hoặc sửa trực tiếp phần tử trong mảng gốc).
*/ 
for(var i = 1; i <= 1000; i++){
    console.log(i);
}

let  myArray = [
    'javascript',
    'php',
    'python',
];
var arrayLength = myArray.length;
for(let i = 0; i < arrayLength; i++){
    console.log(myArray[i]);
}

//For/in Loop
/*
Là gì: Vòng lặp dùng để duyệt qua các tên thuộc tính (keys) của một Object.
Khi nào dùng: Khi bạn muốn xem trong một Object có những thông tin gì.
Lưu ý: Không nên dùng cho Mảng. Vì nó duyệt theo thứ tự không đảm bảo và chậm hơn for...of.
*/
function run(object) {
    let results = [];
    for (let key in object){
        results.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return results;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

//For/of Loop
/*
Là gì: Phiên bản nâng cấp, gọn gàng hơn. Nó lấy trực tiếp giá trị (value) ra để dùng.
Khi nào dùng: Ưu tiên số 1 khi duyệt mảng mà không quan tâm đến vị trí i. Code sẽ rất sạch.
*/
let languages = [
    'javascript',
    'php',
    'python',
];
for(let value of languages){
    console.log(value); 
}
//output: javascript, php, python

//While Loop
/*
Cơ chế: Nhìn điều kiện -> Nếu đúng thì mới chạy -> Chạy xong quay lại nhìn điều kiện.
Đặc điểm: Có thể không chạy lần nào nếu điều kiện sai ngay từ đầu.
*/
let myArray1 = [
    'javascript', 
    'php',
    'python',
];
let i = 0;
while(i < myArray1.length){
    console.log(myArray1[i]);
    i++;
}

//Do/while Loop
/*
Cơ chế: Chạy code 1 lần trước -> Sau đó mới nhìn điều kiện -> Nếu đúng thì chạy tiếp.
Đặc điểm: Chắc chắn chạy ít nhất 1 lần dù điều kiện có sai.
*/
var i = 0;
var isSuccess = false;
do{
    i++;

    console.log('Nạp thẻ lần ' + i);

    //thành công 
    if(false){
        isSuccess = true;
    }
}while(!isSuccess && i <= 3);

//Break & Continue in Loop
/*
Break: Dừng vòng lặp ngay lập tức khi điều kiện đúng.
Continue: Bỏ qua các dòng code phía sau và chuyển sang lần lặp tiếp theo.
*/
for (let i = 1; i <= 10; i++){

    if(i % 2 !== 0){
        continue;
    }  
    console.log(i);

}

//Vòng lặp lồng nhua - Nested Loop
    let myArray2 = [
        [1, 2],
        [3, 4],
        [5, 6]
    ]
    for (var i = 0; i < myArray2.length; i++){
        for (var j = 0; j < myArray2[i].length; j++){
            console.log(myArray2[i][j]);
        }
    }
//VD
let array = ['a', 'b', 'c', 'd', 'a', 'a', 'c'];

console.log(new Set(array));
//output: a, b, c, d (không lặp lại phần tử)