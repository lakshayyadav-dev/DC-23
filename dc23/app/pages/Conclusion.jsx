import React from "react";
import styles from "../../styles/Conclusion.module.css";
import Image from "next/image";
import conclusion_image from "../../public/images/conlusion_image.webp";

const Conclusion = () => {
    return (
        <div className={styles.container} id="conclusion">
            <p className={styles.otherInventionsText}>
                His other inventions include: Induction Motor, Wireless Communication and Radio, Remote Control and
                Robotics. X-Rays.
            </p>

            <div className={styles.significance}>
                <p>
                    Nikola Tesla&apos;s work and inventions have had a lasting impact on the modern world, shaping the way we
                    generate, transmit, and use electricity, as well as influencing various technological advancements.
                    Despite facing financial challenges and often being overshadowed by other inventors during his
                    lifetime, his contributions are widely recognized and celebrated today.
                </p>
            </div>

            <Image src={conclusion_image} alt={"tesla and his peers"} className={styles.conclusionImage}/>
        </div>
    );
};

export default Conclusion;