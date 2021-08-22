import React, {useState, useEffect} from "react";
import Main from "../layouts/Main";
import homeStyles from "../styles/modules/Home.module.css";

export default function Home() {
    const firstSection = (
        <div className={homeStyles.firstSection + ' main-section'}>
            asdasdsad
        </div>
    );

    return (
     <Main>
         {firstSection}
     </Main>
    )
}
