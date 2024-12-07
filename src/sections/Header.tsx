import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/consumr_logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* <div className="flex justify-center items-center py-3 bg-black text-white text-small">
        <p className="text-white/60 hidden">Automate your analysis and make smarter decisions, faster.</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div> */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Consumr Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden"/>
            <nav className="hidden md:flex gap-6 text-black items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <button className="bg-[#490f74] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Join Waitlist</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
