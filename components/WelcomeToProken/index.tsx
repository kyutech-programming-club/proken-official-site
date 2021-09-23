import { NextComponentType } from "next";

const WelcomeMesssage = {
  index: "Welcome to Proken 216!",
  raindowText: "Let's enjoy programming!",
  description:
    "プロ研216は、九州工業大学を拠点に活動する情報系サークルです。「プログラミングを学びたい学生のためのコミュニティ」をコンセプトに、さまざまな活動を行っています。",
};

const WelcomeToProken: NextComponentType = () => {
  return (
    <div className="px-4 py-6 text-center sm:px-6 lg:py-16 lg:px-8">
      <div className="text-4xl font-extrabold md:text-6xl">
        <div>{WelcomeMesssage.index}</div>
        <div className="h-20 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">
          {WelcomeMesssage.raindowText}
        </div>
      </div>
      <p className="max-w-xl mx-auto mt-2 text-lg text-gray-500 md:text-xl ">
        {WelcomeMesssage.description}
      </p>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex mt-12 rounded-md shadow">
          <a
            href="https://twitter.com/kyutech_proken?lang=ja"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="w-full px-6 py-4 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-gradient-to-br from-green-400 to-blue-500 hover:ring-blue-500 hover:ring-offset-green-200 hover:outline-none hover:ring-2 hover:ring-offset-2 "
            >
              連絡してみる
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToProken;
