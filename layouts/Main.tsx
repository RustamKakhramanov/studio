import {Props} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Main(props : Props<any>) {
    const {
        children,
    } = props;

    return (
        <div>
            <Navbar/>
                <div>
                    {children}
                </div>
            <Footer/>
        </div>
    );

}