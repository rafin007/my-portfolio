import classes from "./Navigation.module.scss";
import NavigationLink from "./NavigationLink/NavigationLink";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li>
          <NavigationLink href="/" activeClassName={classes.active}>
            <a>Home</a>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink href="/education" activeClassName={classes.active}>
            <a>Education</a>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink href="/portfolio" activeClassName={classes.active}>
            <a>Portfolio</a>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink href="/contact" activeClassName={classes.active}>
            <a>Contact</a>
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
