"use client"
import React from "react";
import Image from "next/image";
import tesla_face from "../../public/images/tesla_face_upscaled.png";
import styles from "../../styles/Introduction.module.css";
import {motion} from "framer-motion";

const Introduction = () => {
    return (
        <div className={styles.container}>
            <Image src={tesla_face} alt={"tesla face"} className={styles.teslaImage}/>
            <div className={styles.textContainer}>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </motion.p>

                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </motion.p>

                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore
                    et dolore magna aliqua. </motion.p>
            </div>
        </div>
    );
};

export default Introduction;