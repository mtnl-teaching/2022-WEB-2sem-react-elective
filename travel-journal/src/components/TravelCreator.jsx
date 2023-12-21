import React from "react";

const TravelCreator = () => {
    return (
        <div>
            <input onBlur={input => console.log(input.target.value)} />           
        </div>
    );
}

export default TravelCreator;