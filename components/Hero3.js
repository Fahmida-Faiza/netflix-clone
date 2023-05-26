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
                src={"/mobile.jpg"}
                alt="watching blogs"
                width={500}
                height={200}
              />
            </div>
            <div className={heroStyles.hero_content}>
              
             

              <h1>Download your shows to watch offline</h1>
              <h2>
                {" "}
                Save your favorites easily and always have something to watch.
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
