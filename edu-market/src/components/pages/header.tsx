import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { ChevronDown, AlignJustify } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../../components/ui/sheet";
import { Link } from "react-router-dom";
import { toast } from "../../hooks/use-toast";
export function Header() {
  
  // #region Helpers
  const LoginButton = () => {
    const isLogin = sessionStorage.getItem("account");
    if (isLogin === null)
      toast.success("Đăng nhập thành công !");
  };
  const RegisterButton = () => {
    const isLogin = sessionStorage.getItem("account");
    if (isLogin === null)
      toast.success("Đăng ký thành công!");
  };
  // #endregion
  return (
    <>
      {" "}
      <header className="my-3 flex items-center rounded-md border-2 border-black p-3 shadow-sm transition duration-300 hover:scale-101 sm:h-16 dark:border-white">
        <Link to={"/"}>
        <div className="justify-center items-center text-center hover:scale-105 transition-all duration-300 hover:cursor-pointer">
        <p className="font-sans italic text-3xl font-extrabold text-green-600">
          edu-market
        </p>
        <span className="text-xs italic font-bold">Kết nối tri thức, mở lối thành công</span>
        </div>
        </Link>
        {/* Nav + Auth (chỉ hiện trên lg) */}
        <nav className="hidden items-center justify-center lg:ml-10 lg:block">
          <ul className="flex gap-1 text-xs font-medium md:gap-3 md:text-base">
            <li className="hover:text-green-600">
              {" "}
              <a href="/">Trang chủ</a>
            </li>
            <li className="text-green-600 hover:text-green-600">
              {" "}
              <a href="/">Sản phẩm</a>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex hover:text-green-600">
                  Về chúng tôi <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuContent className="w- border-2 border-black dark:border-white">
                    <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                      <a href="#">Về chúng tôi</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                      <a href="#">Thanh toán</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                      <a href="#">Liên hệ</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                      <a href="#">Trợ giúp</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
        <div className="ml-auto hidden gap-1 md:gap-3 lg:flex">
          <ModeToggle />
          <Button
            variant={"default"}
            className="bg-green-700 transition-all duration-200 hover:scale-105 hover:bg-green-800 dark:bg-green-400 dark:hover:bg-green-500"
          onClick={LoginButton}>
            Đăng nhập
          </Button>
          <Button
            variant={"outline"}
            className="transition-all duration-200 hover:scale-105"
          onClick={RegisterButton}>
            Đăng ký
          </Button>
        </div>
        {/* Sheet trigger (chỉ hiện trên md/sm) */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <AlignJustify className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6">
              {/* Nav trong Sheet */}
              <nav className="mb-6">
                <ul className="flex flex-col gap-4 text-lg font-semibold">
                  <li>
                    <SheetClose asChild>
                      <a href="#">Trang chủ</a>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <a href="#">Sản phẩm</a>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <a href="#">Về chúng tôi</a>
                    </SheetClose>
                  </li>{" "}
                  <li>
                    <SheetClose asChild>
                      <a href="#">Thanh Toán</a>
                    </SheetClose>
                  </li>{" "}
                  <li>
                    <SheetClose asChild>
                      <a href="#">Liên Hệ</a>
                    </SheetClose>
                  </li>{" "}
                  <li>
                    <SheetClose asChild>
                      <a href="#">Trợ Giúp</a>
                    </SheetClose>
                  </li>
                </ul>
              </nav>
              {/* Auth buttons trong drawer */}
              <div className="flex flex-col gap-3">
                <Button variant={"default"}>Đăng nhập</Button>
                <Button variant={"outline"}>Đăng ký</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
