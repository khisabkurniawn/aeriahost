import { Zap } from "lucide-react";
import Image from "next/image";

export default function WorkInProgress() {
  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="relative z-10 w-full max-w-2xl space-y-10 text-center">
          {/* Logo Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-cyan-400/30 blur-xl" />
              <Image
                src="/logo-aeriahost-light.png"
                alt="Aeria Host Logo"
                width={200}
                height={80}
                className="relative z-10 h-20 w-auto"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h1 className="animate-pulse bg-gradient-to-r from-red-300 via-red-400 to-red-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              WORK IN PROGRESS
            </h1>

            <p className="mx-auto max-w-lg text-lg leading-relaxed text-gray-300 italic">
              Epic gaming experience incoming! Our platform is currently under
              development. Get ready for something legendary!
            </p>

            {/* Progress Bar Section */}
            <div className="mx-auto max-w-md space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  Loading Progress
                </span>
                <span className="font-mono text-gray-500">75%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full border border-gray-800 bg-gray-900/50">
                <div
                  className="relative h-full w-3/4 bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 shadow-lg shadow-gray-400/50 transition-all duration-300"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="absolute inset-0 animate-pulse bg-white/20" />
                </div>
              </div>
            </div>

            <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
              Expected launch: May 2025
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full py-4 text-center text-sm text-gray-500">
        © 2025 Aeria Host. All rights reserved.
      </footer>
    </main>
  );
}
