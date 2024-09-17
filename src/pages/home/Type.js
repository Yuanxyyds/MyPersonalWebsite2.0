import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div className="typewriter-wrapper-home">
            <Typewriter
                options={{
                    strings: [
                        "Student at University of Toronto",
                        "Cloud and Mobile App Developer",
                        "Web Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>


    );
}

export default Type;
