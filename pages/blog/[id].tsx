// pages/blog/[id].js
import { client } from "../../libs/client";

export default function BlogId({ blog }: any) {
  return (
    <div className="py-12 mx-auto ">
      <div className="px-12 pb-6 text-4xl font-bold w-2xl">{blog.title}</div>
      <div className="px-12 text-2xl w-2xl">{blog.publishedAt}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className="p-12 mt-12 prose"
      />
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "blog" });

  const paths = data.contents.map(
    (content: { id: any }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
