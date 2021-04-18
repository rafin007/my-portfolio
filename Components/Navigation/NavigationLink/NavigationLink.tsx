import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children, ReactNode } from "react";

type Props = {
  children: JSX.Element;
  href: string;
  activeClassName: string;
};

const NavigationLink = ({ children, ...props }: Props) => {
  const child = Children.only(children);

  const router = useRouter();

  let className = child.props.className || "";
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  //   delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default NavigationLink;
