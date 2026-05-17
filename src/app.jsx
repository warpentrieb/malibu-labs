import { useEffect } from "react";
import Benefits from "./components/benefits/benefits";
import Container from "./components/container/container";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Pricing from "./components/pricing/pricing";
import Reviews from "./components/reviews/reviews";
import Services from "./components/services/services";
import Contact from "./components/contact/Contact";

const App = () => {
  useEffect(() => {
    const revealGroups = [
      ".section-intro",
      "#benefits-summary > div",
      ".benefits-card",
      ".service-card",
      "#services-trust-panel",
      "#pricing",
      "#reviews-proof-strip > div",
      ".reviews-card",
      "#contact-intro",
      "#contact-form",
      "#main-footer-cta",
      "#main-footer-wrapper > *",
      "#main-footer-bottom",
    ];

    const revealItems = document.querySelectorAll(revealGroups.join(","));

    revealItems.forEach((item, index) => {
      item.classList.add("reveal-on-scroll");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Container >
        <Benefits />
        <Services />
        <Pricing />
        <Reviews />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App;
