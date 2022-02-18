import Image from "next/image";

import classess from "./hero.module.css";

function Hero() {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/images/site/ivan-galvez.jpg"
          alt="An image showing mi culo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm your biatch dance instructor</h1>
      <p>I am an expendable. For the right price I'll do anything for you ;*</p>
    </section>
  );
}

export default Hero;
