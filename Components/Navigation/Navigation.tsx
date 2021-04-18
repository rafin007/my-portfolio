import classes from "./Navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
