import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    })
    .from(imageRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    }, "-=1");

    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2832&auto=format&fit=crop"
          alt="Fashion Model"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center mix-blend-difference text-white px-4">
        <h1
          ref={textRef}
          className="font-serif text-[15vw] leading-[0.8] tracking-tighter uppercase"
        >
          Lumière
          <br />
          <span className="italic font-light">Mode</span>
        </h1>
        
        <div className="mt-12 flex justify-between items-end w-full max-w-7xl mx-auto text-sm uppercase tracking-widest opacity-80">
          <span>Est. 2024</span>
          <span>Scroll to Explore</span>
          <span>Haute Couture</span>
        </div>
      </div>
    </section>
  );
}
