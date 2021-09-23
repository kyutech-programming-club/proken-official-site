// pages/blog/[id].js
import { client } from "../../libs/client";

export default function BlogId({ blog }: any) {
  return (
    <div className="w-auto">
      <h1 className="py-6 text-4xl font-bold">{blog.title}</h1>
      <p className="text-2xl">{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className="prose pt-7"
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
