import { Star, User, Clock, X, Save } from "lucide-react";
import { Button } from "../ui/button";
import type { Product } from "../../models/product/productModel";
import { toast } from "../../hooks/use-toast";

type DetailProductProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  selectedProduct: Product | null;
};

export function DetailProduct({
  openModal,
  setOpenModal,
  selectedProduct,
}: DetailProductProps) {
  if (!openModal || !selectedProduct) return null;

  // Đóng modal khi click overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpenModal(false);
  };

  // #region Helpers
  const StartButton = () => {
    const isLogin = sessionStorage.getItem("account");
    if (isLogin === null)
      toast.warning("Bạn cần phải đăng nhập để thực hiện hành động này");
  };
  const SaveButton = () => {
    const isLogin = sessionStorage.getItem("account");
    if (isLogin === null)
      toast.warning("Bạn cần phải đăng nhập để thực hiện hành động này");
  };
  // #endregion
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
      onClick={handleOverlayClick}
    >
      <div className="animate-fadeIn relative mx-4 max-w-6xl w-auto lg:w-[930px]  rounded-lg bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-lg">
        {/* Nút đóng */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          onClick={() => setOpenModal(false)}
        >
          <X size={28} />
        </button>
        {/* Tiêu đề */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Ảnh lớn bên trái */}
          <div className="flex flex-1 items-center justify-center rounded-md">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.fullName}
              className="h-73 w-full rounded-md object-cover"
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />
          </div>

          {/* Thông tin bên phải */}
          <div className="flex flex-1 flex-col gap-2">
          
            <h2 className="text-2xl font-bold">{selectedProduct.fullName}</h2>
            {/* Rating */}
            <div className="mb-2 flex items-center gap-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    fill={
                      i < Math.round(selectedProduct.rating ?? 0)
                        ? "currentColor"
                        : "none"
                    }
                    stroke="currentColor"
                    className="h-5 w-5"
                  />
                ))}
              </div>
              <span className="text-lg font-bold">
                {selectedProduct.rating ?? 0}
              </span>
              <span className="text-sm text-gray-500">
                ({selectedProduct.reviews?.toLocaleString() ?? 0} reviews)
              </span>
            </div>  {/* Tag & Level */}
            <div className="mb-2 flex gap-2">
              {selectedProduct.level && (
                <span className="rounded-full bg-gray-400 px-3 py-1 text-sm font-semibold text-white">
                  {selectedProduct.level}
                </span>
              )}
            </div>{" "}
            {/* Giá */}
            <div className="mb-2">
              <span className="mr-2 text-3xl font-bold text-green-700 dark:text-green-600">
                {selectedProduct.price.toLocaleString()} đ
              </span>
              {selectedProduct.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {selectedProduct.oldPrice.toLocaleString()} đ
                </span>
              )}
            </div>
            {/* Instructor & Duration */}
            <div className="mb-2 flex gap-4">
              <div className="flex items-center gap-2 rounded bg-gray-100 dark:bg-gray-900 px-3 py-2">
                <User className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-sm">Tác giả:</p>
                <p className="font-bold">
                  {selectedProduct.instructor ?? "N/A"}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded bg-gray-100 dark:bg-gray-900 px-3 py-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-sm">Thời lượng:</span>
                <span className="font-bold">
                  {selectedProduct.duration ?? "N/A"} giờ
                </span>
              </div>
            </div>
            {/* Nút Save & Start */}
            <div className="mt-2 flex gap-2">
              <Button variant="outline" className="flex-1 hover:scale-104 transition duration-200 hover:bg-gray-200" 
              onClick={SaveButton}>
                <span className="mr-2"><Save></Save></span> Lưu khóa học
              </Button>
              <Button className="flex-1 bg-green-600 text-white hover:bg-green-700 hover:scale-104 transition duration-200" onClick={StartButton}>
                Đăng ký khóa học
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-3 w-full border-1 border-green-600 "></div>
        <div className="mt-3">
          <p className="font-bold text-xl mb-2">Về khoá học
          </p>
          <p className="text-base italic">{selectedProduct.description}</p>
        </div>
      </div>
    </div>
  );
}
