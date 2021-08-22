import {Props} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Main(props : Props<any>) {
    const {
        children,
    } = props;

    return (
        <div id='main' className='root-box'>
            <Navbar/>
                <div>
                    {children}
                </div>
            <Footer/>
        </div>
    );

}