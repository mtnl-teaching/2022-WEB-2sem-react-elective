import { useState } from "react";

export default function CreateTweet({createTweet}) {
    const [myMind, setMyMind] = useState("")

    function handleChange(event) {
        setMyMind(event.target.value)
    }

    function handleSave() {
        const data = {
            message: myMind,
            createdAt: new Date().getTime()
        }
        createTweet(data)
        setMyMind("");
    }

    return (
        <>
            <textarea
                value={myMind} 
                onChange={handleChange} 
                id="myMind" 
                placeholder='Tweet something'
                cols={44}
                rows={5}
            />
            <button onClick={handleSave}>Tweet</button>
        </>
    )
}