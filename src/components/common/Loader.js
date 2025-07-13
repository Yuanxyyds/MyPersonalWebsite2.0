import { useEffect, useRef } from 'react';
import "./../../style/common/loader.css";

const Loader = () => {
    const loaderRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            loaderRef.current.classList.add('fade-out-up');
            loaderRef.current.addEventListener('animationend', () => {
                loaderRef.current.remove();
                document.body.style.overflow = 'auto';
            });
        }, 2500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);


    return (
        <div id="loader" ref={loaderRef}>
            <h1 className="bbold fade-in-text">
                STEV
            </h1>
            <h1 className="bbold fade-in-text">
                .LIU
            </h1>


        </div>
    );
};

export default Loader;
