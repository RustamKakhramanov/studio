import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import style from "../../../styles/modules/DescriptionCards.module.scss";
import Link from 'next/link';

const useStyles = makeStyles({
    root: {

    },
});


export default function DescriptionCard(props) {
    const classes = useStyles();
    const {
        data
    } = props;
    console.log(data);
    const content = (
        <CardContent className={style.cardContent}>
            <h2 className={style.title}>
                {data.title}
                <div className={style.arrow}></div>
            </h2>
            {data.items.map((element, key) => (
                <p className={style.element} key={key}>
                    {element}
                </p>
            ))}

        </CardContent>
    );

    return data.link ? (
        <Card  className={style.card}>
                <Link href={data.link}>
                    <CardActionArea className={style.cardActionArea}>
                        { content }
                    </CardActionArea>
                </Link>
        </Card>
    ) :
        (
            <Card  className={style.card}>
                {content}
            </Card>

        );
}