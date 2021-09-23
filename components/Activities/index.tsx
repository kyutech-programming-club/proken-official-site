// next/imageを使うとtailwind cssでスタイルが上手く当たらなくなるため、標準の<imgタグを使用>
// ただし、そのまま<img>を使うとeslintに怒られるため、以下を記述してeslintを無視します
/* eslint-disable @next/next/no-img-element */

const content = [
  {
    image: "/Activities/img1.jpg",
    index: "毎日の活動",
    description:
      "プロ研では、プログラミングを学びたい学生が自由に学習・開発を行っています。メンバーの中には九工大以外の大学に所属している学生もいます。現在はDiscordやZoomを中心としたオンラインで活動を続けています。",
  },
  {
    image: "/Activities/img2.jpg",
    index: "イベントwktk",
    description:
      "プロ研では、1年を通してLT会やプロ研ハッカソンを始めとするさまざまイベントを開催しています。LT会では毎月多くのメンバーが登壇し、それぞれ思い思いのテーマでプレゼンを行っています。プロ研ハッカソンではプロ研内でハッカソンの企画・運営を行い、メンバーでチームを組んで限られた時間内での開発の完走を目指します。",
  },
  {
    image: "/Activities/img3.JPG",
    index: "他団体との交流",
    description:
      "プロ研は、九工大の飯塚キャンパスやその他の大学との交流を行っています。2020年には飯塚キャンパス・北九州高専と合同でハッカソンを行い、お互いの交流を深めました。",
  },
];

const Activities = () => {
  return (
    <section>
      <div className="container flex flex-col items-center px-5 py-24 mx-auto overflow-y-auto md:flex-row">
        <div className="flex flex-col items-center order-last mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 md:order-none">
          <h1 className="mb-4 text-3xl font-bold title-font sm:text-4xl">
            {content[0].index}
          </h1>
          <p className="mb-8 leading-relaxed">{content[0].description}</p>
        </div>
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center shadow-xl rounded-xl"
            alt="hero"
            src={content[0].image}
          />
        </div>
      </div>

      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center shadow-xl rounded-xl"
            alt="hero"
            src={content[1].image}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-bold title-font sm:text-4xl">
            {content[1].index}
          </h1>
          <p className="mb-8 leading-relaxed">{content[1].description}</p>
        </div>
      </div>

      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center order-last mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 md:order-none">
          <h1 className="mb-4 text-3xl font-bold title-font sm:text-4xl">
            {content[2].index}
          </h1>
          <p className="mb-8 leading-relaxed">{content[2].description}</p>
        </div>
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:md-0">
          <img
            className="object-cover object-center shadow-xl rounded-2xl"
            alt="hero"
            src={content[2].image}
          />
        </div>
      </div>
    </section>
  );
};

export default Activities;
