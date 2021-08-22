import Lottie from 'react-lottie';
import animationData from "./smart.json";
import React from "react";
import styles from "../../../styles/modules/SmartImage.module.scss";
import Image from 'next/image';

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
                <div className={styles.lottieBg}>
                    <Image src={'/img/pages/index/main/smart-bg.svg'} width={678} height={573} />
                </div>
                <div className={styles.lottiePhone}>
                    <Lottie
                        options={defaultOptions}
                        width='140%'
                        height='140%'
                    />
                </div>
            </div>

        </div>

    );
}