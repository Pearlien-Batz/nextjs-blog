import Link from "next/link";
import styles from "./Navbar.module.css"; // Import your CSS module

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Shop" },
  { href: "/", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}> {/* Apply the CSS class for styling */}
      <ul className={styles.navList}> {/* Apply the CSS class for styling */}
        {links.map((link) => (
          <li key={link.href} className={styles.navItem}> {/* Apply the CSS class for styling */}
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
