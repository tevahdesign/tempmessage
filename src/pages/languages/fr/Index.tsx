
import { Header } from "@/components/Header";
import { EmailInfo } from "@/components/EmailInfo";
import { EmailGenerator } from "@/components/EmailGenerator";
import { InboxDisplay } from "@/components/InboxDisplay";
import { FAQ } from "@/components/FAQ";
import { BacklinkSection } from "@/components/BacklinkSection";
import { Footer } from "@/components/Footer";
import { EmailProvider } from "@/contexts/EmailContext";

const FrenchHome = () => {
  return (
    <EmailProvider>
      <div className="min-h-screen flex flex-col bg-app-dark">
        <Header />
        <div className="max-w-lg mx-auto w-full">
          <div className="p-4 bg-app-darker rounded-lg mt-8 shadow-md">
            <h1 className="text-2xl font-bold text-white mb-4">Temp Message - Français</h1>
            <p className="text-gray-300">
              Bienvenue sur la version française de Temp Message. Notre service d'e-mail temporaire vous fournit
              des adresses e-mail jetables pour protéger votre vie privée en ligne.
            </p>
          </div>
          <EmailInfo />
          <EmailGenerator />
          <InboxDisplay />
        </div>
        <FAQ />
        <BacklinkSection />
        <Footer />
      </div>
    </EmailProvider>
  );
};

export default FrenchHome;
