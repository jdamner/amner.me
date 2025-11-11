import { Link, Outlet } from "react-router";

/* Components */
import { Container } from "@/components/Layouts";
import { NavBar } from "@/components";

const RootLayout = () => (
  <>
    <NavBar />
    <main id="page">
      <Outlet />
    </main>
    <footer id="footer" className="bg-orange-600 text-black p-5">
      <Container>
        <div className="text-sm">
          <ul className="flex flex-wrap items-center justify-center gap-10 mb-10 uppercase font-bold">
            {[
              { href: "/cv", text: "Digital CV" },
              { href: "/privacy", text: "Privacy Policy" },
              {
                href: "https://github.com/jdamner",
                text: "GitHub",
                target: "_blank",
                rel: "noopener noreferrer",
              },
            ].map((link) => (
              <li className="" key={link.href}>
                {link.href.startsWith('http') ? (
                  <a {...link} className="hover:underline">
                    {link.text}
                  </a>
                ) : (
                  <Link to={link.href} className="hover:underline">
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="text-center">
            &copy; James Amner {new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  </>
);

export default RootLayout;
