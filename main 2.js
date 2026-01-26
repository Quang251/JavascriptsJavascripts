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
let languages = [
    'javascript',
    'php',
    'python',
];
for(let value of languages){
    console.log(value); 
}

//While Loop
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

console.log(new Set(array ))