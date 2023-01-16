import Container from "../../Components/Conatiner/Conatiner"
import PageInfo from "../../PageInfo/PageInfo"
import styles from "./contact.module.css"


function Contact(){
    return(
        <>
        <PageInfo />
        <Container className={styles.contact}>
        <div className={styles.contactUs}>
            <h3>Drop Us a line</h3>
            <div className={styles.colGroup}>
                <label htmlFor="name">Enter Your Name</label>
                <input type="text"  name="name"/>
            </div>
            <div className={styles.colGroup}>
                <label htmlFor="name">Enter Email</label>
                <input type="text" name = "email"/>
            </div>
            <div className={styles.colGroup}>
                <label htmlFor="name">Phone Number</label>
                <input type="text" />
            </div>
            <div className={styles.colGroup}>
                <label htmlFor="name">Message</label>
                <textarea></textarea>
            </div>
            <button className={styles.submit}>Send a Message</button>
        </div>
        <div className={styles.address}>
            <div className={styles.addColGroup}>
                <h3>Address</h3>
                <p>123 Street Name , City , Country</p>
            </div>
            <div className={styles.addColGroup}>
                <h3>Phone</h3>
                <p>Toll Free (123) 472-796</p>
                <p>Mobile : +91-9910XXXX</p>
            </div>
            <div className={styles.addColGroup}>
                <h3>Email</h3>
                <p>mail@example.com</p>
            </div>
            <div className={styles.addColGroup}>
                <h3>Working Days</h3>
                <p>Mon - Fri / 9:30 Am - 6:30PM</p>
            </div>
        </div>
        </Container>
        </>
    )
}


export default Contact