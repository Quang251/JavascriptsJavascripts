/*BÀI 8: 
NHÓM DỮ LIỆU (Group By) Yêu cầu: Cho mảng danh sách nhân viên: 
employees = [{name: 'A', dept: 'IT'}, {name: 'B', dept: 'HR'}, {name: 'C', dept: 'IT'}]. 
Viết hàm nhóm các nhân viên theo phòng ban (dept). Kết quả mong muốn: { IT: [{...}, {...}], HR: [{...}] }
*/

const employees = [
    {name: 'A', dept: 'IT'},
    {name: 'B', dept: 'HR'},
    {name: 'C', dept: 'IT'},
    {name: 'D', dept: 'Marketing'},
    {name: 'E', dept: 'HR'}
];

function groupByDept(list) {
    const group = {};
    for (let i = 0; i < list.length; i++) {
        let emp = list[i];
        let department = emp.dept;
        if (!group[department]){
            group[department] = [];
            
        }
        group[department].push(emp);
        
    }
    return group;
}
console.log(groupByDept(employees));

// const groups =[
//     {name: 'A', dept: 'IT'},
//     {name: 'B', dept: 'HR'},
//     {name: 'C', dept: 'IT'},
//     {name: 'D', dept: 'HR'}
// ];

// function groupByDept(list){
    //     let result = [];
    //     for (let i = 0; i < list.length; i++){
        //     let emp = list[i];
        //     let department = emp.dept
//         if(result[department]){

//         }else
//     }
// }





