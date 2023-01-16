import styles from "./Button.module.css";

function Button(props) {
  return (
    <button onClick={props.EventHandler} className={`${styles.lightBtn} ${props.className}`}>
      {props.children}
    </button>
  );
}

export function DarkButton(props) {
  return (
    <button onClick={props.EventHandler} className={`${styles.darkBtn} ${props.className}`}>
      {props.children}
    </button>
  );
} 

export default Button;
