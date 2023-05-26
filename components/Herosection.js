import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../src/app/styles/herosec2.css";
// import styles from "../src/app/styles/contact.module.css";

const Herosection = () => {
  return (
    <section>
      {/* <div>
        <Link href="">
          <Image src="/main.jpg" alt="this is logo" width={1510} height={600} />
        </Link>
      </div> */}

      <div class="container">
        <Image src="/menu.jpg" alt="this is logo" width={1510} height={600} />

        <div class="center">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Plans now start at USD2.99/month.</h2>
          <h3>
            {" "}
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div class="con">
            {/* <label> */}
            {/* Enter your email */}
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            {/* </label> */}

            <button class="btn">Get Started</button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;