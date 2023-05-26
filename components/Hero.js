import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

import Image from "next/image";

const Herosection = () => {
  return (
    <section>
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            
            <h1>
              Enjoy on your TV Watch on Smart TVs,</h1>
              <h2> Playstation, Xbox,
              Chromecast, Apple TV, Blu-ray players, and more.
            </h2>

            {/* <Link href="/blog">
              <button>Explore Blogs</button>
            </Link> */}
          </div>
          <div className={heroStyles.hero_image}>
            <Image
              src={"/tv.png"}
              alt="watching blogs"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>

      {/*  */}
    </main>
    </section>
  );
};

export default Herosection;
