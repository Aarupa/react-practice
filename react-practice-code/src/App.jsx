
// import ProductList from "./Components/Props/ProductList";
// import Counter from "./Components/Props/Counter";
// import Timer from "./Components/Props/Timer";
// import LoginForm from "./Components/Props/LoginForm";
// import { ThemeProvider , useTheme } from "./Components/Props/Theme/ThemeContext";
// import ThemeSwitcher from "./Components/Props/Theme/ThemeSwitcher";
// import ThemeButton from "./Components/Props/Theme/ThemeButton";



// const AppContent = () => {
//   const { theme } = useTheme();

//   return (
//       <div>
//           <h1>Theme Application</h1>
//           <ThemeSwitcher />
//           <ThemeButton>Click Me</ThemeButton>
//       </div>
//   );
// };

// function App() {
//   return (
//    <>
//       {/* <ProductList/> */}
//       {/* <Counter/> */}
//       {/* <Timer/> */}
//       {/* <LoginForm/> */}
//       {/* <ThemeProvider>
//             <AppContent />
//       </ThemeProvider> */}
//     </>
//   );
// }


// export default App

// import {BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
// import Home from './Components/Props/Router/Home';
// import About from './Components/Props/Router/About';
// import Contact from './Components/Props/Router/Contact';

// const App = () =>{
//   return(
//     <Router>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to= "/about">About</Link>
//         <Link to ="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path='/' Component={Home}/>
//         <Route path='/about' Component={About}/>
//         <Route path ='/contact' Component={Contact}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App;


// import React, { useEffect, useState } from "react";
// import UserList from "./Components/Props/HOC/UserList";
// import WithLoading from "./Components/Props/HOC/WithLoding";

// const UserListWithLoding = WithLoading(UserList);

// const App = () =>{
//   const [isLoding,setIsloding]= useState(true);

//   useEffect(()=>{
//     const timer = setTimeout(()=>{
//       setIsloding(false);
//     },2000);

//     return () => clearTimeout(timer);

//   },[]);

//   return(
//     <div>
//       <h1>UserList</h1>
//       <UserListWithLoding isLoding={isLoding}/>
//     </div>
//   )
// }

// export default App;

import TodoApp from "./Components/Props/TODO-App/TodoApp";
import MovieList from "./Components/Props/MovieList";

const App = () =>{
  return(
    // <TodoApp/>
    <MovieList/>
  )
}

export default App;