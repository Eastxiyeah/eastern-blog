import Image from "next/image";
import styles from "./page.module.css";
import Brand from "/public/brand.png";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text='See Our Works' url='/portfolio' />
      </div>
      <div className={styles.item}>
        <Image src={Brand} className={styles.img} alt="" />
      </div>
    </div>
  );
}
