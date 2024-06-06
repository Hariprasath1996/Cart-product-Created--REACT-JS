import { useState } from "react";
import "./advice.css"

// counter created = type 1

const Advice = () => {
    const [advice, setAdvice] = useState("Just Click The Button To Get Advices For You")
    const [count ,setCount]=useState(0)

    async function getAdvices() {

        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        setAdvice(data.slip.advice)
        setCount((count)=>count+1)
    }


    // created another type o create count = type 2


    return (
        <>
            <div className="Container">
                <h1 className="header">ADVICE WEB_PAGE </h1>
                <h1 >
                    {advice}
                </h1>
                <button onClick={getAdvices} type="submit">
                    Get Advice
                </button>

                <h3>You have Read  <span><b>{count}</b></span> pieces of  Advice </h3>
            </div>
        </>
    );
}

export default Advice;