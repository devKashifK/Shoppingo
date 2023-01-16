import styles from "./OfferCard.module.css";


export default function OfferCard(props) {
  return (
    <div className={styles.offerCard} style={{borderBottom : `4px solid ${props.color}`}}>
      <div className={styles.icon} style={{color : `${props.color}`}}>
        {props.icon}
      </div>
      <h3>{props.title}</h3>
      <p>
      {props.description}
      </p>
    </div>
  );
}
