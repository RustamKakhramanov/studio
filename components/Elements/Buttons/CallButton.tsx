import {Button} from "@material-ui/core";
import React, {Props} from "react";
import styles from '../../../styles/modules/Button.module.scss';
import {
    createTheme,
    createStyles,
    withStyles,
    makeStyles,
    Theme,
    ThemeProvider,
} from '@material-ui/core/styles';

import { green, blue } from '@material-ui/core/colors';

interface ButtonProps {
    children?: React.ReactNode;
}

export default function CallButton(props :ButtonProps) {
    // @ts-ignore
    const {
        children
    } = props;

    const ColorButton = withStyles((theme: Theme) => ({
        root: {
            color: '#FFFFFF',
            backgroundColor: '#305FF3',
            '&:hover': {
                backgroundColor: blue[700],
            },
            minHeight: 90,
            minWidth:300,
            marginTop:50,
            fontSize:20,
            fontWeight:900,
        },
    }))(Button);

    return (
        <ColorButton variant="contained"  className={styles.callButton }>
            { children ? children : 'СВЯЗАТЬСЯ С НАМИ'}
        </ColorButton>
    );
}