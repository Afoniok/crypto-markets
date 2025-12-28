// components/layout/Footer.tsx
export function Footer() {
    return (
      <footer className="w-full border-t border-neutral-900 bg-[#0b0e11] pt-24 pb-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase">GRAVITY TEAM</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Work with Us</a></li>
            </ul>
          </div>
  
          <div className="navbar-logo">
          <img src="/logo-light.png" alt="Logo" />
          
        </div>
        </div>
  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 tracking-widest uppercase gap-4">
          <p>Terms of Use & Privacy Policy</p>
          <p>©2022 Gravity Team. All Rights Reserved</p>
        </div>
      </footer>
    );
  }