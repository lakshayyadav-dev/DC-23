import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <nav className={styles.navbar}>
            <a>home</a>
            <a>about</a>
            <a>inventions</a>
            <a>significance</a>
        </nav>

    );
};

export default Footer;