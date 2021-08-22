import Lottie from 'react-lottie';
import animationData from "./smart.json";
import React from "react";
import styles from "../../../styles/modules/SmartImage.module.scss";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default function MainSmartImage() {
    return (
        <div className={styles.smartContent}>
            <div  className={styles.lottie}>
                <Lottie
                    options={defaultOptions}
                    width={700}
                    height={700}
                />
            </div>

        </div>

    );
}