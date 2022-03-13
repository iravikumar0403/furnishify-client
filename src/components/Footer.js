export const Footer = () => {
  return (
    <footer className="footer py-3 text-center">
      <p>
        Made with &lt;/&gt; by{" "}
        <a href="https://ravikumar0403.netlify.app" className="text-primary">
          Ravi Kumar Singh
        </a>
      </p>
      <ul className="list inline justify-center">
        <li className="nav-menu-item">
          <a
            className="fw-bold"
            href="https://github.com/ravikumar0403/XenonUI/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fs-1 fab fa-github"></i>
          </a>
        </li>
        <li className="nav-menu-item">
          <a
            className="fw-bold"
            href="https://twitter.com/ravikumar0403"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fs-1 fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav-menu-item">
          <a
            className="fw-bold"
            href="https://www.linkedin.com/in/ravikumar0403/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fs-1 fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
