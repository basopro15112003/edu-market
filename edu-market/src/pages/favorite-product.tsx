import { useEffect, useState } from "react";
import type { Product } from "../models/product/productModel";
import { Header } from "../components/pages/header";
import { Footer } from "../components/pages/footer";
import { Banner } from "../components/pages/banner";
import { Button } from "../components/ui/button";
import { DetailProduct } from "../components/pages/detail-product";
import { Toaster } from "../components/ui/toaster";
import { Heart } from "lucide-react";
import { PaginationPage } from "../components/pages/paging";

export function FavoriteProducts({ products }: { products: Product[] }) {
  // #region State
  const [favorites, setFavorites] = useState<number[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  // #endregion

  // #region Derived Data
  const productsPerPage = 6;
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const displayedProducts = favoriteProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(favoriteProducts.length / productsPerPage);
  const favoriteProductsCount = favorites.length;
  // #endregion

  // #region Handlers
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };
  // #endregion

  // #region Effects
  useEffect(() => {
    const fav = localStorage.getItem("favorites");
    if (fav) setFavorites(JSON.parse(fav));
  }, []);
  // #endregion

  return (
    <div className="mx-auto w-full max-w-7xl p-2 md:p-2 lg:p-0">
      <Header></Header>
      <Banner></Banner>
      <div className="rounded-md border-2 border-black p-3 dark:border-white">
        {displayedProducts.length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center rounded-md">
            <span className="text-xl font-semibold text-gray-500">
              Bạn chưa yêu thích sản phẩm nào.
            </span>
            <span className="mt-1 flex text-base text-gray-400">
              Hãy nhấn vào{"  "}
              <span className="mx-2 text-gray-400">
                <Heart></Heart>
              </span>{" "}
              ở sản phẩm để thêm vào mục yêu thích!
            </span>
          </div>
        ) : (
          <>
            {" "}
            <h2 className="mb-4 text-2xl font-bold">
              Sản phẩm yêu thích ({favoriteProductsCount})
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-md border-2 border-black p-4 dark:border-white"
                >
                  <img
                    src={product.img}
                    alt={product.fullName}
                    className="mb-2 h-50 w-full rounded object-cover"
                  />
                  <h3 className="mb-1 line-clamp-2 text-lg font-extrabold text-green-800 dark:text-green-400">
                    {product.fullName}
                  </h3>
                  <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic dark:text-gray-300">
                    {product.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    {" "}
                    <div className="mr-auto flex gap-2 text-start">
                      <p className="text-xl font-bold text-green-700 dark:text-green-400">
                        {product.price.toLocaleString()} ₫
                      </p>
                      <span className="text-sm text-gray-700 line-through dark:text-gray-400">
                        {product.oldPrice.toLocaleString()}₫
                      </span>
                    </div>
                    <Button
                      variant={"default"}
                      className="bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:ml-auto lg:w-40 dark:bg-green-400 dark:hover:bg-green-500"
                      onClick={() => handleOpenModal(product)}
                    >
                      Chi tiết
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>{" "}
      {displayedProducts.length !== 0 && (
        <>
          {" "}
          <section className="my-3 mb-3 h-auto rounded-md border-2 border-black p-2 transition-all duration-300 hover:scale-101 sm:h-40 sm:p-4 md:h-auto dark:border-white">
            <PaginationPage
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            ></PaginationPage>
          </section>
        </>
      )}
      <Footer></Footer>
      {/* Modal chi tiết sản phẩm */}
      <DetailProduct
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedProduct={selectedProduct}
      />{" "}
      <Toaster></Toaster>
    </div>
  );
}
