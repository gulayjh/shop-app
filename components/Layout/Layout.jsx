import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Title from "../Title/Title";

const Layout = ({ children, page }) => {
    const router = useRouter();
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <div>
            <div>{React.cloneElement(children, null)}</div>
        </div>
    );
};

export default Layout;
