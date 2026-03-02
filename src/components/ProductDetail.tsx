import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";

// Mock data - in a real app this would come from a context or API
const products = [
  {
    id: 1,
    name: "Noir Silk Dress",
    price: "₹4,500",
    description: "A timeless silhouette draped in midnight silk. Designed for the evening that never ends.",
    details: "Hand-stitched in our Paris atelier, the Noir Silk Dress features 100% mulberry silk with a bias cut that drapes effortlessly over the body. The deep V-neckline and open back add a touch of sensuality to this classic piece.",
    composition: "100% Mulberry Silk",
    care: "Dry clean only",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2787&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2083&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Velvet Blazer",
    price: "₹3,200",
    description: "Structured elegance meets soft luxury. The perfect transition piece for the modern executive.",
    details: "This tailored blazer is crafted from premium Italian cotton velvet. It features a sharp peak lapel, structured shoulders, and a nipped-in waist to create a powerful yet feminine silhouette.",
    composition: "98% Cotton Velvet, 2% Elastane",
    care: "Dry clean only",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2836&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2095&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548624149-f32195f560e2?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Cashmere Coat",
    price: "₹5,800",
    description: "Wrap yourself in the warmth of pure cashmere. A winter essential that speaks volumes.",
    details: "Our signature oversized coat is made from double-faced cashmere for unparalleled softness and warmth without the weight. Features dropped shoulders and deep pockets for a relaxed, modern look.",
    composition: "100% Cashmere",
    care: "Dry clean only",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Satin Evening Gown",
    price: "₹5,200",
    description: "Fluid motion captured in fabric. This gown moves with you, creating a dance of light and shadow.",
    details: "A show-stopping gown constructed from heavyweight satin that gleams under the light. The architectural bodice provides support while the full skirt creates dramatic movement with every step.",
    composition: "100% Silk Satin",
    care: "Dry clean only",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2548&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2548&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop"
    ]
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".animate-up", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    })
    .from(".animate-image", {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    }, "-=0.8");

  }, { scope: containerRef });

  if (!product) {
    return <div className="h-screen flex items-center justify-center text-white">Product not found</div>;
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity mb-12 animate-up">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] overflow-hidden w-full">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover animate-image"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.gallery.map((img, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden">
                <img 
                  src={img} 
                  alt={`${product.name} detail ${i+1}`} 
                  className="w-full h-full object-cover animate-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:sticky lg:top-32 h-fit space-y-12">
          <div className="space-y-4 animate-up">
            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <span className="font-mono text-sm">0{product.id}</span>
              <span className="font-mono text-sm uppercase tracking-widest">Collection 24</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none">{product.name}</h1>
            <p className="font-serif text-3xl italic opacity-80">{product.price}</p>
          </div>

          <div className="space-y-8 animate-up">
            <p className="text-lg font-light leading-relaxed opacity-80">
              {product.details}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest opacity-50 mb-2">Composition</h3>
                <p className="font-mono text-sm">{product.composition}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest opacity-50 mb-2">Care</h3>
                <p className="font-mono text-sm">{product.care}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
