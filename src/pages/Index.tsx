import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PsychologistsCatalog from '@/components/PsychologistsCatalog';
import Directions from '@/components/Directions';
import HowItWorks from '@/components/HowItWorks';
import MatchingForm from '@/components/MatchingForm';
import FAQ from '@/components/FAQ';
import Articles from '@/components/Articles';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PsychologistsCatalog />
      <Directions />
      <HowItWorks />
      <MatchingForm />
      <FAQ />
      <Articles />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;