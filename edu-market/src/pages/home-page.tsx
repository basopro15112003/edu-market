import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ModeToggle } from "../components/ui/mode-toggle";
import {
  ChevronDown,
  Filter,
  Heart,
  History,
  Search,
  Sparkle,
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

function HomePage() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-1 md:p-0">
        <header className="my-3 flex items-center rounded-md border-2 border-black p-3 shadow-sm backdrop-blur-sm transition duration-300 hover:scale-101 sm:h-16 dark:border-white">
          <img
            src="https://commercial.static.antoree.com/assets/images/logo_withtagline.svg"
            alt="logo"
            className="w-10 md:w-40"
          />{" "}
          <nav className="hidden md:ml-12">
            <div>
              <ul className="flex gap-1 text-xs font-medium md:gap-3 md:text-base">
                <li className="hover:text-green-600">Trang chủ</li>
                <li className="text-green-600 hover:text-green-600">
                  Sản phẩm
                </li>
                <li className="hover:text-green-600"> Cộng đồng</li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex hover:text-green-600">
                      Về chúng tôi <ChevronDown></ChevronDown>
                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuContent className="w- border-2 border-black dark:border-white">
                        <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                          Về chúng tôi
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                          Thanh Toán
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                          Liên Hệ
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-base font-semibold hover:text-green-600">
                          Trợ Giúp
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenuPortal>
                  </DropdownMenu>
                </li>
              </ul>
            </div>
          </nav>
          <div className="ml-auto flex gap-1 md:gap-3">
            <ModeToggle></ModeToggle>
            <Button variant={"default"} className="">
              {" "}
              Đăng nhập{" "}
            </Button>
            <Button variant={"outline"}> Đăng ký </Button>
          </div>
        </header>

        <aside className="mb-3 grid h-auto grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
          <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-lg transition duration-200 hover:scale-103 lg:col-span-3 dark:border-white">
            <span className="text-3xl font-bold text-blue-600">2,500+</span>
            <p className="text-sm">Khoá học chất lượng</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-lg transition duration-100 hover:scale-103 lg:col-span-2 dark:border-white">
            <span className="text-3xl font-bold text-yellow-600">98%</span>
            <span className="text-sm">Hài lòng từ học viên</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-lg transition duration-100 hover:scale-103 lg:col-span-4 dark:border-white">
            <span className="text-3xl font-bold text-green-600">100,000+</span>
            <span className="text-sm">Học viên tin tưởng</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-xs transition duration-100 hover:scale-103 lg:col-span-3 dark:border-white">
            <span className="text-3xl font-bold text-purple-600">500+</span>
            <span className="text-sm">Giảng viên uy tín</span>
          </div>
        </aside>

        {/* Filter & Search  */}
        <section className="mb-3 grid h-auto grid-cols-1 gap-3 sm:h-32 md:mb-3 md:h-auto md:grid-cols-2 lg:grid-cols-12">
          <div className="col-span-1 gap-3 rounded-md border-2 border-black p-3 transition hover:scale-101 md:col-span-1 lg:col-span-8 dark:border-white">
            <div className="relative mb-3 h-auto w-full rounded-md transition hover:scale-101">
              <Search className="absolute top-2 left-2 w-5"></Search>
              <Input
                type="text"
                name="searchCourse"
                placeholder="Tìm kiếm khoá học..."
                className="h-11 border-2 border-gray-400 bg-gray-100 py-2 pr-3 pl-10 dark:border-white"
              ></Input>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative transition hover:scale-102">
                <Filter className="absolute top-1 left-2 w-5"></Filter>
                <Select>
                  <SelectTrigger className="w-full rounded-md border-2 border-gray-400 pl-10 dark:border-white">
                    <SelectValue placeholder="Tất cả giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="dark:border-white">
                      <SelectLabel>Chọn giá tiền</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative transition duration-300 hover:scale-102">
                <Filter className="absolute top-1 left-2 w-5"></Filter>
                <Select>
                  <SelectTrigger className="w-full rounded-md border-2 border-gray-400 pl-10 dark:border-white">
                    <SelectValue placeholder="Tất cả giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="dark:border-white">
                      <SelectLabel>Chọn giá tiền</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="col-span-1 rounded-md border-2 border-black p-3 transition duration-300 hover:scale-102 md:col-span-1 lg:col-span-4 dark:border-white">
            <div className="grid grid-cols-2 gap-1 rounded-md bg-gray-200 p-1 dark:bg-black">
              <div>
                <Button
                  variant={"ghost"}
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  <p> Tất cả (20)</p>
                </Button>
              </div>
              <div>
                <Button
                  variant={"ghost"}
                  className="w-full bg-gray-200 transition duration-300 hover:scale-103 hover:bg-green-600 dark:bg-black dark:hover:bg-green-600"
                >
                  <Heart></Heart>Yêu Thích (0)
                </Button>
              </div>
              <div>
                <Button
                  variant={"ghost"}
                  className="w-full bg-gray-200 hover:bg-green-600 dark:bg-black dark:hover:bg-green-600"
                >
                  {" "}
                  <History></History> Lịch Sử (0)
                </Button>
              </div>
              <div>
                <Button
                  variant={"ghost"}
                  className="w-full bg-gray-200 hover:bg-green-600 dark:bg-black dark:hover:bg-green-600"
                >
                  <Sparkle></Sparkle> AI Suggest (0)
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <main className="mb-3 grid h-auto grid-cols-1 gap-3 sm:h-80 md:h-auto md:grid-cols-2 lg:grid-cols-12">
          <div className="col-span-1 rounded-md border-2 border-black p-3 transition duration-200 hover:scale-102 md:col-span-1 lg:col-span-3 dark:border-white">
            <div className="relative">
              <img
                src="https://cms.kmin.edu.vn/uploads/f1_thumbnail_4042e665c3.png"
                className="mx-auto mb-2 rounded-md object-cover md:h-70 md:w-120"
                alt=""
              />
              <div className="absolute top-5 right-5 flex h-10 w-10 flex-1 items-center justify-center rounded-full bg-white">
                <Heart className="hover:scale-110 dark:text-black"></Heart>
              </div>
            </div>
            <p className="mb-1 text-lg font-extrabold text-green-800 dark:text-green-400">
              Lập trình Frontend - HTML CSS & Javascript
            </p>
            <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic dark:text-gray-300">
              Khóa học Javascript & HTML CSS giúp bạn có thể tự mình lập trình
              được bằng việc: - Hiểu được các khái niệm chuyên ngành từ cơ bản
              đến nâng cao của Bootstrap. - Trải nghiệm thực hành các hàm thông
              dụng trong jQuery xuyên suốt trong các bài và các chương. - Học
              được cách sử dụng công cụ Chrome Developer Tool trong thiết kế Web
              hiện đại. - Hiểu bản chất và cấu trúc của Bootstrap. - Cắt được
              giao diện website theo chuẩn Bootstrap. - Học được cách sử dụng
              thư viện JQuery kết hợp với Bootstrap trong việc làm các slide
              ảnh, hiệu ứng cuộn chuột, hiệu ứng chuyển động. - Học được cách sử
              dụng CSS3 kết hợp Bootstrap để thao tác với các hiệu ứng trong
              thiết kế phẳng. - Học được cách tư duy theo hướng Bootstrap để
              clone lại các website dùng cho các mục đích khác nhau. - Làm theme
              cho Bootstrap để bán trên WrapBootstrap, ShapeBootstrap, GrayGrids
              BootstrapBay, GridGum BootstrapMade, SuperBootstrap. - Cắt giao
              diện website từ Photoshop ra HTML sử dụng bootstrap. - Hiểu về bản
              chất Wordpress và các hàm cơ bản để tạo website động trên
              Wordpress.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                100.000 ₫
              </p>
              <span className="text-sm text-gray-700 line-through">
                200.000 ₫
              </span>
              <Button
                variant={"default"}
                className="ml-auto bg-green-700 transition hover:scale-105 hover:bg-green-800 dark:bg-green-400 dark:hover:bg-green-500"
              >
                Chi tiết
              </Button>
            </div>
          </div>

          <div className="col-span-1 gap-3 rounded-md md:col-span-1 md:grid md:grid-rows-2 lg:col-span-4">
            <div className="rounded-md border-2 border-black p-3 transition duration-200 hover:scale-102 dark:border-white">
              <div className="flex space-x-1">
                <div className="h-auto w-auto">
                  <p className="mb-1 line-clamp-2 text-lg font-extrabold text-green-800 dark:text-green-400">
                    B1 - Back-end Engineering
                  </p>
                  <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic md:line-clamp-3 md:max-w-70 lg:line-clamp-4 dark:text-gray-300">
                    Lộ trình B1 giúp bạn từ một người chưa biết gì về lập trình
                    trở thành một người có nền tảng tư duy và kỹ năng lập trình
                    vững chắc, từng bước trở thành Back-end Engineer hay
                    Back-end Developer chuyên nghiệp.
                  </p>
                </div>{" "}
                <div className="relative">
                  <img
                    src="https://cms.kmin.edu.vn/uploads/f1_thumbnail_4042e665c3.png"
                    className="rounded-md object-cover md:h-40 md:w-50"
                    alt=""
                  />
                  <div className="absolute top-1 right-1 flex h-8 w-8 flex-1 items-center justify-center rounded-full bg-white">
                    <Heart className="w-5 hover:scale-110 dark:text-black"></Heart>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="mr-auto flex gap-2 text-start">
                  <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                    100.000 ₫
                  </p>
                  <span className="text-sm text-gray-700 line-through">
                    200.000 ₫
                  </span>
                </div>
                <Button
                  variant={"default"}
                  className="bg-green-700 transition hover:scale-105 hover:bg-green-800 lg:ml-auto lg:w-40 dark:bg-green-400 dark:hover:bg-green-500"
                >
                  Chi tiết
                </Button>
              </div>
            </div>

            <div className="rounded-md border-2 border-black p-3 transition duration-200 hover:scale-102 dark:border-white">
              <div className="flex space-x-2">
                <div className="relative">
                  <img
                    src="https://cms.kmin.edu.vn/uploads/f1_thumbnail_4042e665c3.png"
                    className="rounded-md object-cover md:h-40 md:w-50"
                    alt=""
                  /> <div className="absolute top-1 left-1 flex h-8 w-8 flex-1 items-center justify-center rounded-full bg-white">
                  <Heart className="hover:scale-110 dark:text-black w-5"></Heart>
                </div>
                </div>
                <div className="h-auto w-auto">
                  <p className="mb-1 line-clamp-2 text-lg font-extrabold text-green-800 dark:text-green-400">
                    B1 - Back-end Engineering
                  </p>
                  <p className="mb-3 line-clamp-3 text-sm text-gray-600 italic md:line-clamp-3 md:max-w-70 lg:line-clamp-4 dark:text-gray-300">
                    Lộ trình B1 giúp bạn từ một người chưa biết gì về lập trình
                    trở thành một người có nền tảng tư duy và kỹ năng lập trình
                    vững chắc, từng bước trở thành Back-end Engineer hay
                    Back-end Developer chuyên nghiệp.
                  </p>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                {" "}
                <Button
                  variant={"default"}
                  className="bg-green-700 transition hover:scale-105 hover:bg-green-800 lg:mr-auto lg:w-40 dark:bg-green-400 dark:hover:bg-green-500"
                >
                  Chi tiết
                </Button>
                <div className="mr-auto flex gap-2 text-start">
                  <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                    100.000 ₫
                  </p>
                  <span className="text-sm text-gray-700 line-through">
                    200.000 ₫
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 grid grid-rows-2 gap-3 rounded-md md:col-span-1 lg:col-span-5">
            <div className="rounded-md border-2 border-black dark:border-white"></div>
            <div className="grid grid-cols-2 gap-3 rounded-md">
              <div className="rounded-md border-2 border-black dark:border-white"></div>
              <div className="rounded-md border-2 border-black dark:border-white"></div>
            </div>
          </div>
        </main>

        <footer className="my-3 mb-3 h-24 rounded-md border-2 border-black p-2 sm:h-40 sm:p-4 md:h-60 dark:border-white">
          ffter
        </footer>
      </div>
    </>
  );
}
export default HomePage;
