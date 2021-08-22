import {Button} from "@material-ui/core";
import React, {Props} from "react";
import styles from '../../../styles/modules/Button.module.scss';

interface ButtonProps {
    classNames: string;
    color: string;
    children?: React.ReactNode;
}

export default function DefaultButton(props :ButtonProps) {
    const {
        classNames,
        color,
        children
    } = props;


    return (
        <a  className={classNames ? styles.default + ' ' + classNames : styles.default }>
            {children ? children: 'СВЯЗАТЬСЯ С НАМИ' }
        </a>
    );
}