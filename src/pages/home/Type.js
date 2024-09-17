import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div className="typewriter-wrapper-home">
            <Typewriter
                options={{
                    strings: [
                        "Student at University of Toronto",
                        "Mobile App Developer",
                        "Web Developer",
                        "Machine Learning Developer",
                    ],
                    cursor: '_',
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 80,
                }}
            />
        </div>


    );
}

export default Type;
