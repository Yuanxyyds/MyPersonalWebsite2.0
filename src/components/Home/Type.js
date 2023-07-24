import React from "react";
import Typewriter from "typewriter-effect";
import Container from "react-bootstrap/Container";

function Type() {
    return (
        <Container fluid>
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


        </Container>

    );
}

export default Type;
