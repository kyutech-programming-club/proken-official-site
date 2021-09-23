import Link from "next/link";
import { client } from "../../libs/client";

export default function Home({ blog }: any) {
  return (
    <div className="">
      <div className="">
        {blog.map((blog: any) => (
          <div className="px-24 py-6 my-12 rounded-md shadow-md" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </div>
        ))}
      </div>
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
