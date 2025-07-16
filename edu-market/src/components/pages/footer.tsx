import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="mt-3 w-full rounded-md border-2 border-black px-4 py-8 transition-all duration-200 hover:scale-101 dark:border-white">
        <div className="mx-auto flex flex-col items-center justify-between gap-6 md:max-w-7xl md:flex-row md:items-start">
          {/* Logo + Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <div className="items-center justify-center text-center mb-1">
              <p className="font-sans text-3xl font-extrabold text-green-600 italic">
                edu-market
              </p>
              <span className="text-xs font-bold italic">
                Kết nối tri thức, mở lối thành công
              </span>
            </div>
            <p className="max-w-xs text-left text-sm text-gray-600 md:text-left italic dark:text-gray-300">
              EduMarket – Nền tảng thương mại điện tử giáo dục hiện đại, cung
              cấp hàng trăm khóa học chất lượng về lập trình, ngoại ngữ, thiết
              kế và kỹ năng mềm. Học tập linh hoạt, giảng viên uy tín, hỗ trợ
              tận tâm.
            </p>
          </div>
          {/* Liên kết nhanh */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="mb-1 text-xl font-semibold text-green-700 dark:text-green-400">
              Liên kết
            </span>
            <a
              href="#"
              className="text-gray-700 transition hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="text-green-600 transition hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
            >
              Sản phẩm
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
            >
              Về chúng tôi
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
            >
              Liên hệ
            </a>
          </div>
          {/* Liên kết nhanh */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="mb-1 text-xl font-semibold text-green-700 dark:text-green-400">
              Tài khoản
            </span>
            <a
              href="#"
              className="text-gray-700 transition hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
            >
              Đăng nhập
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
            >
              Đăng ký
            </a>
          </div>
          {/* Thông tin liên hệ */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <span className="mb-1 text-xl font-semibold text-green-700 dark:text-green-400">
              Liên hệ
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Email: quochoangnguyen2003ct@gmail.vn
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Hotline: 0333 744 591
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM
            </span>{" "}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>{" "}
      <div className="mt-3 mb-3 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <p> © {new Date().getFullYear()} EduMarket. All rights reserved. </p>
      </div>
    </>
  );
}
