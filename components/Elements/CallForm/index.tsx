import {useState} from "react";
import { Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import styles from "../../../styles/modules/CallForm.module.scss";

type FormValues = {
    name: string;
    phoneOrEmail: string;
};




export default function CallForm() {
    const [error, setError] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const submitForm = async event => {
        event.preventDefault();
        let data:FormValues = {
            name: event.target.name.value,
            phoneOrEmail: event.target.phoneOrEmail.value,
        };

        if ( !data.name || !data.phoneOrEmail ) {
            setError('Заполните все поля');
        } else {
            setError('');
        }

        const res = await fetch(
            '/',
            {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
    }



    return (
        <form className={styles.callForm} onSubmit={submitForm}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <input className={styles.field} type="text" name='name' placeholder={'Ваше имя'} required/>
                </div>
                <div className={styles.item}>
                    <input className={styles.field} type="text" name='phoneOrEmail'  placeholder={'Телефон или почта'} required/>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.item}>
                    <Button variant="contained" className={styles.button} type={'submit'}>
                        ОТПРАВИТЬ
                    </Button>
                </div>
            </div>
        </form>
    );
}
