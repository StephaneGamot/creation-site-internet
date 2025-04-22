import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import HomePageHero from "@/components/Heros/HomePageHero";
import ContactButton from "@/components/Buttons/ContactButton";
import WhyMe from "@/components/HomeP/WhyMe";
import Service from "@/components/HomeP/Service";
import Citation from "@/components/Citations/Citation";

export default function Home() {
  return (
    <div className="px-6 md:px-12  space-y-24 bg-gray-100 text-gray-900 font-body">
      <HomePageHero />
      <WhyMe />
      <Gallery />
      <Service />
      <Citation id={1} />

      {/* CTA Final */}
      <section className="text-center my-20">
        <h2 className="text-3xl font-title font-semibold mb-4">
          Prêt à créer votre site ?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Discutons de votre projet et donnons-lui vie grâce à un site qui vous
          ressemble vraiment.
        </p>
        <ContactButton />
      </section>

      <Testimonials ids={[1, 2, 3, 4, 5, 6, 7]} />
    </div>
  );
}
