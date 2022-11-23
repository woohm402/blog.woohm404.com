import * as React from "react";
import { Link } from "gatsby";

type Props = { title: string; location: Location };

const Layout = ({
  location,
  title,
  children,
}: React.PropsWithChildren<Props>) => {
  const rootPath = `/`;
  const isRootPath = location.pathname === rootPath;

  const header = isRootPath ? (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  ) : (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
