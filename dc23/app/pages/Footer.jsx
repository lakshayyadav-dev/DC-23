import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <nav className={styles.navbar}>
            <a href={"#home"}>home</a>
            <a href={"#about"}>about</a>
            <a href={"#inventions"}>inventions</a>
            <a href={"#conclusion"}>significance</a>
        </nav>

    );
};

export default Footer;