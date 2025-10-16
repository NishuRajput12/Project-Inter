import { useState } from "react"
// function init(){
//   return Math.random();
// }
export default function Project(){
//   let [Count, setCount]=useState(0);
//   function counter(){
//     setCount (Count+=1);
//     console.log(Count);
//   }
//  let[isLike,setIslike]=useState(false);
//   let handlelike=()=>{
//    setIslike(!isLike);
//    console.log(isLike);
//   }
//   let styles={
//     backgroundColor: !isLike ? 'red' : 'blue',
//     color: 'white',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   }
  
  // return(
  //   <>
  //   <h1>{Count}</h1>
  //   <button onClick={counter}>click</button>
  //   <button onClick={handlelike} style={styles}>
  //   {isLike?(
  //         <p style={styles}>like</p>
  //     ):(
  //       <p style={styles}>dislike</p>
  //     )}
  //     </button>
  //     <p> random {init()}</p>
  //   </>

  // )
  const [user, setUser] = useState({
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  }
,{
  name: 'bob',
  age: 38,
  email: 'bob@example.com'
});

  const updateEmail = () => {
    setUser({ ...user, email: 'newemail@example.com' });
    console.log(user);
  };

  return (
    <div>
      <p>{user.name} - {user.email}</p>
      <button onClick={updateEmail}>Change Email</button>
    </div>
  );
}











































// Project.jsx
// export default function Project({ details, username, textcolor }) {
//   let condition = details % 2 == 0
//   let styles = {
//     backgroundColor: condition ? "yellow" : "red"
//   };
//   let heading = {
//     color: textcolor
//   }
//   let evenodd = (condition) ? "Even" : "odd";
    
//  function paragrap(){
// console.log("hello");
//  }
//     function  clickhandle(){
//       console.log("click me");
//     }
//   return (
//     <>
//       <h1 style={heading}>Hello {username} </h1>

//       <h3 style={styles} >{details} = {evenodd} </h3>
//       <br></br>
//       <button onClick={clickhandle }>Click me!</button>
//       <p onMouseOver={ paragrap}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, eum quos ullam doloribus dignissimos tempore voluptas consequatur placeat eaque voluptate odit beatae possimus nisi repudiandae expedita non quae totam alias!</p>
//     </>
//   );
// }



