import Landing from "@/app/pages/Landing";
import Introduction from "@/app/pages/Introduction";
import About from "@/app/pages/About";
import Past from "@/app/pages/Past";
import Inventions from "@/app/pages/Inventions";
import Conclusion from "@/app/pages/Conclusion";
import Footer from "@/app/pages/Footer";

export default function Home() {
    return (
        <>
            <Landing />
            <Introduction />
            <About />
            <Past />
            <Inventions />
            <Conclusion />
            <Footer />
        </>
    );
}
