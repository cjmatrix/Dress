import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-20 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="font-serif text-3xl">LUMIÈRE</h3>
          <p className="opacity-50 text-sm max-w-xs">
            Redefining luxury fashion for the modern era. 
            Paris — New York — Tokyo
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase text-xs tracking-widest opacity-50">Shop</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><a href="#" className="hover:text-white hover:underline">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Collections</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Gift Cards</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase text-xs tracking-widest opacity-50">Support</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><a href="#" className="hover:text-white hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Size Guide</a></li>
            <li><a href="#" className="hover:text-white hover:underline">FAQ</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase text-xs tracking-widest opacity-50">Social</h4>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-50 transition-opacity"><Instagram size={20} /></a>
            <a href="#" className="hover:opacity-50 transition-opacity"><Twitter size={20} /></a>
            <a href="#" className="hover:opacity-50 transition-opacity"><Facebook size={20} /></a>
          </div>
          <div className="pt-8">
            <p className="text-xs opacity-30">© 2024 Lumière Mode. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-10 border-t border-white/5 text-center">
        <h2 className="font-serif text-[12vw] leading-none opacity-10 select-none">
          LUMIÈRE
        </h2>
      </div>
    </footer>
  );
}
