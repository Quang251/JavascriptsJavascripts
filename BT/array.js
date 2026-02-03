/*
Array methods
- forEach(): Duyệt từng phần tử và làm một việc gì đó với từng phần tử đó
- every(): kiểm tra xem TẤT CẢ các phần tử trong mảng có thỏa mãn điều kiện hay không. 
Nếu có thì trả về true, nếu không thì trả về false.
- some(): kiểm tra xem trong mảng có ÍT NHẤT MỘT phần tử thỏa mãn điều kiện hay không.
Nếu có thì trả về true, nếu không thì trả về false.
- find(): đi tìm và TRẢ VỀ MÓN ĐỒ mà bạn đang cần tìm. Nếu không tìm thấy thì trả về undefined.
- filter():duyệt qua tất cả và GIỮ LẠI TẤT CẢ các phần tử thỏa mãn điều kiện, tạo thành một danh sách mới.
- map(): Duyệt qua TẤT CẢ phần tử, đem từng cái đi "xào nấu/biến đổi", 
và trả về một MẢNG MỚI chứa các kết quả đã biến đổi đó.
- reduce(): Gom tất cả phần tử trong mảng lại thành MỘT GIÁ TRỊ DUY NHẤT
*/
  
let courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 100
    },
    {
        id: 2,
        name: 'Python',
        coin: 200
    },
    {
        id: 3,
        name: 'PHP',
        coin: 300
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 5,
        name: 'Java',
        coin: 0
    }
]


//forEach
courses.forEach(function(course, index) {
    console.log(index, course);
});

//every
let isFree = courses.every(function(course, index) {
    return course.coin === 0;
});

console.log(isFree);

//some
let isSomeFree = courses.some(function(course, index) {
    return course.coin === 0;
});

console.log(isSomeFree);

//find
let findCourse = courses.find(function(course, index) {
    return course.coin === 0;
});

console.log(findCourse);

//filter
let filterCourses = courses.filter(function(course, index) {
    return course.coin === 0;
});

console.log(filterCourses);

//map

function courseHandler(course, index,originArray) {
    return {
        id: course.id,
        name: 'Khoa hoc: ${course.name}',
        coin: course.coin,
        coinText: 'Gia: ${course.coin}',
        index: index,
        originArray: originArray
    }
}
let newCourses = courses.map(courseHandler);
console.log(newCourses);

//reduce()
// BIến lưu trữ  
// let totalCoin = 0;

// //Lặp qua các phần tử 
// for(let course of courses) {
//     totalCoin += course.coin;
// }
// console.log(totalCoin);
 
//Dùng reduce()
//currentValue: vị trí đối tượng, currentIndex: vị trí trong mảng 
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    i++;
    let total = accumulator + currentValue.coin; 
    console.table({
        'Lượt chạy:': i,
        'Biến tích trữ:': accumulator,
        'Giá khóa học:': currentValue.coin,
    });
    return total;
}

let totalCoin = courses.reduce(coinHandler, 0);  

/* Cách viết ngắn gọn hơn
let totalCoin = courses.reduce((accumulator, currentValue) => accumulator + currentValue.coin, 0);
console.log(totalCoin);
*/