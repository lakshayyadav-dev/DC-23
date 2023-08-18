import React from "react";
import styles from "../styles/AlternatingCurrent.module.css";
import Image from "next/image";

import alternating_current_1 from "../public/images/alternating_current_1.webp";
import alternating_current_2 from "../public/images/alternating_current_2.webp";
import alternating_current_3 from "../public/images/alternating_current_3.webp";
import alternating_current_4 from "../public/images/alternating_current_4.webp";

const AlternatingCurrent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.coverContent}>
                <Image src={alternating_current_1} alt={"al"} className={styles.coverImage}/>

                <div className={styles.coverContentTextHolder}>
                    <div className={styles.coverContentText}>
                        <h1>Alternating Current (AC)</h1>
                        <p>
                            Nikola Tesla&apos;s invention of the alternating current (AC) electrical system stands as one of
                            the most transformative achievements in the history of science and technology. Born out of
                            rigorous experimentation, profound understanding, and a persistent drive to improve the
                            efficiency and safety of electricity distribution, Tesla&apos;s AC system revolutionized the way
                            we generate, transmit, and utilize electrical power.

                        </p>
                        <p>
                            Before the advent of AC, the prevailing electrical systems were based on direct current
                            (DC), which had limitations in terms of transmission distance and efficiency. Tesla&apos;s
                            brilliance lay in recognizing the potential of alternating current to overcome these
                            limitations. AC involves rapidly reversing the direction of electrical flow, which enables
                            electricity to be easily converted to different voltages and transmitted over long distances
                            with minimal energy loss.
                        </p>
                    </div>

                    <Image src={alternating_current_2} alt={"2"} className={styles.image2}/>
                </div>
            </div>

            <div className={styles.secondPageContent}>
                <div className={styles.secondPageTopText}>
                    Tesla&apos;s AC system came to prominence during the late 19th century, during a time when the
                    electricity industry was dominated by the rivalry between AC and DC technologies. Thomas Edison
                    championed DC, while Tesla, along with George Westinghouse, advocated for AC due to its superior
                    transmission capabilities. Their victory in this &quot;War of Currents&quot; established AC as the industry
                    standard, leading to the adoption of large-scale AC power generation and distribution systems.
                    <br/> <br/>

                    One of the pivotal showcases of Tesla&apos;s AC innovation was the construction of the Niagara Falls
                    power plant. Completed in 1895, this hydroelectric facility harnessed the energy of the falls and
                    used Tesla&apos;s AC system to transmit electricity over long distances to power cities, industries,
                    and homes. This achievement demonstrated the viability of AC power on a grand scale and set the stage
                    for the electrification of entire regions.
                </div>
                <Image src={alternating_current_3} alt={"s"} className={styles.secondPageImage}/>
                <div>
                    Tesla&apos;s AC system was a pivotal element in the electrification of cities, industries, and homes. One
                    of its most iconic applications was the electrification of the Niagara Falls power plant, which
                    harnessed the immense energy of the falls to generate electricity. Tesla&apos;s AC technology enabled
                    this power to be efficiently transmitted over long distances, transforming it into a valuable
                    resource for lighting up urban centers and powering the expanding industrial landscape.

                    <br/> <br/>

                    Beyond its immediate practical applications, Tesla&apos;s AC system opened the door to an array of
                    technological innovations. It spurred the development of electric motors and generators,
                    revolutionizing manufacturing processes and transportation. Additionally, Tesla&apos;s work laid the
                    groundwork for future advancements in power electronics, renewable energy integration, and smart
                    grid technologies.

                    <br/> <br/>

                    Nikola Tesla&apos;s AC invention embodies his legacy as an inventor and visionary. His ability to bridge
                    theoretical understanding with practical implementation reshaped the world&apos;s relationship with
                    electricity. As we continue to harness the power of AC systems in modern times, we pay homage to
                    Tesla&apos;s relentless pursuit of progress and his profound impact on the technological evolution of
                    humanity.
                </div>
            </div>

            <Image src={alternating_current_4} alt={"4"} className={styles.endingImage}/>
        </div>
    );
};

export default AlternatingCurrent;