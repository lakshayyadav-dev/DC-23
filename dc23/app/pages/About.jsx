"use client";
import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import tesla_background from "../../public/images/tesla_background_upscaled.jpg";

import { motion } from "framer-motion";

const About = () => {
    return (
        <div>
            <div className={styles.overlay}>
                <Image src={tesla_background} alt="tesla_background" className={styles.bgImage}/>
            </div>

            <div className={styles.container}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.75, delay: 1 }}
                    className={styles.title}
                >ABOUT
                </motion.h1>

                <div className={styles.content}>
                    <p>Nikola Tesla, a brilliant Serbian-American inventor, electrical engineer, and visionary, left an
                        indelible mark on the landscape of science and technology. Born on July 10, 1856, in the village
                        of Smiljan, Croatia, Tesla&apos;s curious mind and insatiable appetite for knowledge propelled
                        him
                        into the forefront of innovation.

                        From an early age, Tesla exhibited an exceptional aptitude for understanding the complexities of
                        electricity and energy. After completing his studies in engineering and physics, he embarked on
                        a journey that would transform the world&apos;s understanding of electrical systems.

                        Tesla&apos;s most celebrated contribution lies in his groundbreaking work on alternating current
                        (AC)
                        electrical systems. By championing AC over direct current (DC), he revolutionized the way
                        electricity was generated, transmitted, and utilized. His ingenious inventions paved the way for
                        the development of efficient power distribution networks, illuminating homes, energizing
                        industries, and electrifying entire cities. The principles he established remain the cornerstone
                        of modern electrical infrastructure.
                    </p>

                    <p>Central to Tesla&apos;s legacy is the invention of the Tesla coil, a resonant transformer circuit
                        that
                        facilitated the generation of high-voltage, high-frequency currents. This creation not only
                        demonstrated his mastery of electrical engineering but also played an instrumental role in the
                        evolution of wireless communication and radio technology. The resonant properties of the Tesla
                        coil laid the foundation for the wireless transmission of information, a concept that would
                        later shape the modern world of telecommunications.

                        Yet, Tesla&apos;s innovations extended far beyond established boundaries. He envisioned a future
                        where electricity and information could be transmitted through the air, eliminating the need for
                        cumbersome wires. His dream of wireless power transmission captured imaginations worldwide,
                        although its full realization would remain an elusive challenge.
                    </p>

                    <p>
                        Throughout his life, Tesla encountered financial hardships and navigated the complexities of
                        patent battles. Despite facing adversity, his brilliance continued to shine, inspiring fellow
                        scientists, engineers, and inventors. While celebrated for his accomplishments, he was also a
                        deeply enigmatic figure, with a keen sense of showmanship that sometimes overshadowed his
                        scientific achievements.

                        Today, Tesla&apos;s legacy is experiencing a resurgence of appreciation. His imaginative ideas have
                        found renewed relevance in the fields of renewable energy, wireless technology, and beyond. The legacy of Nikola Tesla serves as a guiding
                        light, encouraging us to explore the frontiers of innovation and push the boundaries of what is
                        possible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;