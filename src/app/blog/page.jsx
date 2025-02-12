import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Eastern Blog",
  description: "This is a full stack app demo generated by create next app",
};

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  console.log(res, "res");

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  return res.json();
};

const Blog = async () => {
  const blogs = await getData();

  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <Link href={`blog/${blog.id}`} className={styles.item} key={blog.id}>
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/13627399/pexels-photo-13627399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
