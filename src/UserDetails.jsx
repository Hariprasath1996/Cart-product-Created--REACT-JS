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
const User = () => {
const [user,setuser]=useState[{name:"Hari",age :27}]


    return (
        <>

        </>
    );
}

export default User;