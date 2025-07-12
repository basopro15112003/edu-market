function HomePage() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-4">
        <header className="sticky top-0 z-50 my-3 h-14 sm:h-16 rounded-md border-2 border-gray-500 bg-white/80 p-2 sm:p-4 shadow-sm backdrop-blur-sm">
          header
        </header>

        <aside className="mb-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-3 h-32 sm:h-40 md:h-50">
          <div className="col-span-1 lg:col-span-3 rounded-md border-2 border-gray-500"></div>
          <div className="col-span-1 lg:col-span-2 rounded-md border-2 border-gray-500"></div>
          <div className="col-span-1 lg:col-span-4 rounded-md border-2 border-gray-500"></div>
          <div className="col-span-1 lg:col-span-3 rounded-md border-2 border-gray-500"></div>
        </aside>

        <section className="mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 h-24 sm:h-32 md:h-40">
          <div className="col-span-1 md:col-span-1 lg:col-span-8 rounded-md border-2 border-gray-500"></div>
          <div className="col-span-1 md:col-span-1 lg:col-span-4 rounded-md border-2 border-gray-500"></div>
        </section>

        <main className="mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 h-60 sm:h-80 md:h-130">
          <div className="col-span-1 md:col-span-1 lg:col-span-4 rounded-md border-2 border-gray-500"></div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 grid grid-rows-2 gap-3 rounded-md">
            <div className="rounded-md border-2 border-gray-500"></div>
            <div className="rounded-md border-2 border-gray-500"></div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 rounded-md border-2 border-gray-500"></div>
          <div className="col-span-1 md:col-span-1 lg:col-span-4 grid grid-rows-2 gap-3 rounded-md">
            <div className="rounded-md border-2 border-gray-500"></div>
            <div className="grid grid-cols-2 gap-3 rounded-md">
              <div className="rounded-md border-2 border-gray-500"></div>
              <div className="rounded-md border-2 border-gray-500"></div>
            </div>
          </div>
        </main>

        <footer className="my-3 mb-3 h-24 sm:h-40 md:h-60 rounded-md border-2 border-gray-500 p-2 sm:p-4">ffter</footer>
      </div>
    </>
  );
}
export default HomePage;
