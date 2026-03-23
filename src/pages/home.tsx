import { StarIcon } from "@heroicons/react/24/solid";

function Home() {
  const posts = [
    {
      id: 1,
      title: "Wander Sloan Lake",
      type: "Home",
      price: "$1,861 for 2 nights",
      rating: "4.92",
      details: "7 bedrooms · 7 beds · 5 baths",
      imageUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Wander Bellingham Haven",
      type: "Home in Bellingham, WA",
      price: "$462 for 2 nights",
      rating: "4.94",
      details: "4 bedrooms · 4 beds · 3 baths",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Wander Kingsland Shores",
      type: "Home in Kingsland, TX",
      price: "$864 for 2 nights",
      rating: "4.90",
      details: "4 bedrooms · 4 beds · 2.5 baths",
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Wander Kingsland Horizon",
      type: "Home in Kingsland, TX",
      price: "$1,080 for 2 nights",
      rating: "4.95",
      details: "5 bedrooms · 5 beds · 5.5 baths",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="bg-gray-100 text-black dark:bg-black dark:text-white pb-20">
      {/* 🔥 Showcase */}
      <div className="relative overflow-hidden py-20 sm:py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
            alt="bg"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65 dark:bg-black/75" />
        </div>

        <div className="relative px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-6xl">
              Showcase
            </h2>
            <p className="mt-3 text-lg text-gray-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              เว็บแอปพลิเคชันที่รวบรวมโปรเจค Demo ที่พัฒนาเว็บแอปพลิเคชันด้วย
              React.js
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 Card Section */}
      <div className="px-4 lg:px-8 mt-2">
        <h3 className="text-2xl font-semibold mb-4">Project</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {posts.map((item) => (
            <article key={item.id} className="group">
              {/* image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/80" />
              </div>

              {/* text */}
              <div className="mt-3 space-y-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.type}
                </p>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span>{item.price}</span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
