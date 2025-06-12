"use client";

const BackgroundEffects = ({
  showGrid = true,
  showOrbs = true,
}: {
  showGrid?: boolean;
  showOrbs?: boolean;
}) => {
  return (
    <>
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent z-0"></div>

      {/* Optional Grid */}
      {showGrid && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
      )}

      {/* Optional Glowing Orbs */}
      {showOrbs && (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-3xl animate-pulse z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D9F5]/10 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl animate-pulse delay-2000 z-0"></div>
        </>
      )}

      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
};

export default BackgroundEffects;
