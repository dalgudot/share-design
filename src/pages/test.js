// import Login from "../components/login/login";
// import AuthService from "../service/auth_survice";
// import { useEffect, useRef, useState } from "react";
// import VisitorBook from "../service/visitor_book";
// import firebase from "firebase";

// const authService = new AuthService();

// const visitorBook = new VisitorBook();

// const Test = () => {
//   const inputRef = useRef("");
//   const [text, setText] = useState(inputRef.current.value);

//   useEffect(() => {
//     console.log(inputRef.current.value);
//   }, [inputRef.current.value]);

//   const onChangeInput = () => {
//     setText(inputRef.current.value);
//     visitorBook;
//     console.log(firebase.database());
//   };

//   return (
//     <>
//       <Login authService={authService} />

//       <input type="text" ref={inputRef} onChange={onChangeInput}></input>

//       <h1>{text}</h1>
//     </>
//   );
// };

// export default Test;
