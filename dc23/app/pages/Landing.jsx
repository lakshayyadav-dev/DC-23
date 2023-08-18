import React from "react";
import Image from "next/image";
import coverImage from "../../public/images/cover-image (1).webp";
import styles from "../../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.container} id={"home"}>
            <div className={styles.overlay} />
            <Image src={coverImage} alt={"coverImage"} className={styles.coverImage} priority />

            <div className={styles.content}>
                <nav className={styles.navbar}>
                    <ul>
                        <li><a href={"#about"}>about</a></li>
                        <li><a href={"#past"}>past</a></li>
                        <li><a href={"#inventions"}>inventions</a></li>
                        <li><a href={"#conclusion"}>significance</a></li>
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