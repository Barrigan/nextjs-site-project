import Image from "next/image";

import classess from "./hero.module.css";

function Hero() {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/images/site/angel.jpg"
          alt="An image showing mi culo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm your favorite person</h1>
      <p>
        I blog about web development - especially frameworks like React and
        Nextjs
      </p>
    </section>
  );
}

export default Hero;
