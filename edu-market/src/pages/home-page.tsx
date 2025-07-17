import { useEffect, useState } from "react";
import { Banner } from "../components/pages/banner";
import { Footer } from "../components/pages/footer";
import { Header } from "../components/pages/header";
import { ProductCard } from "../components/pages/product";
import { Toaster } from "../components/ui/toaster";
import { Skeleton } from "../components/ui/skeleton";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-2 md:p-2 lg:p-0">
        {loading ? (
          <>
            {/* Header skeleton */}
            <Skeleton className="h-16 w-full mt-3 mb-4" />
            {/* Banner skeleton */}
            <Skeleton className="h-40 w-full mb-4" />
            {/* Product skeleton */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 mb-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="col-span-1 md:col-span-1 lg:col-span-4">
                  <Skeleton className="mb-4 h-60 w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-8 w-1/3" />
                  </div>
                </div>
              ))}
            </div>
            {/* Footer skeleton */}
            <Skeleton className="h-20 w-full" />
          </>
        ) : (
          <>
            <Header />
            <Banner />
            <ProductCard />
            <Footer />
          </>
        )}
      </div>
      <Toaster />
    </>
  );
}
export default HomePage;
