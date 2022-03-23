import Image from "next/image";

import classess from "./hero.module.css";

function Hero() {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/images/site/tlp-logo.webp"
          alt="The Latin Passion"
          width={822}
          height={300}
        />
      </div>
      <h1>Exciting Afro-Latin dance events &amp; classes</h1>
      <p>
        Learn about our Bachata, Salsa &amp; Kizomba events and classes in
        London, Brighton, UK and world!
      </p>
    </section>
  );
}

export default Hero;
