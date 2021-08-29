import {
    Grid,
    Theme,
    createStyles,
    Container,
} from "@material-ui/core";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/modules/Navbar.module.scss' ;
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import {CONTACT} from "../../configs";

export default function Navbar(...props) {
    const sections = [
        {title: 'Главная', url: '/'},
        {title: 'Разаработка', url: '#'},
        {title: 'Дизайн', url: '#'},
        {title: 'Продвижение', url: '#'},
        {title: 'МЕДИА', url: '#'},
        {title: 'ПРОЧЕЕ', url: '#'},
    ];

    return (
        <header className={styles.header}>
            <div style={{position: 'relative'}}>
                <Grid item sm={12} xs={12}>
                    <Container>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >

                            <Grid item md={2} sm={12}>
                                <Image src={'/img/header/logo.svg'} width={148} height={33}/>
                            </Grid>

                            <Grid item md={8}>
                                <nav>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        {sections.map((section) => (
                                            <div className={styles.link}   key={section.title}>
                                                <Link href={section.url}>
                                                    {section.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </Grid>
                                </nav>
                            </Grid>
                            <Grid item md={2}>
                                <a href={"tel:" + CONTACT.phone} className={styles.number}>
                                    <LocalPhoneIcon  style={{ marginRight: 7 }}/>
                                    <span>{CONTACT.phone}</span>
                                </a>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </div>
        </header>
    );
}