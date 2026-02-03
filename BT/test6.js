// function reverseArr(arr){
//     newArr = arr.reverse()
//     return newArr
// }


// console.log(reverseArr(array))

// function reverseArr(arr){
//     newArr = [];
//     for(let i = arr.length ; i >= arr[0]; i--){
//         newArr.push(i)     
//     }
//     return newArr
   
// }
// console.log(reverseArr(array));

// function getNumber(arr){
//     newArr = [];    
//     for(let i = 0; i < arr.length; i++){
//         let n = arr[i]
//         if(n % 3 !== 0){
//             newArr.push(n)            
//         }
//     }
//     return newArr
// }
// const array = [1, 2, 3, 4, 5, 6, 9, 12]
// console.log(getNumber(array));


function getSum(arr, k){
    newSum = []  
    num = new Set()
    console.log(newSum);
    

    for(let i = 0; i < arr.length; i++){
        let n = arr[i]
        let m = k - n;

        console.log('n:',n); 
        console.log('m: ',m);

        if(num.has(m)){ 
            newSum.push([m,n])       
        }  
        num.add(m)
       }
    return newSum 
    }

const array = [0, 1, 2, 3, 4, 5, 6]

const k = 6;
console.log('result', getSum(array, k));