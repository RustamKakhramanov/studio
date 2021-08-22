import React, {useState, useEffect} from "react";
import Main from "../layouts/Main";
import styles from "../styles/modules/Home.module.scss";
import {Container, Grid, Button, Box} from "@material-ui/core";
import Image from "next/image";
import CallButton from "../components/Elements/Buttons/CallButton";

export default function Home() {
    const firstSection = (
        <div>
            <div className={styles.firstSection + ' main-section'}>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item md={7} sm={12}>
                            <Box>
                                <h1 className={styles.title}>
                                    <span className={styles.company}>Useful Target.</span>
                                    <span className={styles.offer}>Продвижение Вашего бизнеса в сфере IT</span>
                                </h1>
                                <div className={styles.needText}>
                                    Вам нужен не <span className='bold-offer-items'>сайт</span>
                                    и не <span className='bold-offer-items'>красивое видео</span>,
                                    Вам нужно <span className='bold-offer-items'>привлечь клиентов</span>
                                </div>
                            </Box>

                            <CallButton />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>

    );

    return (
     <Main>
         {firstSection}
     </Main>
    )
}
