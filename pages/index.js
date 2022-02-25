import AppHero from '@/components/Hero';
import AppAbout from '@/components/About';
import AppFeature from '@/components/Feature';
import AppWorks from '@/components/Jobs';
import AppFaq from '@/components/Faq';
import AnalyticalReport from '@/components/Analytical_Report';
import AppPartner from '@/components/Partners';
import AppFind from '@/components/Find';
import AppInsights from '@/components/Insights';
import AppTestimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="main">
      <AppHero />
      {/* <AppPartner /> */}
      {/* <AppAbout /> */}
      {/* <AnalyticalReport /> */}
      <AppFeature />
      {/* <AppWorks /> */}
      <AppFind />
      <AppFaq />
      <AppInsights />
      <AppTestimonials />
    </div>
  );
}