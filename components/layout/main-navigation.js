import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* If there is not simple text inside the Link component of next it won't render the anchor tag.
          So we need to add an anchor tag. It won't need an href, only "<a></a>" */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
