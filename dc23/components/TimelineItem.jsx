import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/TimelineItem.module.css";
import Image from "next/image";

const TimelineItem = ({image, text}) => {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} viewport={{ once: true }} className={styles.timelineItem}>
            <Image src={image} alt={"tesla timeline image"} className={styles.timelineImage}/>
            <hr />
            nah thats crazy
        </motion.div>
    );
};

export default TimelineItem;