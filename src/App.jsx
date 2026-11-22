
import React from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Free from "./components/sections/Free";
import Plans from "./components/sections/Plans";
import Scheduling from "./components/sections/Scheduling";
import Contact from "./components/sections/Contact";

import { MessageCircle } from "lucide-react";

import { PROFESSIONAL_DATA } from "./data/professional";
import { buildWhatsAppUrl } from "./utils/whatsapp";

function App() {
  const handleScrollToBooking = () => {
    const element = document.querySelector("#agendamento");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFEFB] text-[#49382E] selection:bg-[#C4A078] selection:text-[#49382E]">

      {/* HEADER FIXO */}
      <Header onBookClick={handleScrollToBooking} />

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        <Hero onBookClick={handleScrollToBooking} />
        <Services />
        <About />
        <Gallery />
        <Free onBookClick={handleScrollToBooking} />
        <Plans />
        <Scheduling />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a
        href={buildWhatsAppUrl(
          PROFESSIONAL_DATA.phone,
          "Consulta Geral"
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        title="Falar pelo WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          flex h-14 w-14 items-center justify-center
          rounded-full
          border border-[#C4A078]/40
         bg-[#C4A078] text-[#FFFEFB]
          shadow-[0_6px_24px_rgba(73,56,46,0.18)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:scale-105
          hover:border-[#C4A078]
          hover:bg-[#C4A078]
          hover:text-[#49382E]
          hover:shadow-[0_10px_30px_rgba(73,56,46,0.22)]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#C4A078]
        "
      >
        <MessageCircle
          size={25}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

export default App;
