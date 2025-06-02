
import { Header } from "@/components/Header";
import { EmailInfo } from "@/components/EmailInfo";
import { EmailGenerator } from "@/components/EmailGenerator";
import { InboxDisplay } from "@/components/InboxDisplay";
import { FAQ } from "@/components/FAQ";
import { BacklinkSection } from "@/components/BacklinkSection";
import { Footer } from "@/components/Footer";
import { EmailProvider } from "@/contexts/EmailContext";

const Index = () => {
  return (
    <EmailProvider>
      <div className="min-h-screen flex flex-col bg-app-dark">
        <Header />
        <div className="max-w-lg mx-auto w-full">
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

export default Index;
