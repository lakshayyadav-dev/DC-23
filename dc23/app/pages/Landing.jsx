import React from "react";
import Image from "next/image";
import coverImage from "../../public/images/cover-image.jpg";
import styles from "../../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay} />
            <Image src={coverImage} alt={"coverImage"} className={styles.coverImage}/>

            <div className={styles.content}>
                <nav className={styles.navbar}>
                    <ul>
                        <li>about</li>
                        <li>past</li>
                        <li>inventions</li>
                        <li>significance</li>
                    </ul>
                </nav>

                <div className={styles.heading}>
                    <h1>NIKOLA TESLA</h1>
                    <p>THE MAN WHO PREDICTED THE FUTURE</p>
                </div>
            </div>
        </div>
    );
};

export default Landing;