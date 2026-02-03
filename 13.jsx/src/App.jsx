import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import demoPic from "../src/assets/img/avatar.jpg"

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const welCome = [
  "Chào mừng bạn đến với thế giới React",
  "Rất vui được chào đón bạn đến với thế giới React",
  "Chúng ta sẽ được học các kiến thức thú vị về React",
];

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

const name = "Nam";
let person = {
  name: "Quang",
  age: 23
}
let isLogedIn = true
function DynamicValue(){
  return(
    <>
    <h2>Chào {name}</h2>
    <p>Kết quả: {1+2*5}</p>
    {/*2. Không chèn **câu lệnh **(statement)*/}
    {/* <p>{if(true) {"Đúng rồi"}}</p> */}
          {/*3. Kết hợp với điều kiện (Toán tử Ternary
    JSX không hỗ trợ trực tiếp 'if-else', nhưng có thể dùng toán tử ternary bên JS) */}
    <p>{isLogedIn ?"Bạn đã đăng nhập": "Vui lòng đăng nhập"}</p>

    <p>Tên: {person.name}, Tuổi: {person.age}    
    </p>
   
   {/*5. Chèn hình ảnh vào thẻ img */}
   <img src={demoPic} alt="" />
    </>

    
  )
}

function App() {
  return ( 
   <>
    <Header />
    <DynamicValue />
   </>
  );
}



export default App
