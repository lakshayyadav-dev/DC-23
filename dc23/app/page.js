import Image from "next/image";
import styles from "./page.module.css";
import Landing from "@/app/pages/Landing";
import Introduction from "@/app/pages/Introduction";
import About from "@/app/pages/About";
import Past from "@/app/pages/Past";
import Inventions from "@/app/pages/Inventions";

export default function Home() {
    return (
        <>
            <Landing/>
            <Introduction />
            <About />
            <Past />
            <Inventions />
        </>
    );
}
