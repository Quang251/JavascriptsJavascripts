/*Built in
1. Alert
2. Console
3. Confirm
4. Prompt
5. SetTimeout
6. SetInterval

*/



/* 
var fullName = "John Doe";
var age = 20; // Khai bao tuoi

alert(fullName);
alert(age);
*/

/*
var a = 1;
var b = 2;

var c = a *b;
console.log(c);
*/

/*
var age = 20;
var nextAge = age;
nextAge++;
console.log(nextAge);
*/

// var age = 16
// var canBuyAlcohol = age >= 18;

// console.log(canBuyAlcohol)

//kiểu số
var a = 10;
var b = 20;

//kiểu string type
var fullName = "John Doe";

//Boolean type
var isStudent = true;
var isTeacher = false;

//Null type
var isNull = null;

//Undefined type
var y;

//symboll
var id = Symbol("id");// unique identifier
 

//function type
var myFUnction = function() {

}

//Object type
var myObject = {
    name: "John Doe",
    age: 18,
    address: "123 Main St"
}

//Tạo hàm
function showDialog() {
    alert("Hello World");
}
showDialog();

 // return trong hàm 
 function cong(a, b) {
    return a + b;
 }
var result = cong(1, 2);
console.log(result);

var firstName = 'Quang  ';
var lastName = 'Nguyen';
console.log(`TOI LA ${firstName} ${lastName}`);

//LÀM VIỆC VỚI CHUỖI
var myString = 'Hello World';
//1. length
console.log(myString.length);
//2. Find Index tìm vị trí của chuỗi con trong chuỗi cha
console.log(myString.indexOf('World'));
//3. Cut String
console.log(myString.slice(0, 5));
//4. Replace
console.log(myString.replace('World', 'Vietnam'));
//5. Convert to Uppercase
console.log(myString.toUpperCase());
//6. Convert to Lowercase
console.log(myString.toLowerCase());
//7. Trim
console.log(myString.trim());
//8. Split
var languages
console.log(myString.split('')); //cắt từng chữ cái ra thành mảng
//9. Join
console.log(myString.join(' '));
//10 get a character by index
const myString = 'Hello World';
console.log(myString.charAt(0));

//số và làm việc với số (js  )
var age = 18;
var PI = 3.14;
 
var result = 20 / 'ABC'  
console.log(isNaN(result))
console.log(typeof result)

var languages = new Array(
    
        'Javascript',//0
        'PHP',       //1
        'Ruby ',     //2
        null,        //3
        undefined    //4
        
    
);
console.log(languages)
console.log(languages[i]) //Lấy biến thứ bao nhiêu
console.log(languages.length)
console.log(Array.isArray(languages)); //kiểm tra xem hàm có phải array hay ko

/*
//Keyword: Javascript array methods
1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
 */

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

var languages = [
    'Dart',
    'Ruby'
];
console.log(languages.toString());// Chuyển từ Array sang chuỗi(Output: Java, PHP, Ruby)
console.log(languages.join('')); //có thể thêm ','; '-';... vào array
console.log(languages.pop('')); // xoá element cuối mảng và trả về phần tử đã xóa 
console.log(languages.push('')); //thêm 1 hoặc nhiều phần tử vào cuối mảng 
console.log(languages.shift(''));// giống pop nhưng giờ là đầu mảng
console.log(languages.unshift(''));// giống push nhưng giờ là đầu mảng 
languages.splice(1, 2)// 1 là đặt con chỏ vào phần tử 1(PHP)sau đó 2 sẽ là xóa 2 phần tử kể từ phần tử 1 
languages.splice(1, 0, 'x')// chèn trước thằng phần tử 1, 0 là không xóa thằng nào hoặc có thể 1 là để thay thế
console.log(languages.concat(languages2))// gộp 2 array lai và trước concat sẽ là mảng gốc(ở đây là languages
console.log(languages.reverse())// đảo ngược mảng
console.log(languages.slice(1, 2))//cắt từ vị trí phần từ 1 đến đầu vị trí phần tử 2


// dùng typeof sẽ không kiểm tra được array hay ko nên dùng Array.isArray()
console.log(Array.isArray(languages));//kiểm tra xem hàm có phải array hay ko
// kiểm tra độ dài của array
console.log(languages.length);
// lấy từng phần tử trong array
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
console.log(languages[3]);
console.log(languages[4]);
console.log(languages[5]);
console.log(languages[6]);
console.log(languages[7]);
console.log(languages[8]);
console.log(languages[9]);