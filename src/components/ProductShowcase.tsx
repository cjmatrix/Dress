import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Noir Silk Dress",
    price: "₹4,500",
    description: "A timeless silhouette draped in midnight silk. Designed for the evening that never ends.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Velvet Blazer",
    price: "₹3,200",
    description: "Structured elegance meets soft luxury. The perfect transition piece for the modern executive.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2836&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Cashmere Coat",
    price: "₹5,800",
    description: "Wrap yourself in the warmth of pure cashmere. A winter essential that speaks volumes.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Satin Evening Gown",
    price: "₹5,200",
    description: "Fluid motion captured in fabric. This gown moves with you, creating a dance of light and shadow.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2548&auto=format&fit=crop",
  },
];

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    const totalSlides = products.length;
    const slider = sliderRef.current;
    
    // Calculate the total width to scroll
    const getScrollAmount = () => {
      return -(slider.scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(slider, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSlides - 1),
        end: () => "+=" + (slider.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });

    return () => {
      tween.kill();
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[100dvh] overflow-hidden bg-[#e5e5e5] text-[#0a0a0a]">
      <div ref={sliderRef} className="flex h-full" style={{ width: `${products.length * 100}%` }}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className="w-[100vw] flex-shrink-0 h-full flex items-center justify-center px-4 md:px-20 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-7xl items-center z-10">
              
              {/* Text Content */}
              <div className="order-2 md:order-1 space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 border-b border-black/20 pb-4">
                  <span className="font-mono text-sm">0{index + 1}</span>
                  <span className="font-mono text-sm uppercase tracking-widest">Collection 24</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
                  {product.name}
                </h2>
                
                <p className="text-lg md:text-xl opacity-70 max-w-md font-light leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-row items-center gap-6 md:gap-10 pt-8 pb-12 md:pb-0">
                  <span className="font-serif text-2xl md:text-3xl italic whitespace-nowrap">{product.price}</span>
                  <Link to={`/product/${product.id}`} className="group relative px-6 md:px-8 py-3 overflow-hidden rounded-full bg-[#0a0a0a] text-white transition-all hover:bg-[#2a2a2a] inline-block z-20 pointer-events-auto flex-shrink-0">
                    <span className="relative z-10 uppercase text-xs tracking-[0.2em]">More Detail</span>
                  </Link>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 md:order-2 relative h-[50vh] md:h-[70vh] w-full overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-110"
                />
              </div>
            </div>
            
            {/* Background Number */}
            <div className="absolute bottom-0 right-0 md:right-20 text-[20vw] font-serif opacity-[0.03] leading-none select-none pointer-events-none">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
