import Link from "next/link";
import {Grid} from "@material-ui/core";
import DescriptionCard from "../DescriptionCard";
import style from "../../../styles/modules/DescriptionCards.module.scss";

export default function DescriptionCardsList (props) {
    const {
        elements,
        title
    } = props;

    return (
        <Grid container className={style.list}>
            {elements.map((element, key) => (
                <DescriptionCard data={element} key={key}/>
            ))}
        </Grid>

    );
}