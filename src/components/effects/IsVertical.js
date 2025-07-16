import { useEffect, useState } from "react";

export function useIsVerticalLayout() {
    const getIsVertical = () => window.innerHeight / window.innerWidth > 1.3;
    const [isVertical, setIsVertical] = useState(getIsVertical());

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(getIsVertical());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isVertical;
}