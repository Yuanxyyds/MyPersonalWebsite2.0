import { useEffect, useState } from "react";

export function useIsVerticalLayout(ratio = 1.3) {
    const getIsVertical = () => window.innerHeight / window.innerWidth > ratio;
    const [isVertical, setIsVertical] = useState(getIsVertical());

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(getIsVertical());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return isVertical;
}