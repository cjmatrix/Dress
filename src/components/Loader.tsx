import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "power3.out",
    })
      .to(textRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.in",
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
      });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-white"
    >
      <h1
        ref={textRef}
        className="font-serif text-6xl md:text-9xl opacity-0 translate-y-10 tracking-tighter"
      >
        LUMIÈRE
      </h1>
    </div>
  );
}
