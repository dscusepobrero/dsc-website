import { Link } from "react-router-dom";
import Header from "@/components/Header";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-109px)] px-6 py-12">
        <div className="text-center max-w-2xl">
          <h1 className="font-rethink font-bold text-dsc-maroon text-4xl md:text-5xl lg:text-6xl mb-6">
            {pageName}
          </h1>
          
          <p className="font-rethink text-gray-600 text-lg md:text-xl mb-8">
            This page is currently under construction. Check back soon for updates!
          </p>
          
          <Link
            to="/"
            className="inline-block bg-dsc-orange hover:bg-dsc-orange/90 text-white font-rethink font-semibold text-lg px-8 py-3 rounded-[20px] transition-all hover:scale-105 active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
