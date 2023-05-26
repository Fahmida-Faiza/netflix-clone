import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

import Image from "next/image";

const Herosection = ({ title, imageUrl }) => {
  return (
    <section>
      <main className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_image}>
              <Image
                src={"/cartoon.png"}
                alt="watching blogs"
                width={500}
                height={200}
              />
            </div>
            <div className={heroStyles.hero_content}>
              <h1>Create profiles for kids</h1>
              <h2>
                {" "}
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h2>
            </div>
          </div>
        </div>

        {/*  */}
      </main>
    </section>
  );
};

export default Herosection;
