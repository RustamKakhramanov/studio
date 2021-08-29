import styles from "../../../../styles/modules/Portfolio.module.scss";
import {Box, Container, Grid} from "@material-ui/core";
import React from "react";
import PreTitle from "../../../Elements/PreTitle";
import SectionTitle from "../../../Elements/SectionTitle";
import {CONTENT} from "../../../../configs";
import Link from 'next/link';
import {CallButton} from "../../../Elements/Buttons";

const portfolioList = CONTENT.portfolio;

const Portfolio = () => {
    return (
        <div className={styles.portfolioSection + ' ' + 'section'}>
            <Container>
                <Box>
                    <PreTitle>
                        НАШИ РЕШЕНИЯ
                    </PreTitle>

                    <SectionTitle>
                        <b> Исследуем, подбираем, делаем, продвигаем. </b>
                        Правильно <b>оцениваем</b> потребности рынка.
                    </SectionTitle>
                </Box>
                <div className={styles.portfolio}>
                    {portfolioList.map((element, key) => (
                        <div className={styles.item} key={key} style={{backgroundImage: 'url(' + element.image + ')'}}>
                            <Link href={'#'}>
                                <div
                                    className={element.textColor ? styles.content + ' ' + styles[element.textColor] : styles.content}>

                                    <h4 className={styles.title}>{element.title}</h4>
                                    <h5 className={styles.subtitle}>{element.subTitle}</h5>
                                </div>
                            </Link>
                        </div>
                    ))}

                    <div className={styles.item}>
                        <div className={styles.callContent}>
                            <div className={styles.wantSee}>
                                Хотите здесь видеть
                            </div>
                            <div className={styles.project}>
                               Ваш проект?
                            </div>
                            <CallButton/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Portfolio;