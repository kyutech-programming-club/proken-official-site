import Link from "next/link";
import { client } from "../../libs/client";

export default function Home({ blog }: any) {
  return (
    <div>
      {blog.map((blog: any) => (
        <Link href={`/blog/${blog.id}`} key={blog.id} passHref>
          <div className="px-12 py-6 my-12 bg-white shadow-md cursor-pointer rounded-2xl hover:shadow-xl">
            <div className="text-2xl font-bold">{blog.title}</div>
            <div></div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data: any = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
