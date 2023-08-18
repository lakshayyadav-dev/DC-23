"use client";
import React from "react";
import styles from "../../styles/Past.module.css";
import Image from "next/image";
import tesla_timeline_1 from "../../public/images/tesla_timeline_1.png";
import tesla_timeline_2 from "../../public/images/tesla_timeline_2.png";
import tesla_timeline_3 from "../../public/images/tesla_timeline_3.png";
import tesla_timeline_4 from "../../public/images/tesla_timeline_4.png";

import {motion} from "framer-motion";

const TimelineItem = ({image, reverse = false}) => {

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} viewport={{ once: true }} className={`${styles.timelineItem} ${reverse && styles.timelineItemReverse}`}>
            <Image src={image} alt={"timeline"} className={styles.timelineImage}/>
            <hr />
            {/*<div className={styles.circle} />*/}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Sollicitudin tempor id eu nisl. Ornare aenean euismod elementum nisi quis. Quis
                viverra nibh cras pulvinar mattis nunc. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.
                Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Ac felis donec et odio pellentesque
                diam volutpat commodo sed. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada
                bibendum. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Natoque penatibus et
                magnis dis parturient montes. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Malesuada nunc
                vel risus commodo viverra. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Dignissim
                cras tincidunt lobortis feugiat. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Tristique
                sollicitudin nibh sit amet. Suscipit adipiscing bibendum est ultricies. Amet venenatis urna cursus eget
                nunc scelerisque viverra. Odio pellentesque diam volutpat commodo. Nam aliquam sem et tortor
                consequat id porta. Mi quis hendrerit dolor magna eget est. Egestas purus viverra accumsan in nisl nisi
                scelerisque eu ultrices. Pharetra magna ac placerat vestibulum lectus. Porta lorem mollis aliquam ut.
                Sed blandit libero volutpat sed cras. Facilisis sed odio morbi quis commodo odio aenean sed. Dui sapien
                eget mi proin.
            </p>
        </motion.div>
    );
};

const Past = () => {
    return (
        <div className={styles.mainHolder}>
            <h1 className={styles.pastHeading}>HIS PAST</h1>
            <div className={styles.timelineContainer}>
                {/*<hr className={styles.timelineLine}/>*/}
                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1856</p>
                    <TimelineItem image={tesla_timeline_1}/>
                </div>

                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1856</p>
                    <TimelineItem image={tesla_timeline_2} reverse={false}/>
                </div>

                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1856</p>
                    <TimelineItem image={tesla_timeline_3}/>
                </div>

                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1856</p>
                    <TimelineItem image={tesla_timeline_4} reverse={false}/>
                </div>

                <p className={styles.dateHeading}>1856</p>
            </div>
        </div>
    );
};

export default Past;