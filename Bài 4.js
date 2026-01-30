/*
BÀI 4: TÌM SỐ LỚN THỨ HAI (Logic) Yêu cầu: Cho một mảng số nguyên. 
Viết hàm tìm số lớn thứ hai trong mảng. Lưu ý: Không sử dụng phương thức .sort(). 
Ví dụ: findSecondLargest([5, 12, 10, 12, 9]) => 10
*/

// 
function findSecondLargest(arr){
    if(arr.length < 2){
        console.log('mảng phải lớn hơn 2 phần tử');
        console.log('QUang');
               
        return null
    }
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];     
        }
    }
    // let maximum = Math.max(...arr)
    let both = []
    both.push(largest)
    console.log(both);
    
    let secondLargest = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < both[0]){
            if(secondLargest === null || arr[i] > secondLargest){
                secondLargest = arr[i];
            }
        }
        
       
    }
    both.push(secondLargest)
    console.log(both);
}


