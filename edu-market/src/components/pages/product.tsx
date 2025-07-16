import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import type { Product } from "../../models/product/productModel";
import { FilterProduct } from "./filter";
import { useCallback, useEffect, useState } from "react";
import { DetailProduct } from "./detail-product";
import { products } from "../../models/product/productData";
import { toast } from "../../hooks/use-toast";
import { PaginationPage } from "./paging";

export function ProductCard() {
  // #region State
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [viewedProducts, setViewedProducts] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const fav = localStorage.getItem("favorites");
    return fav ? JSON.parse(fav) : [];
  });
  const [showViewedMode, setShowViewedMode] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[] | null>(
    null,
  );
  // #endregion

  // #region Derived Data
  const viewedProductList = products.filter((p) =>
    viewedProducts.includes(p.id),
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const productsToShow = showViewedMode
    ? viewedProductList
    : (suggestedProducts ?? filteredProducts);
  const displayedProducts = productsToShow.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const countFavorite = favorites.length;
  // #endregion

  // #region Effects
  // Lưu favorites vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  // #endregion

  // #region Handlers
  const handleFilter = useCallback((result: Product[]) => {
    setFilteredProducts(result);
  }, []);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
    setViewedProducts((prev) =>
      prev.includes(product.id) ? prev : [...prev, product.id],
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const isFavorite = prev.includes(id);
      return isFavorite ? prev.filter((fid) => fid !== id) : [...prev, id];
    });
    if (favorites.includes(id)) {
      toast.success("Đã xóa sản phẩm khỏi mục Yêu Thích!");
    } else {
      toast.success("Thêm sản phẩm vào mục Yêu Thích thành công!");
    }
  };

  const handleAISuggestion = () => {
    let suggestions: Product[] = [];
    if (favorites.length > 0) {
      suggestions = products.filter((p) => favorites.includes(p.id));
    } else if (viewedProducts.length > 0) {
      suggestions = products.filter((p) => viewedProducts.includes(p.id));
    } else {
      suggestions = products.sort(() => 0.5 - Math.random()).slice(0, 3);
    }
    setSuggestedProducts(suggestions);
    toast.success("Đã gợi ý sản phẩm phù hợp cho bạn!");
  };
  // #endregion

  return (
    <>
      <FilterProduct
        products={products}
        onFilter={handleFilter}
        countFavorite={countFavorite}
        onAISuggest={handleAISuggestion}
        onShowViewedHistory={() => setShowViewedMode(true)}
        onShowAll={() => setShowViewedMode(false)}
        viewedCount={viewedProductList.length}
        isViewedMode={showViewedMode}
      />
      {/* Courses */}
      {productsToShow.length === 0 ? (
        <>
          <div className="flex h-50 flex-col items-center justify-center rounded-md border-2 border-black text-gray-500 transition-all duration-200 hover:scale-101 dark:border-white">
            <span>Không tìm thấy sản phẩm phù hợp.</span>
            <span className="mt-1 text-xs">
              Bạn hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.
            </span>
          </div>{" "}
        </>
      ) : (
        <>
          {" "}
          <main className="mb-3 grid h-full grid-cols-1 gap-3 sm:h-80 md:h-auto md:grid-cols-2 lg:grid-cols-12">
            {/* Card 1 - Start */}
            {displayedProducts.length > 0 && (
              <>
                <div className="grid-cols- col-span-1 grid h-auto rounded-md border-2 border-black p-3 transition duration-200 hover:scale-102 md:col-span-1 md:grid-cols-1 lg:col-span-3 dark:border-white">
                  <div className="relative">
                    <img
                      src={displayedProducts[0].img}
                      className="mx-auto mb-2 rounded-md object-cover md:h-70 md:w-120"
                      alt=""
                    />
                    <div className="absolute top-5 right-5 flex h-10 w-10 flex-1 items-center justify-center rounded-full bg-white">
                      <button
                        onClick={() => toggleFavorite(displayedProducts[0].id)}
                        className={
                          favorites.includes(displayedProducts[0].id)
                            ? "text-pink-500"
                            : "text-gray-400"
                        }
                        title={
                          favorites.includes(displayedProducts[0].id)
                            ? "Bỏ yêu thích"
                            : "Yêu thích"
                        }
                      >
                        <Heart
                          className="w-5"
                          fill={
                            favorites.includes(displayedProducts[0].id)
                              ? "currentColor"
                              : "none"
                          }
                        ></Heart>
                      </button>{" "}
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-extrabold text-green-800 dark:text-green-400">
                      {displayedProducts[0].fullName}
                    </p>
                    <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic dark:text-gray-300">
                      {displayedProducts[0].description}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-bold text-green-700 dark:text-green-400">
                        {displayedProducts[0].price.toLocaleString()}₫
                      </p>
                      <span className="text-sm text-gray-700 line-through dark:text-gray-400">
                        {displayedProducts[0].oldPrice.toLocaleString()}₫
                      </span>
                      <Button
                        variant={"default"}
                        className="ml-auto bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:w-20 dark:bg-green-400 dark:hover:bg-green-500"
                        onClick={() => handleOpenModal(displayedProducts[0])}
                      >
                        Chi tiết
                      </Button>
                    </div>{" "}
                  </div>
                </div>
              </>
            )}
            {/* Card 1 - End */}
            <div
              className={
                `col-span-1 gap-3 rounded-md md:col-span-1 md:grid lg:col-span-4 ` +
                (displayedProducts.length > 1 && displayedProducts.length < 3
                  ? " lg:max-h-30"
                  : "")
              }
            >
              {/* Card 2 - Start */}
              {displayedProducts.length > 1 && (
                <>
                  {" "}
                  <div className="my-auto mb-3 rounded-md border-2 border-black p-3 transition duration-200 hover:scale-102 md:h-full dark:border-white">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-auto w-auto">
                        <p className="mb-1 line-clamp-2 text-lg font-extrabold text-green-800 dark:text-green-400">
                          {displayedProducts[1].fullName}
                        </p>
                        <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic md:line-clamp-3 md:max-w-70 lg:line-clamp-4 dark:text-gray-300">
                          {displayedProducts[1].description}
                        </p>
                      </div>{" "}
                      <div className="relative">
                        <img
                          src={displayedProducts[1].img}
                          className="w-70 rounded-md object-cover md:w-50 lg:w-50"
                          alt=""
                        />
                        <div className="absolute top-1 right-1 flex h-8 w-8 flex-1 items-center justify-center rounded-full bg-white hover:scale-105">
                          <button
                            onClick={() =>
                              toggleFavorite(displayedProducts[1].id)
                            }
                            className={
                              favorites.includes(displayedProducts[1].id)
                                ? "text-pink-500"
                                : "text-gray-400"
                            }
                            title={
                              favorites.includes(displayedProducts[1].id)
                                ? "Bỏ yêu thích"
                                : "Yêu thích"
                            }
                          >
                            <Heart
                              className="w-5"
                              fill={
                                favorites.includes(displayedProducts[1].id)
                                  ? "currentColor"
                                  : "none"
                              }
                            ></Heart>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 ">
                      <div className="mr-auto flex gap-2 text-start">
                        <p className="text-xl font-bold text-green-700 dark:text-green-400">
                          {displayedProducts[1].price.toLocaleString()} ₫
                        </p>
                        <span className="text-sm text-gray-700 line-through dark:text-gray-400">
                          {displayedProducts[1].oldPrice.toLocaleString()}₫
                        </span>
                      </div>
                      <Button
                        variant={"default"}
                        className="bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:ml-auto lg:w-40 dark:bg-green-400 dark:hover:bg-green-500"
                        onClick={() => handleOpenModal(displayedProducts[1])}
                      >
                        Chi tiết
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {/* Card 2 - End */}

              {/* Card 3 - Start */}
              {displayedProducts.length > 2 && (
                <>
                  {" "}
                  <div className="rounded-md border-2 border-black p-3 transition duration-200 hover:scale-102 dark:border-white">
                    <div className="flex space-x-2">
                      <div className="h-auto w-auto">
                        <p className="mb-1 line-clamp-2 text-lg font-extrabold text-green-800 dark:text-green-400">
                          {displayedProducts[2].fullName}
                        </p>
                        <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic md:line-clamp-3 md:max-w-70 lg:line-clamp-4 dark:text-gray-300">
                          {displayedProducts[2].description}
                        </p>
                      </div>{" "}
                      <div className="relative">
                        <img
                          src={displayedProducts[2].img}
                          className="w-70 rounded-md object-cover md:w-50 lg:w-50"
                          alt=""
                        />{" "}
                        <div className="absolute top-1 right-1 flex h-8 w-8 flex-1 items-center justify-center rounded-full bg-white">
                          <button
                            onClick={() =>
                              toggleFavorite(displayedProducts[2].id)
                            }
                            className={
                              favorites.includes(displayedProducts[2].id)
                                ? "text-pink-500"
                                : "text-gray-400"
                            }
                            title={
                              favorites.includes(displayedProducts[2].id)
                                ? "Bỏ yêu thích"
                                : "Yêu thích"
                            }
                          >
                            <Heart
                              className="w-5"
                              fill={
                                favorites.includes(displayedProducts[2].id)
                                  ? "currentColor"
                                  : "none"
                              }
                            ></Heart>
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="mr-auto flex gap-2 text-start">
                        <p className="text-xl font-bold text-green-700 dark:text-green-400">
                          {displayedProducts[2].price.toLocaleString()} ₫
                        </p>
                        <span className="text-sm text-gray-700 line-through dark:text-gray-400">
                          {displayedProducts[2].oldPrice.toLocaleString()} ₫
                        </span>
                      </div>
                      <Button
                        variant={"default"}
                        className="bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:ml-auto lg:w-40 dark:bg-green-400 dark:hover:bg-green-500"
                        onClick={() => handleOpenModal(displayedProducts[2])}
                      >
                        Chi tiết
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {/* Card 3 - End */}
            </div>

            <div className="col-span-1 grid gap-3 rounded-md md:col-span-2 lg:col-span-5">
              {/* Card 4 - Start */}{" "}
              {displayedProducts.length > 3 && (
                <>
                  {" "}
                  <div
                    className={
                      `flex flex-col rounded-md border-2 border-black transition duration-300 hover:scale-102 md:col-span-1 lg:min-h-49 dark:border-white ` +
                      (displayedProducts.length > 3 &&
                      displayedProducts.length < 5
                        ? "lg:max-h-61"
                        : "")
                    }
                  >
                    <div className="grid grid-cols-12 gap-6 p-3">
                      <div className="col-span-7 flex flex-col md:col-span-9 md:w-full lg:col-span-7 lg:w-auto">
                        <p className="mb-1 line-clamp-2 text-lg font-extrabold text-green-800 dark:text-green-400">
                          {displayedProducts[3].fullName}
                        </p>
                        <p className="lg:line-clam-4 line-clamp-3 text-sm text-gray-600 italic md:line-clamp-4 lg:max-w-70 dark:text-gray-300">
                          {displayedProducts[3].description}
                        </p>{" "}
                        <div className="col-span-12 mt-auto hidden md:flex">
                          <div className="mr-auto flex gap-2 text-start">
                            <p className="mt-auto text-xl font-bold text-green-700 dark:text-green-400">
                              {displayedProducts[3].price.toLocaleString()} ₫
                            </p>
                            <span className="text-sm text-gray-700 line-through dark:text-gray-400">
                              {displayedProducts[3].oldPrice.toLocaleString()} ₫
                            </span>
                          </div>
                          <Button
                            variant={"default"}
                            className="bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:ml-auto lg:w-auto dark:bg-green-400 dark:hover:bg-green-500"
                            onClick={() =>
                              handleOpenModal(displayedProducts[3])
                            }
                          >
                            Chi tiết
                          </Button>
                        </div>
                      </div>{" "}
                      <div className="relative col-span-5 md:col-span-3 md:ml-auto lg:col-span-5">
                        <img
                          src={displayedProducts[3].img}
                          className="rounded-md object-cover md:w-60 lg:w-auto"
                          alt=""
                        />
                        <div className="absolute top-1 right-1 flex h-8 w-8 flex-1 items-center justify-center rounded-full bg-white">
                          <button
                            onClick={() =>
                              toggleFavorite(displayedProducts[3].id)
                            }
                            className={
                              favorites.includes(displayedProducts[3].id)
                                ? "text-pink-500"
                                : "text-gray-400"
                            }
                            title={
                              favorites.includes(displayedProducts[3].id)
                                ? "Bỏ yêu thích"
                                : "Yêu thích"
                            }
                          >
                            <Heart
                              className="w-5"
                              fill={
                                favorites.includes(displayedProducts[3].id)
                                  ? "currentColor"
                                  : "none"
                              }
                            ></Heart>
                          </button>{" "}
                        </div>
                      </div>{" "}
                      <div className="col-span-12 mt-auto flex md:hidden">
                        <div className="mr-auto flex gap-2 text-start">
                          <p className="text-xl font-bold text-green-700 dark:text-green-400">
                            {displayedProducts[3].price.toLocaleString()} ₫
                          </p>
                          <span className="text-sm text-gray-700 line-through dark:text-gray-400">
                            {displayedProducts[3].oldPrice.toLocaleString()} ₫
                          </span>
                        </div>
                        <Button
                          variant={"default"}
                          className="bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:ml-auto lg:w-auto dark:bg-green-400 dark:hover:bg-green-500"
                          onClick={() => handleOpenModal(displayedProducts[3])}
                        >
                          Chi tiết
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* Card 4 - End */}
              <div className="grid grid-cols-1 gap-3 rounded-md md:grid-cols-2 lg:min-h-53">
                {" "}
                {/* Card 5 - Start */}{" "}
                {displayedProducts.length > 4 && (
                  <>
                    {" "}
                    <div className="grid grid-cols-12 flex-col gap-2 rounded-md border-2 border-black p-3 transition duration-300 hover:scale-102 dark:border-white">
                      <div className="col-span-7 flex flex-col md:w-full lg:col-span-6 lg:w-auto">
                        <p className="mb-1 line-clamp-3 text-lg font-extrabold text-green-800 lg:text-base dark:text-green-400">
                          {displayedProducts[4].fullName}
                        </p>
                        <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic md:line-clamp-4 lg:line-clamp-3 lg:max-w-70 lg:text-xs dark:text-gray-300">
                          {displayedProducts[4].description}
                        </p>{" "}
                      </div>{" "}
                      <div className="auto relative col-span-5 md:ml-auto lg:col-span-6 lg:row-span-1">
                        <img
                          src={displayedProducts[4].img}
                          className="h-auto w-auto rounded-md object-cover md:h-auto md:w-auto lg:h-full lg:max-h-33 lg:w-full"
                          alt=""
                        />
                        <div className="absolute top-1 right-1 flex h-8 w-8 flex-1 items-center justify-center rounded-full bg-white">
                          <button
                            onClick={() =>
                              toggleFavorite(displayedProducts[4].id)
                            }
                            className={
                              favorites.includes(displayedProducts[4].id)
                                ? "text-pink-500"
                                : "text-gray-400"
                            }
                            title={
                              favorites.includes(displayedProducts[4].id)
                                ? "Bỏ yêu thích"
                                : "Yêu thích"
                            }
                          >
                            <Heart
                              className="w-5"
                              fill={
                                favorites.includes(displayedProducts[4].id)
                                  ? "currentColor"
                                  : "none"
                              }
                            ></Heart>
                          </button>{" "}
                        </div>
                      </div>{" "}
                      <div className="col-span-12 flex h-auto items-center">
                        <div className="mr-auto flex gap-2 text-start">
                          <p className="text-xl font-bold text-green-700 lg:text-lg dark:text-green-400">
                            {displayedProducts[4].price.toLocaleString()} ₫
                          </p>
                          <span className="text-sm text-gray-700 line-through lg:text-xs dark:text-gray-400">
                            {displayedProducts[4].oldPrice.toLocaleString()} ₫
                          </span>
                        </div>
                        <Button
                          variant={"default"}
                          className="bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:ml-auto lg:w-14 dark:bg-green-400 dark:hover:bg-green-500"
                          onClick={() => handleOpenModal(displayedProducts[4])}
                        >
                          Chi tiết
                        </Button>
                      </div>
                    </div>{" "}
                  </>
                )}
                {/* Card 5 - Start */}
                {/* Card 6 - Start */}{" "}
                {displayedProducts.length > 5 && (
                  <>
                    {" "}
                    <div className="grid h-full grid-cols-12 flex-col gap-2 rounded-md border-2 border-black p-3 transition duration-300 hover:scale-102 dark:border-white">
                      <div className="col-span-7 flex flex-col md:w-full lg:col-span-6 lg:w-auto">
                        <p className="mb-1 line-clamp-3 text-lg font-extrabold text-green-800 lg:text-base dark:text-green-400">
                          {displayedProducts[5].fullName}
                        </p>
                        <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic md:line-clamp-4 lg:line-clamp-3 lg:max-w-70 lg:text-xs dark:text-gray-300">
                          {displayedProducts[5].description}
                        </p>{" "}
                      </div>{" "}
                      <div className="auto relative col-span-5 md:ml-auto lg:col-span-6 lg:row-span-1">
                        <img
                          src={displayedProducts[5].img}
                          className="h-auto w-auto rounded-md object-cover md:h-auto md:w-auto lg:h-full lg:max-h-33 lg:w-full"
                          alt=""
                        />
                        <div className="absolute top-1 right-1 flex h-8 w-8 flex-1 items-center justify-center rounded-full bg-white">
                          <button
                            onClick={() =>
                              toggleFavorite(displayedProducts[5].id)
                            }
                            className={
                              favorites.includes(displayedProducts[5].id)
                                ? "text-pink-500"
                                : "text-gray-400"
                            }
                            title={
                              favorites.includes(displayedProducts[5].id)
                                ? "Bỏ yêu thích"
                                : "Yêu thích"
                            }
                          >
                            <Heart
                              className="w-5"
                              fill={
                                favorites.includes(displayedProducts[5].id)
                                  ? "currentColor"
                                  : "none"
                              }
                            ></Heart>
                          </button>{" "}
                        </div>
                      </div>{" "}
                      <div className="col-span-12 flex h-auto items-center">
                        <div className="mr-auto flex gap-2 text-start">
                          <p className="text-2xl font-bold text-green-700 lg:text-lg dark:text-green-400">
                            {displayedProducts[5].price.toLocaleString()} ₫
                          </p>
                          <span className="text-sm text-gray-700 line-through lg:text-xs dark:text-gray-400">
                            {displayedProducts[5].oldPrice.toLocaleString()} ₫
                          </span>
                        </div>
                        <Button
                          variant={"default"}
                          className="bg-green-700 transition hover:scale-105 hover:bg-green-800 md:w-36 lg:ml-auto lg:w-14 dark:bg-green-400 dark:hover:bg-green-500"
                          onClick={() => handleOpenModal(displayedProducts[5])}
                        >
                          Chi tiết
                        </Button>
                      </div>
                    </div>{" "}
                  </>
                )}
                {/* Card 6 - Start */}
              </div>
            </div>
          </main>
        </>
      )}

      <section className="my-3 mb-3 h-auto rounded-md border-2 border-black p-2 transition-all duration-300 hover:scale-101 sm:h-40 sm:p-4 md:h-auto dark:border-white">
        <PaginationPage
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        ></PaginationPage>
      </section>
      {/* Modal chi tiết sản phẩm */}
      <DetailProduct
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedProduct={selectedProduct}
      />
    </>
  );
}
