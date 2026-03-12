type Demo = {
  title: string;
  desc: string;
  icon: string;
};

type Props = {
  demo: Demo;
};

function CardProject({ demo }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        {demo.icon} {demo.title}
      </h2>

      <p className="text-gray-500 mt-2 text-sm">{demo.desc}</p>

      <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition cursor-pointer">
        View Demo →
      </button>
    </div>
  );
}

export default CardProject;
