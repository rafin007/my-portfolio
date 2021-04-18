import { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main>
      <section className={classes.Glass}>
        <Sidebar />
        {children}
      </section>
      <div className={classes.circle1}></div>
      <div className={classes.circle2}></div>
    </main>
  );
};

export default Layout;
