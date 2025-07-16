export function Banner() {
  return (
    <>
      {" "}
      <aside className="mb-3 grid h-auto grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-lg transition duration-200 hover:scale-103 lg:col-span-3 dark:border-white">
          <span className="text-3xl font-bold text-green-700">2,500+</span>
          <p className="text-sm">Khoá học chất lượng</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-lg transition duration-100 hover:scale-103 lg:col-span-2 dark:border-white">
          <span className="text-3xl font-bold text-yellow-600">98%</span>
          <span className="text-sm">Hài lòng từ học viên</span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-lg transition duration-100 hover:scale-103 lg:col-span-4 dark:border-white">
          <span className="text-3xl font-bold text-blue-600">100,000+</span>
          <span className="text-sm">Học viên tin tưởng</span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border-2 border-black p-4 shadow-xs transition duration-100 hover:scale-103 lg:col-span-3 dark:border-white">
          <span className="text-3xl font-bold text-purple-600">500+</span>
          <span className="text-sm">Giảng viên uy tín</span>
        </div>
      </aside>
    </>
  );
}
