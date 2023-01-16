import styles from "./Container.module.css";

function Container(props) {
  return (
    <div className={`${styles.dynamicContainer} ${props.className} `}>
      {props.children}
    </div>
  );
}

export default Container;
