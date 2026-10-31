import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Full-width Hero with unconstrained radiant aura & vector field */}
      <Hero />

      {/* Structured Content Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-10 w-full">
        <ProjectsSection />
        <PhilosophySection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
