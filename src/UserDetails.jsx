import { useState } from "react";

// different type of changing UserDetails
// type 1
// const User = () => {
//     const [userName, setUserName] = useState("Hari")
//     const [userAge, setUserAge] = useState(27)

//     const changeName = () => {
//         userName == "Hari" ? setUserName("prasath") : setUserName("Hari")
//     }
//     const changeAge = () => {
//         userAge == 27 ? setUserAge(28) : setUserAge(27)
//     }

//     return (
//         <>
//             <h1>User Details</h1>
//             <h3>{userName}</h3>
//             <h3>{userAge}</h3>
//             <button onClick={changeName}>changeName</button>
//             <button onClick={changeAge}>changeAge</button>

//         </>
//     );
// }

// export default User;

// type 2
// const User = () => {

//     const [user, setUser] = useState({ name: "Hari", age: 27 })

//     const changeName = () => {
//         user.name == "Hari" ? setUser({ ...user, name: "prasath" }) : setUser({ ...user, name: "Hari" })

//     }
//     const changeAge = () => {
//         user.age == 27 ? setUser({ ...user, age: 28 }) : setUser({ ...user, age: 27 })
//     }
//     return (
//         <>

//             <h1>User Details</h1>
//             <h3>{user.name}</h3>
//             <h3>{user.age}</h3>
//             <button onClick={changeName}>changeName</button>
//             <button onClick={changeAge}>changeAge</button>

//         </>
//     );
// }

// export default User;

// type : 3
// entered input values thats get from input element 
// const User = () => {
//     const [user, setUser] = useState({ name: "", age: "" })

//     const changeName = (e) => {
//         setUser((user) => {
//             return {
//                 ...user, name: e.target.value
//             }
//         })
//     }

//     const changeAge = (e) => {
//         setUser((user) => {
//             return {
//                 ...user, age: e.target.value
//             }
//         })
//     }

//     return (
//         <>
//             <h1>{user.name}</h1>
//             <h1>{user.age}</h1>
//             <form >
//                 <label >Enter a Name :</label> <input type="text" onChange={changeName} />
//                 <br />
//                 <label >Enter a Age :</label><input type="number" onChange={changeAge} />
//             </form>

//         </>
//     );
// }

// export default User;

// type :4 
// create one function instead of two , and  its one called when i entered in input that gives the value of name and age instantly

// const User = () => {
//     const [user, setUser] = useState({ fullName: "", age: "" })
//     const ChangeHandler = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value })
//     }
//     return (
//         <>
//             <h1>{user.fullName}</h1>
//             <h1>{user.age}</h1>
//             <form >
//                 <label >Enter a Name :</label><input type="text" name="fullName" onChange={ChangeHandler} />
//                 <br />
//                 <label >Enter a Age :</label><input type="number" name="age" onChange={ChangeHandler} />
//             </form>
//         </>
//     );
// }
// export default User;