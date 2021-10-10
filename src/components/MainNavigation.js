import { Link } from "react-router-dom";

const MainNavigation = ()=>{
    return(
        <header className="w-full h-24 bg-red-500 sticky top-0 z-50">
            <div className="text-6xl text-white font-black py-3 px-4 uppercase">
                <Link to="/">slim junk</Link>
            </div>
        </header>
    );
}

export default MainNavigation;