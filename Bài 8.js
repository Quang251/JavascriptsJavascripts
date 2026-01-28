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
    const result = {};
    for (let i = 0; i < list.length; i++) {
        let emp = list[i];
        let department = emp.dept;
        if (!group[department]){
            group[department] = [];
            
        }else{
            group[department].push(emp);
        }
    }
    return result;
}
console.log(groupByDept(employees));