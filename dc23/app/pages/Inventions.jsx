import React from "react";
import styles from "../../styles/Inventions.module.css";
import AlternatingCurrent from "@/components/AlternatingCurrent";

const Inventions = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>INVENTIONS</h1>

            <div className={styles.inventionsHolder}>
                <AlternatingCurrent />
            </div>
        </div>
    );
};

export default Inventions;