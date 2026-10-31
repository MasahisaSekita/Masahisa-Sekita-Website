import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
