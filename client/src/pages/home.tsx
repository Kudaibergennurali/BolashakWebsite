import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SpecialtiesSection } from "@/components/specialties-section";
import { ActivitySection } from "@/components/activity-section";
import { StudentsSection } from "@/components/students-section";
import { ApplicantsSection } from "@/components/applicants-section";
import { ContactsSection } from "@/components/contacts-section";
import { Footer } from "@/components/footer";
import { AccessibilityControls } from "@/components/accessibility-controls";
import { ChatbotPlaceholder } from "@/components/chatbot-placeholder";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <ActivitySection />
        <StudentsSection />
        <ApplicantsSection />
        <ContactsSection />
      </main>
      <Footer />
      <AccessibilityControls />
      <ChatbotPlaceholder />
    </div>
  );
}
