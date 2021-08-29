import styles from "../../../../styles/modules/Home.module.scss";
import {Box, Container, Grid} from "@material-ui/core";
import React from "react";
import PreTitle from "../../../Elements/PreTitle";
import SectionTitle from "../../../Elements/SectionTitle";
import DescriptionCardsList from "../../../Elements/DescriptionCardsList";
import {CONTENT} from '../../../../configs';

const offerList = CONTENT.home.offerList;

const Offer = () => {
    return (
        <div className={/*styles.secondSection + '' + */'section'}>
            <Container>
                    <Box>
                        <PreTitle>
                            ЧЕМ МЫ МОЖЕМ ПОМОЧЬ
                        </PreTitle>

                        <SectionTitle>
                            Наша студия поможет Вам разобраться, <b>продвинуть</b> Ваш бизнес,
                            <b> привлечь новых
                                и укрепить доверие имеющихся клиентов.</b>
                        </SectionTitle>
                        <DescriptionCardsList elements={offerList}/>
                    </Box>
            </Container>
        </div>
    );
}

export default Offer;