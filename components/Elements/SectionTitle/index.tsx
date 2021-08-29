import styles from "../../../styles/modules/other.module.scss";

export default function SectionTitle(props) {
    const {
        children
    } = props;

    return (
        <div>
            <h3 className={styles.title}>
                {children}
            </h3>
        </div>
    );
}