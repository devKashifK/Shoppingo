import Brands from "../../Components/Brands/Brands";
import Container from "../../Components/Conatiner/Conatiner";
import Blog from "../../Container/Blog/Blog";
import Offer from "../../Container/Offer/Offer";
import PageInfo from "../../PageInfo/PageInfo";
import styles from "./about.module.css";

function About() {
  return (
    <>
      <PageInfo />
      <Container>
        <div className={styles.ourStory}>
          <div className={styles.content}>
            <h3>Our Story</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>{" "}
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
          </div>
          <img className={styles.img} src="./images/about.jpeg" alt="about" />
        </div>
      </Container>
      <Offer />
      <Blog />
      <Brands />
    </>
  );
}

export default About;
