"use client"
import React from "react";
import Image from "next/image";
import coverImage from "../../public/images/cover-image (1).webp";
import styles from "../../styles/Landing.module.css";

import { motion } from "framer-motion";

const Landing = () => {
    return (
        <div className={styles.container} id={"home"}>
            <div className={styles.overlay} />
            <Image src={coverImage} alt={"coverImage"} className={styles.coverImage} priority />

            <div className={styles.content}>
                <motion.nav initial={{x:-500}} animate={{x:0}} transition={{ duration: 0.75}} className={styles.navbar}>
                    <ul>
                        <li><a href={"#about"}>about</a></li>
                        <li><a href={"#past"}>past</a></li>
                        <li><a href={"#inventions"}>inventions</a></li>
                        <li><a href={"#conclusion"}>significance</a></li>
                    </ul>
                </motion.nav>

                <motion.div initial={{x:-750}} animate={{x:0}} transition={{ duration: 0.75 }} className={styles.heading}>
                    <h1>NIKOLA TESLA</h1>
                    <p>THE MAN WHO PREDICTED THE FUTURE</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Landing;