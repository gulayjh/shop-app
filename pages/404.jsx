import Link from "next/link";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Page not Found...</h2>

            <h3>
                Go back to the <Link href="/">Homepage</Link>
            </h3>
        </div>
    );
};

export default NotFound;
