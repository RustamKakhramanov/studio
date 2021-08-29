import styles from "../../../../styles/modules/Home.module.scss";
import {Box, Grid, Container} from "@material-ui/core";
import PreTitle from "../../../Elements/PreTitle";
import SectionTitle from "../../../Elements/SectionTitle";
import React from "react";
import Image from 'next/image';
import {CONTENT} from "../../../../configs";

const guarantee = CONTENT.home.guarantee;

const Guarantee = () => {
    return (
        <div className={styles.guarantee + ' ' + 'section'}>
            <Container>
                <Box>
                    <PreTitle>
                        ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ К НАМ
                    </PreTitle>

                    <SectionTitle>
                        Мы успешно помогаем <b>развивать бизнес</b> нашим партнерам и гарантируем <b>индивидуальный
                        подход</b> к каждому проекту.
                    </SectionTitle>
                    <Grid container className={styles.list} justifyContent={'space-around'}>
                        {guarantee.map(
                            (el, index) => (
                                <Grid className={styles.item} key={index} item md={5}>
                                   <Grid container >
                                       <Grid item xs={2}><Image src={el.icon} width={48} height={48}/></Grid>
                                       <Grid item xs={10} className={styles.content}>
                                           <div className={styles.title}>{el.title}</div>
                                           <div className={styles.text}>{el.content}</div>
                                       </Grid>
                                   </Grid>
                                </Grid>
                            ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default Guarantee;