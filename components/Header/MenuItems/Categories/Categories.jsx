import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../../utils";
import style from "./categories.module.css";
import DropDowns from "./DropDowns/DropDown";
import Link from "next/link";

const Categories = () => {
    const [data, setData] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    useEffect(() => {
        axios
            .get(baseURL + `Category/getcategories?lng=en`)
            .then((response) => setData(response.data.obj));
    }, []);
    return (
        <div
            className={
                showDropDown ? style.MenuHoverContent : style.MenuContent
            }
        >
            {data &&
                data.length > 0 &&
                data.map((item) => {
                    if (item.parentId === null) {
                        return (
                            <div
                                className={style.CategoryContainer}
                                key={item.name}
                            >
                                <Link href="/">
                                    <a
                                        onMouseEnter={() =>
                                            setShowDropDown(true)
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                                <div className={style.DropDownContainer}>
                                    {showDropDown ? (
                                        <div className={style.DropDowns}>
                                            <DropDowns
                                                setShowDropDown={
                                                    setShowDropDown
                                                }
                                                data={data}
                                                id={item.id}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        );
                    }
                })}
        </div>
    );
};

export default Categories;
