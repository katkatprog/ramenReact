import MainFooter from "./MainFooter";
import MainNavigation from "./MainNavigation";

const Layout = (props)=>{
    return(
        <div className="bg-gray-200 ">
            <div className="flex flex-col min-h-screen">
                <MainNavigation></MainNavigation>
                <main>{props.children}</main>
                <MainFooter></MainFooter>
            </div>
        </div>
    );
}

export default Layout;