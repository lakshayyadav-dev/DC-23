import React from "react";
import Image from "next/image";
import tesla_face from "../../public/images/tesla_face_upscaled.png";
import styles from "../../styles/Introduction.module.css";

const Introduction = () => {
    return (
        <div className={styles.container}>
            <Image src={tesla_face} alt={"tesla face"} className={styles.teslaImage}/>
            <div className={styles.textContainer}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore
                    et dolore magna aliqua. </p>
            </div>
        </div>
    );
};

export default Introduction;