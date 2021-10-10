import { Link } from "react-router-dom";

const Top = ()=>{
    return(
        <div className=" py-36">
            <h1 className="text-center text-8xl italic font-bold py-5 uppercase">welcome</h1>
            <p className="text-center text-2xl italic py-5 capitalize">
                ~ analyze your routine through ramen life ~
            </p>
            <div className="text-center m-6">
                <button className=" bg-red-500 text-white text-xl p-2 rounded-md font-black hover:bg-orange-400" >
                    <Link to="/ramens">Ramen List</Link>
                </button>
            </div>
        </div>
    );
}

export default Top;