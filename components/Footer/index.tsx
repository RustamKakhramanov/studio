import styles from "../../styles/modules/Footer.module.scss";
import {Container, Grid} from "@material-ui/core";
import CallForm from '../../components/Elements/CallForm';
import Link from 'next/link';
import {CONTACT} from "../../configs";

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.pretitle}>
                    СВЯЖИТЕСЬ С НАМИ
                </div>
                <div className={styles.title}>
                    Нужна <b>консультация</b> или уже хотите <b>начать проект</b>? Оставьте заявку или свяжитесь с нами по следующим контактам.
                </div>
                <Grid container>
                    <Grid item md={5}>
                        <CallForm/>
                    </Grid>
                    <Grid item md={5}>
                        <div className={styles.infoItem}>
                            <div className={styles.desc}>ЭЛЕКТРОННАЯ ПОЧТА</div>
                            <a href={"mailto:" + CONTACT.email} className={styles.value}>{CONTACT.email}</a>

                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.desc}>ТЕЛЕФОН/WHATSAPP/TELEGRAM</div>
                            <a href={"tel:" + CONTACT.phone} className={styles.value}>{CONTACT.phone}</a>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
