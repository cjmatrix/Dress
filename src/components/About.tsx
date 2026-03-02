import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-[100dvh] py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-20 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="w-full md:w-1/2 relative h-[80vh] overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion Editorial"
          className="w-full h-[120%] object-cover absolute top-0 left-0"
        />
      </div>

      <div ref={textRef} className="w-full md:w-1/2 space-y-10">
        <h2 className="font-serif text-5xl md:text-7xl leading-tight">
          We craft stories <br />
          <span className="italic opacity-70">through fabric.</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed max-w-xl">
          Lumière Mode was born from a desire to redefine luxury. We believe that fashion is not just about what you wear, but how it makes you feel.
        </p>

        <p className="text-lg opacity-60 max-w-lg">
          Our collections are a dialogue between the past and the future, merging traditional craftsmanship with avant-garde silhouettes.
        </p>

        <button className="text-sm uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-50 transition-opacity">
          Read Our Story
        </button>
      </div>
    </section>
  );
}
