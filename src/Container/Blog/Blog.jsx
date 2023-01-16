import BlogCard from "../../Components/BlogCard/BlogCard";
import Container from "../../Components/Conatiner/Conatiner";
import Title from "../../Components/Title/Title";
import { blog } from "./blogData";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <Container>
      <Title title={"Latest News"} />
      <div className={styles.blogConatiner}>
        {blog.map((item) => {
          return (
            <BlogCard
              key={item.id}
              date={item.date}
              month={item.month}
              img={item.img}
              comment={item.comment}
              description={item.description}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Blog;
