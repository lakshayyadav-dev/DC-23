"use client";

import React from "react";
import styles from "../../styles/Past.module.css";
import Image from "next/image";
import tesla_timeline_1 from "../../public/images/tesla_timeline_1 (1).webp";
import tesla_timeline_2 from "../../public/images/tesla_timeline_2.webp";
import tesla_timeline_3 from "../../public/images/tesla_timeline_3.webp";
import tesla_timeline_4 from "../../public/images/tesla_timeline_4.webp";

import {motion} from "framer-motion";
import TimelineItem from "@/components/TimelineItem";

const Past = () => {
    return (
        <div className={styles.mainHolder} id="past">
            <h1 className={styles.pastHeading}>HIS PAST</h1>
            <div className={styles.timelineContainer}>
                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1856</p>
                    <TimelineItem image={tesla_timeline_1}
                        text={"Nikola Tesla's childhood was a window into the brilliant mind that would go on to shape the course of scientific history. Born in 1856 in the quaint village of Smiljan, Croatia, Tesla exhibited a curious and imaginative disposition from the start. Even as a young child, he stood out among his peers for his insatiable thirst for knowledge and his unique way of seeing the world.\n" +
                            "\n" +
                            "Tesla's fascination with electricity and engineering became evident early on. He devoured books on these subjects, often losing himself in intricate mental diagrams of machinery and inventions. His family would find him daydreaming, lost in his thoughts, and envisioning complex contraptions that existed solely in his mind.\n" +
                            "\n" +
                            "One pivotal moment during his childhood was witnessing a powerful lightning storm. The sheer force and energy of the lightning left an indelible mark on Tesla's young mind. This experience ignited a fire within him, sparking his desire to understand and harness the immense power of electricity for the betterment of humanity.\n" +
                            "\n" +
                            "Supported by his parents' belief in his potential, Tesla's love for learning flourished. His father, a priest and writer, recognized his intellect, while his mother's practical skills in crafting tools and household items imparted an understanding of mechanics. Despite financial hardships, his parents worked tirelessly to provide him with an education that would nurture his genius."}
                    />
                </div>

                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1874</p>
                    <TimelineItem image={tesla_timeline_2}
                        text={"During his teenage years, Nikola Tesla's genius began to flourish, setting the stage for his remarkable contributions to science and technology. Tesla's formative years were marked by a deepening curiosity and an insatiable thirst for knowledge.\n" +
                            "\n" +
                            "As a teenager, his intellectual prowess became even more apparent. He exhibited a" +
                            " voracious appetite for reading, delving into a wide range of subjects beyond his" +
                            " years. His fascination with electricity and mechanics intensified, & he immersed himself in books and journals on these topics. This self-guided exploration was a testament to his unquenchable desire to understand the mysteries of the natural world.\n" +
                            "\n" +
                            "His early experiments as a teenager hinted at his burgeoning ingenuity. He often" +
                            " conducted small-scale electrical experiments in his free time, using rudimentary equipment to test his ideas and hypotheses. These modest endeavors foreshadowed the groundbreaking experiments he would undertake in the years to come.\n" +
                            "\n" +
                            "One notable event during Tesla's teenage years was a tragic incident that revealed his innate compassion and sense of responsibility. He witnessed the drowning of a childhood friend, which deeply affected him. This event catalyzed his determination to prevent such tragedies in the future and led to his concept of developing a device for rescuing individuals in perilous waters—an early indication of his propensity to apply his intellect for the betterment of humanity."}
                    />
                </div>

                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1890</p>
                    <TimelineItem image={tesla_timeline_3}
                        text={"Nikola Tesla's adulthood marked a transformative period where his genius and ingenuity reshaped the world of science and technology. Arriving in the United States in 1884, he embarked on a journey that would redefine the way we harness and distribute electrical power. His advocacy for alternating current (AC) systems over direct current (DC) ignited the \"War of Currents,\" ultimately establishing AC as the superior technology for transmitting electricity over long distances.\n" +
                            "\n" +
                            "At the heart of Tesla's innovations was the creation of the Tesla coil, a revolutionary device that generated high-voltage, high-frequency currents. This invention not only ushered in a new era of electrical engineering but also laid the groundwork for wireless communication and radio transmission, transforming global telecommunications.\n" +
                            "\n" +
                            "Despite financial constraints that occasionally impeded his projects, Tesla's commitment to scientific exploration remained unwavering. His prolific writings and lectures delved into the mysteries of electricity and the limitless possibilities of human progress.\n" +
                            "\n" +
                            "Tesla's visionary spirit extended beyond his inventions. He often conceptualized grand projects that foreshadowed the future, including his ambition to transmit electricity wirelessly through the air. While some ideas exceeded the technological capabilities of his time, they demonstrated his profound ability to imagine and anticipate the direction of scientific advancement."}
                    />
                </div>

                <div className={styles.timelineItemHolder}>
                    <p className={styles.dateHeading}>1937</p>
                    <TimelineItem image={tesla_timeline_4}
                        text={"As Nikola Tesla approached the end of his remarkable journey, the world stood on the" +
                            " brink of bidding farewell to a genius who had reshaped the landscape of science & technology. In the twilight of his life, Tesla's contributions and influence continued to resonate, while his personal circumstances took on a somber hue.\n" +
                            "\n" +
                            "His later years were marked by a mixture of admiration for his past achievements and a" +
                            " sense of frustration over unfulfilled visions. Despite his groundbreaking innovations, financial challenges persisted, leading to a decline in his once-ample resources. Yet, his passion for innovation remained undimmed.\n" +
                            "\n" +
                            "In the midst of personal and financial struggles, Tesla's focus on scientific" +
                            " exploration and invention endured. He continued to document his ideas and concepts, penning numerous manuscripts and sketches that explored the frontiers of science, technology, & human potential. These writings provide a glimpse into the mind of a man who never ceased to dream, even as the world around him changed.\n" +
                            "\n" +
                            "As Tesla's health began to falter, he withdrew from the limelight, spending his final years in relative obscurity. This retreat marked the closing chapter of a life defined by innovation, ingenuity, and unwavering dedication to advancing the boundaries of human knowledge.\n" +
                            "\n" +
                            "On January 7, 1943, the world lost a true luminary as Nikola Tesla passed away."}
                    />
                </div>
                <p className={styles.dateHeading}>1943</p>
            </div>
        </div>
    );
};

export default Past;