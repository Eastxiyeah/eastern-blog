import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://img1.baidu.com/it/u=2561736745,3523256920&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>East Xie</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13627399/pexels-photo-13627399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.body}. {data.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
