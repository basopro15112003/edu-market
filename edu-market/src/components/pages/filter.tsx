import { Filter, Heart, History, SaveIcon, Search } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "../../models/product/productModel";
import { toast } from "../../hooks/use-toast";
import { Link } from "react-router-dom";
type FilterProductProps = {
  products: Product[];
  onFilter: (result: Product[]) => void;
  countFavorite: number;
  onAISuggest: () => void;
  onShowViewedHistory: () => void;
  onShowAll: () => void;
  viewedCount: number;
  isViewedMode: boolean;
};

export function FilterProduct({
  products,
  onFilter,
  countFavorite,
  onAISuggest,
  onShowViewedHistory,
  onShowAll,
  viewedCount,
  isViewedMode,
}: FilterProductProps) {
  // #region State
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [suggestedProducts, setSuggestedProducts] = useState<Product[] | null>(
    null,
  );

  // #endregion

  // #region Filter Logic
  const filteredProduct = useMemo(() => {
    let data = products;
    // Lọc theo search
    if (search.trim()) {
      data = data.filter((o) =>
        o.fullName.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (selectedPrice && selectedPrice !== "all") {
      if (selectedPrice === "1") {
        data = data.filter((o) => o.price < 500000);
      } else if (selectedPrice === "2") {
        data = data.filter((o) => o.price >= 500000 && o.price <= 1000000);
      } else if (selectedPrice === "3") {
        data = data.filter((o) => o.price > 1000000);
      }
    }
    // lọc theo
    if (selectedCategory && selectedCategory !== "all") {
      data = data.filter((o) => o.category.toString() === selectedCategory);
    }
    return data;
  }, [search, products, selectedCategory, selectedPrice]);
  // #endregion
  const productsToShow = isViewedMode
    ? products // Hiển thị tất cả sản phẩm đã xem
    : (suggestedProducts ?? filteredProduct);

  // #region Effects
  useEffect(() => {
    onFilter(productsToShow);
  }, [productsToShow, onFilter]);

  // #endregion

  // #region Helpers
  const allProductsCount = filteredProduct.length;

  const SaveButton = () => {
    const isLogin = sessionStorage.getItem("account");
    if (isLogin === null)
      toast.warning("Bạn cần phải đăng nhập để thực hiện hành động này");
  };
  // #endregion

  return (
    <>
      {/* Filter & Search  */}
      <section className="mb-3 grid h-auto grid-cols-1 gap-3 sm:h-32 md:mb-3 md:h-auto md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-1 gap-3 rounded-md border-2 border-black p-3 transition hover:scale-101 md:col-span-1 lg:col-span-8 dark:border-white">
          <div className="relative mb-3 h-auto w-full rounded-md transition hover:scale-101">
            <Search className="absolute top-2 left-2 w-5"></Search>
            <Input
              type="text"
              name="searchCourse"
              placeholder="Tìm kiếm khoá học..."
              className="h-11 border-2 border-gray-400 py-2 pr-3 pl-10 dark:border-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="relative col-span-5 transition hover:scale-102">
              <Filter className="absolute top-1 left-2 w-5"></Filter>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full rounded-md border-2 border-gray-400 pl-10 dark:border-white">
                  <SelectValue placeholder="Loại khóa học" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="dark:border-white">
                    <SelectLabel>Chọn loại khóa học</SelectLabel>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="1">Web/Front-end</SelectItem>
                    <SelectItem value="2">Back-end/DevOps</SelectItem>
                    <SelectItem value="3">Data/AI</SelectItem>
                    <SelectItem value="4">Python</SelectItem>

                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="relative col-span-5 transition duration-300 hover:scale-102">
              <Filter className="absolute top-1 left-2 w-5"></Filter>
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger className="w-full rounded-md border-2 border-gray-400 pl-10 dark:border-white">
                  <SelectValue placeholder="Lọc theo giá tiền" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="dark:border-white">
                    <SelectLabel>Chọn giá tiền</SelectLabel>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="1">Dưới 500,000 ₫</SelectItem>
                    <SelectItem value="2">500,000₫ - 1,000,000₫</SelectItem>
                    <SelectItem value="3">Trên 1,000,000₫</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="relative col-span-2 ">
              <Button className="w-full transition duration-300 hover:scale-102 bg-green-700 hover:bg-green-800 dark:bg-green-400 dark:hover:bg-green-500" onClick={onAISuggest}>
                Gợi Ý AI
              </Button>{" "}
            </div>
          </div>
        </div>

        <div className="col-span-1 rounded-md border-2 border-black p-3 transition duration-300 hover:scale-102 md:col-span-1 lg:col-span-4 dark:border-white">
          <div className="grid grid-cols-2 gap-1 rounded-md bg-gray-200 p-1 dark:bg-black">
            <div>
              {suggestedProducts && (
                <Button
                  onClick={() => setSuggestedProducts(null)}
                  className="mb-2"
                >
                  Tất cả
                </Button>
              )}
              <Button
                variant={"ghost"}
                onClick={onShowAll}
                className={
                  `w-full hover:scale-102 hover:bg-green-500 dark:bg-black dark:hover:bg-green-600 ` +
                  (!isViewedMode ? "bg-green-600 dark:bg-green-600" : "")
                }
              >
                <p>Tất cả ({allProductsCount})</p>
              </Button>
            </div>
            <div>
              <Button
                variant={"ghost"}
                className={
                  `w-full hover:scale-102 hover:bg-green-500 dark:bg-black dark:hover:bg-green-600 ` +
                  (isViewedMode ? "bg-green-600 dark:bg-green-600" : "")
                }
                onClick={onShowViewedHistory}
              >
                <History /> Lịch sử xem ({viewedCount})
              </Button>
            </div>{" "}
            <div>
              <Button
                variant={"ghost"}
                className="w-full bg-gray-200 hover:scale-102 hover:bg-green-600 dark:bg-black dark:hover:bg-green-600"
                onClick={SaveButton}
              >
                {" "}
                <SaveIcon></SaveIcon> Đã lưu (0)
              </Button>
            </div>
            <div>
              <Link to={"/favorites"}>
                <Button
                  variant={"ghost"}
                  className="w-full bg-gray-200 hover:scale-102 hover:bg-green-600 dark:bg-black dark:hover:bg-green-600"
                  onClick={() => setSuggestedProducts(null)}
                >
                  <Heart></Heart>Yêu Thích ({countFavorite})
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
