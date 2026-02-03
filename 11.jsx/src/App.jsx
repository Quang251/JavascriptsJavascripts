  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const welCome = [
  "Chào mừng bạn đến với thế giới React",
  "Rất vui được chào đón bạn đến với thế giới React",
  "Chúng ta sẽ được học các kiến thức thú vị về React",
];
//Hàm Header đã viết hóa, đã return về 1 phần tử duy nhất và bọc trong <>
// function Header() {
//   return(
//     <>
//      <h2>Chào mừng đến với thế giới React</h2>
//      <p>Hôm nay là <strong>22/1/2024</strong>. Thời gian hiện tại {" "}
//      <strong>19:00</strong>
//      </p>
//     </>
//   );
// }

function ranDomTitle (){
  return Math.floor(Math.random() * welCome.length);
}

function Header(){
  const title = welCome[ranDomTitle()]
  return(
    <>
        <h1>{title}</h1>
        <p>Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại{" "}
        <strong>{time}</strong>
        </p>   
    </>
  )
}

function App() {
  return ( 
    <Header />
  );
}
// function List(){
//   return ( 
//     <>
//     <h3>Danh sách công việc của tôi</h3>
//       <ul>
//         <li>Học bài React</li>
//         <li>Hoàn thành bài tập lập trình</li>
//         <li>Dọn dẹp bàn làm việc</li>
//       </ul>
//       <p>Chúc bạn hoàn thành công việc tốt nhất hôm nay</p>
//     </>
//   );
// }



export default App
