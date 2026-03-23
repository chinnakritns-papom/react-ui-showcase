import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (theme?: "light" | "dark") => {
    const next = theme ? theme === "dark" : !darkMode;
    setDarkMode(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px",
        scrolled
          ? "bg-black/80 backdrop-blur-md after:bg-white/10"
          : "bg-transparent after:bg-transparent",
      )}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/5 hover:text-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? scrolled
                          ? "bg-white/10 text-white"
                          : "bg-black/30 text-white"
                        : "text-gray-200 hover:bg-white/10 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex overflow-hidden border border-white/10 rounded-xl">
              <button
                onClick={() => {
                  toggleTheme("light");
                }}
                className={`px-3 py-1.5 text-sm transition ${
                  !darkMode
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                ☀ Light
              </button>

              <button
                onClick={() => {
                  toggleTheme("dark");
                }}
                className={`px-3 py-1.5 text-sm transition ${
                  darkMode
                    ? "bg-black text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                🌙 Dark
              </button>
            </div>
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-300 hover:text-white"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full">
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300">
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navbar;
