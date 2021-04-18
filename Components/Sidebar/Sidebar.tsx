import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <Image
        src="/images/my_pic.jpg"
        alt="Arefin Mehedi"
        height={180}
        width={180}
        className={classes.Sidebar__image}
      />
      <h1 className="name">Arefin Mehedi</h1>
      <h2 className="title">Fullstack developer</h2>
      <Navigation />
    </div>
  );
};

export default Sidebar;
