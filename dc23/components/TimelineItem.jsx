import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/TimelineItem.module.css";
import Image from "next/image";

const TimelineItem = ({image, text}) => {
    return (
        <motion.div className={styles.timelineItem}>
            <motion.div initial={{opacity: 0, y:100}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5, delay:0.5}}>
                <Image src={image} alt={"tesla timeline image"} className={styles.timelineImage}/>
            </motion.div>
            <motion.hr initial={{width: 0}} whileInView={{width: "100%"}} transition={{duration: 0.75, delay: 0.25}}/>
            <motion.p initial={{opacity: 0, y:-100}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5, delay:0.5}}>
                {text}
            </motion.p>
        </motion.div>
    );
};

export default TimelineItem;