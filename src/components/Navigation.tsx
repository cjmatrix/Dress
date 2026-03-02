import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        xPercent: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        ".menu-link",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        xPercent: 100,
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <a href="#" className="font-serif text-2xl font-bold tracking-tighter">
          LUMIÈRE
        </a>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsOpen(true)}
            className="hover:opacity-70 transition-opacity"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed inset-0 z-50 bg-[#e5e5e5] text-[#0a0a0a] translate-x-full flex flex-col justify-center items-center"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 hover:rotate-90 transition-transform duration-300"
        >
          <X size={32} />
        </button>

        <div ref={linksRef} className="flex flex-col items-center gap-8">
          {["Collections", "About", "Journal", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="menu-link font-serif text-5xl md:text-7xl hover:italic transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="absolute bottom-10 left-0 w-full text-center font-sans text-sm uppercase tracking-widest opacity-50">
          Paris — New York — Tokyo
        </div>
      </div>
    </>
  );
}
