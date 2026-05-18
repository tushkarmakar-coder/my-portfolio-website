
import HeroSection from "../HeroSection";
import AboutSection from "../AboutSection";
import KpiSection from "./KpiSection";
import SkillsExplorerSection from "./SkillsExplorerSection";
import ExperienceSection from "./ExperienceSection";
import AchievementsSection from "./AchievementsSection";
import CertificationsSection from "./CertificationsSection";
import ContactPanel from "./ContactPanel";
import CinematicSection from "../CinematicSection";

export default function RecruiterDashboard() {
  return (
    <div className="relative min-h-screen w-full bg-[#050508]">
      {/* Dashboard Grid Background Overlay */}
      <div className="fixed inset-0 bg-dashboard-grid bg-[length:40px_40px] opacity-10 pointer-events-none z-0" />
      
      {/* Background Ambient Glows */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Section 1: Hero */}
        <section id="home" className="w-full pt-32 pb-20 md:pt-40 md:pb-32 min-h-[90vh] flex items-center justify-center">
          <HeroSection />
        </section>

        {/* Section 2: About / Summary */}
        <CinematicSection id="about" className="w-full py-16 md:py-24" duration={0.35}>
          <AboutSection />
        </CinematicSection>

        {/* Section 3: Professional KPIs */}
        <CinematicSection id="performance" className="w-full py-16 md:py-24 bg-white/[0.01]" duration={0.35}>
          <KpiSection />
        </CinematicSection>

        {/* Section 4: Technical Skills Explorer */}
        <CinematicSection id="skills" className="w-full py-16 md:py-24" duration={0.35}>
          <SkillsExplorerSection />
        </CinematicSection>

        {/* Section 5: Experience Profile */}
        <CinematicSection id="experience" className="w-full py-16 md:py-24 bg-white/[0.01]" duration={0.4}>
          <ExperienceSection />
        </CinematicSection>

        {/* Section 6: Achievements */}
        <CinematicSection id="achievements" className="w-full py-16 md:py-24" duration={0.35}>
          <AchievementsSection />
        </CinematicSection>

        {/* Section 7: Certifications */}
        <CinematicSection id="certifications" className="w-full py-16 md:py-24 bg-white/[0.01]" duration={0.35}>
          <CertificationsSection />
        </CinematicSection>

        {/* Section 8: Contact & Hire */}
        <CinematicSection id="contact" className="w-full py-16 md:py-24" duration={0.35}>
          <div className="flex justify-center px-6">
            <ContactPanel />
          </div>
        </CinematicSection>

      </div>
    </div>
  );
}
