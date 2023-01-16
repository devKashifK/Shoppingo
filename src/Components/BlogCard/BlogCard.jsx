import styles from "./BlogCard.module.css";

function BlogCard(props){
  return (
    <div className={styles.blogCard}>
      <div className={styles.date}>{props.date} <strong>{props.month}</strong></div>
      <div className={styles.blogCardImg}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.blogContent}>
      <h4 className={styles.blogTitle}>{props.title}</h4>
      <p className={styles.blogDesc}>
        {props.description}
      </p>
      </div>
      <div className={styles.comment}>{props.comment} Comments</div>
    </div>
  );
   
}

export default BlogCard;
