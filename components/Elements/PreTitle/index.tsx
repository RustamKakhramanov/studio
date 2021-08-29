import styles from "../../../styles/modules/other.module.scss";

export default function PreTitle(props) {
    const {
        children
    } = props;

    return (
        <div>
            <h3  className={styles.preTitle}>
                {children}
            </h3>
        </div>
    );
}