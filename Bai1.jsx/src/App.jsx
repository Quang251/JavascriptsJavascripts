import './App.css'
import pic1 from "./assets/img/pic1.png"
import pic2 from "./assets/img/pic2.png"
import pic3 from "./assets/img/pic3.png"


import  { arr } from "../data.js";

function Header(){
  return(
    <>
      <h1>Quang học React</h1>
    </>
  )
}



// function UserCard({no,item}){
//   const {avatar,index, name, job} = item
//   console.log("🚀 ~ UserCard ~ avatar:", avatar)
//   return(
//     <li>
 
//       <img src={avatar} alt={name} />
//       <h2>{no}. {name}</h2>
//       <p>{job}</p>
//     </li>
//   )
// }
// function App() {
// console.log(arr)

//   return (
//     <>
//     <Header />
//     <main>
//       <section id = "core-concept">
//         <h2>Danh sách User</h2>
//         <ul>
//           {arr.map((item,index) => {
//             return <UserCard no = {index} item = {item}/>;
//           }
//         )}

//         </ul>

//       </section>
//     </main>
//     </>
//   )
// }




function UserCard({no, avatar, name, job}){
  return(
    <li>
 
      <img src={avatar} alt={name} />
      <h2>{no}. {name}</h2>
      <p>{job}</p>
    </li>
  )
}
function App() {
console.log(arr)

  return (
    <>
    <Header />
    <main>
      <section id = "core-concept">
        <h2>Danh sách User</h2>
        <ul>
          {arr.map((item,index) => {
            return <UserCard  {...{no:index + 1,...item}}/>;
          }
        )}

        </ul>

      </section>
    </main>
    </>
  )
}
export default App
