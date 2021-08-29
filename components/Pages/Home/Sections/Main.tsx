import styles from "../../../../styles/modules/Home.module.scss";
import {Box, Container, Grid} from "@material-ui/core";
import CallButton from "../../../Elements/Buttons/CallButton";
import MainSmartImage from "../../../Elements/MainSmartImage";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    gridRelative: {
        zIndex: 1,
        position: 'relative',

    },
    gridRow: {
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column-reverse',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column-reverse',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    }
}));

const  Main = () => {
    const mainStyles = useStyles();
    return (
        <div className={styles.firstSection + ' main-section section'}>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className={mainStyles.gridRow}
                >
                    <Grid item md={6} sm={12} xs={12} className={mainStyles.gridRelative}>
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

                        <CallButton/>
                    </Grid>
                    <Grid item md={5} xs={8} sm={5}>
                        <Box display={{xs: 'none', md: 'block'}}>
                            <MainSmartImage/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Main;