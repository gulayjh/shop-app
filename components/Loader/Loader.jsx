import style from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={style.spinner}>
            <div className={style.ldsDualRing}></div>
        </div>
    );
};

export default Loader;
