import React from "react";
import Image from "next/image";
import styles from "../styles/MagnifyingTransmitter.module.css";

import magnifying_transmitter_1 from "../public/images/magnifying_transmitter_1.png";
import magnifying_transmitter_2 from "../public/images/magnifying_transmitter_2.png";

const MagnifyingTransmitter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.coverContent}>
                <Image src={magnifying_transmitter_1} alt={"1"} className={styles.coverImage}/>

                <div className={styles.textHolder}>
                    <h1>Magnifying Transmitter</h1>
                    <p>
                        Nikola Tesla&apos;s Magnifying Transmitter was a bold and enigmatic invention aimed at wireless
                        energy transmission. Designed as an advanced version of the Tesla coil, the transmitter aimed to
                        magnify electrical energy to unprecedented levels, enabling the wireless transmission of power
                        across great distances. This audacious concept was rooted in Tesla&apos;s vision of a world powered
                        without wires. The complex device featured a tower, a spherical top terminal, and an intricate
                        network of coils and capacitors, all designed to create resonance between the Earth and the
                        atmosphere.
                    </p>
                    <p>
                        Tesla&apos;s experiments with the Magnifying Transmitter at his Wardenclyffe laboratory yielded
                        intriguing results, including dazzling discharges and telluric currents. While the project faced
                        financial and technical challenges, its underlying principles laid the foundation for wireless
                        energy transmission and communication technologies. The Magnifying Transmitter&apos;s legacy endures
                        as a testament to Tesla&apos;s pioneering spirit, pushing the boundaries of what was possible and
                        envisioning a future where electricity could be harnessed for the betterment of humanity.
                    </p>
                </div>
            </div>

            <Image src={magnifying_transmitter_2} alt={"2"} className={styles.endImage}/>
        </div>
    );
};

export default MagnifyingTransmitter;