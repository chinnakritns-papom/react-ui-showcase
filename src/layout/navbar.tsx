import { useState } from "react";
import { demos } from "../data/dataNavbar";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-900 border-b border-gray-800">
      <div className="mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6 text-white">
          <p className="hover:text-blue-400 cursor-pointer transition">Home</p>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-blue-400 transition flex items-center gap-1"
            >
              Showcase ▾
            </button>

            {open && (
              <div className="absolute top-7 left-0 bg-white text-black rounded-lg shadow-lg w-44 py-2">
                {demos.map((demo) => (
                  <p
                    key={demo.title}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {demo.icon} {demo.title}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-gray-200 hover:underline cursor-pointer">
          Chinnakrit Nualsri
        </div>
      </div>
    </div>
  );
}

export default Navbar;
