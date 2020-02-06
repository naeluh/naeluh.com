import Link from "next/link";
import { withRouter } from "next/router";

const links = [
  {
    href: "/",
    name: "127.0.0.1"
  },
  {
    href: "/work",
    name: "work"
  },
  {
    href: "/contact",
    name: "contact"
  },
  {
    href: "/about",
    name: "about"
  }
];

class Header extends React.Component {
  state = { isActive: true };

  handleClick(event, url) {
    event.preventDefault();
    Router.push({
      pathname: `/work/${url}`,
      asPath: `/work/${url}`
    });
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    const { pathname } = this.props;
    return (
      <header>
        <div className={this.state.isActive ? "hide-overlay" : ""}>
          <nav>
            <button
              onClick={this.toggleNav}
              className=""
              aria-label={this.state.isActive ? "closed" : "open"}
            />
          </nav>
          <div
            className="overlay"
            aria-label={this.state.isActive ? "closed" : "open"}
          >
            <div className="overlay-content">
              <button id="close" onClick={this.toggleNav}>
                <span>close</span>
              </button>
              <ul id="weblist">
                {links.map((link, index) => (
                  <li className="bk" key={index + 1}>
                    <Link href={link.href}>
                      <a
                        prefetch="true"
                        onClick={this.toggleNav}
                        href={link.href}
                        className={pathname === link.name ? "is-active" : ""}
                      >
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <style jsx>{`
          .is-active {
            text-decoration: underline;
          }
        `}</style>
      </header>
    );
  }
}

export default withRouter(Header);
