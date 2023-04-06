import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <button onClick={props.onClick} className={styles.btn}>
            {props.children}
        </button>
    );
};

export default Button;