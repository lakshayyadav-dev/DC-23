"use client";

import React from "react";
import Image from "next/image";
import tesla_face from "../../public/images/tesla_face_upscaled.webp";
import styles from "../../styles/Introduction.module.css";
import { motion } from "framer-motion";

const Introduction = () => {
    return (
        <div className={styles.container}>
            <Image src={tesla_face} alt={"tesla face"} className={styles.teslaImage}/>

            <div className={styles.textContainer}>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    Nikola Tesla (1856-1943) was a brilliant Serbian-American inventor, electrical engineer, and visionary. He
                    is renowned for his groundbreaking contributions to the development of alternating current (AC)
                    electrical systems, which revolutionized the way electricity is generated, transmitted, and used.
                    Tesla&apos;s innovative ideas and inventions laid the foundation for modern electrical power
                    distribution and transmission.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    Tesla&apos;s prolific mind produced a wide array of inventions and discoveries, including the Tesla coil, an
                    essential component in radio transmission and wireless communication. He also envisioned and
                    proposed concepts like wireless transmission of electricity.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    Despite his extraordinary contributions to science and technology, Tesla faced periods of obscurity and
                    financial struggles, which sometimes overshadowed his achievements. However, his legacy has
                    experienced a resurgence of appreciation in recent years, as his innovative thinking and
                    contributions continue to inspire scientists, engineers, and inventors in their quest to shape a
                    more electrifying future.
                </motion.p>
            </div>
        </div>
    );
};

export default Introduction;