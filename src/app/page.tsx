import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import AboutCoach from "@/components/sections/about-coach";
import SpecializedPrograms from "@/components/sections/programs";
import EvaluationCTA from "@/components/sections/evaluation-cta";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import ProcessSteps from "@/components/sections/process-steps";
import EnrollmentForm from "@/components/sections/enrollment-form";
import Footer from "@/components/sections/footer";
// DOWNLOAD BUTTON — remove this import + <DownloadButton /> below to delete


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutCoach />
      <SpecializedPrograms />
      <EvaluationCTA />
      <Features />
      <Testimonials />
      <ProcessSteps />
      <EnrollmentForm />
      <Footer />
      {/* DOWNLOAD BUTTON — remove this line + import above to delete */}
    </main>
  );
}
