"use client"
import React from "react";
import styles from "../../styles/Inventions.module.css";
import AlternatingCurrent from "@/components/AlternatingCurrent";
import TeslaCoil from "@/components/TeslaCoil";
import MagnifyingTransmitter from "@/components/MagnifyingTransmitter";
import { motion } from "framer-motion";

const Inventions = () => {
    return (
        <div className={styles.container} id="inventions">
            <motion.h1 initial={{y:500}} whileInView={{y:0}} viewport={{once: true}} transition={{duration: 0.25, delay:0.5}} className={styles.heading}>INVENTIONS</motion.h1>

            <div className={styles.inventionsHolder}>
                <AlternatingCurrent />
                <TeslaCoil />
                <MagnifyingTransmitter />
            </div>
        </div>
    );
};

export default Inventions;