// import React from 'react';
// import { useEffect, useState } from "react";

// const UserList = () =>{
//     const [user, setUser] = useState([]);

//     useEffect(()=>{
//         const fetchUser = async()=>{
//             try{
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const data = await response.json();
//                 setUser(data);
//             }
//             catch(error){
//                 console.log('error fetching',error);
//             }
//         };

//         fetchUser();
//     },[]);

//     return(
//         <ul>
//         {user.map((user)=>(<li key={user.id}>{user.name}</li>))}
//         </ul>
//     );
// };
// export default UserList;


const fetch = async()=>{
    const response= await fetch('');
    const data = await response.json();
};

fetch();