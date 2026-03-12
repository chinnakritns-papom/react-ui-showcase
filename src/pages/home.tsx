import CardProject from "../components/CardProject";
import { demos } from "../data/dataNavbar";

// export default Home;
function Home() {
  return (
    <div className="flex-grow bg-gradient-to-b from-yellow-50 to-blue-100 py-9">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <img
          src="src/assets/computer.gif"
          alt="meteor"
          className="mx-auto h-18 w-18"
        />

        <h1
          className="text-5xl font-bold text-gray-900 drop-shadow-[3px_3px_0_rgba(0,0,0,0.25)]"
          //   style={{ WebkitTextStroke: "1px orange" }}
        >
          React UI Showcase
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          เว็บไซต์นี้เป็นการรวบรวมโปรเจค Demo ที่พัฒนาเว็บแอปพลิเคชันด้วย
          React.js
        </p>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo) => (
          <CardProject key={demo.title} demo={demo} />
        ))}
      </div>
    </div>
  );
}

export default Home;
