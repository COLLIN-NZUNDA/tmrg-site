import Link from "next/link";

export default function PortalPage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/80 z-10" />
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          
          {/* Left Column: Info */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              What is the Research Portal?
            </h1>
            <div className="space-y-6 text-lg md:text-xl font-light text-gray-100">
              <p>
                The Research Portal is a resource centre for the TMRG research community.
              </p>
              <p>
                By gaining access to the portal, you will be able to find confidential TMRG documents and resources necessary to participate in TMRG research initiatives.
              </p>
            </div>
          </div>

          {/* Right Column: Access Actions */}
          <div className="relative">
            {/* Vertical Divider for Desktop */}
            <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-px bg-white/30" />
            
            <div className="text-white text-center space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold">Portal Access</h2>
              
              <div className="flex flex-col gap-6 max-w-xs mx-auto">
                <Link 
                  href="https://redcap.link/tmrg-portal-login" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded hover:bg-white hover:text-brand-navy transition-colors duration-300"
                >
                  Login
                </Link>
                
                <div className="flex items-center justify-center gap-4 opacity-50">
                  <div className="h-px w-12 bg-white" />
                  <span className="text-sm uppercase tracking-widest">OR</span>
                  <div className="h-px w-12 bg-white" />
                </div>

                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded hover:bg-white hover:text-brand-navy transition-colors duration-300"
                >
                  Request Access
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
