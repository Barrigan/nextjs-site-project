import Image from "next/image";

import classess from "./hero.module.css";

function Hero() {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/images/site/ivan-galvez.jpg"
          alt="Iván Gálvez Dancer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm a professional Dance instructor</h1>
      <p>Available for performances and group &amp; private dance classes.</p>
    </section>
  );
}

export default Hero;
