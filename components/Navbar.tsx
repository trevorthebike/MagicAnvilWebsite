// /components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbarmini">
      <div>
      <Link href="/">
        <h1>Magic Anvil</h1>
      </Link>
        <Link className="navbaritems" href="/member">Team Members</Link>
        <Link className="navbaritems" href="/prototype">Prototypes</Link>
        <Link className="navbaritems" href="/videos">Gameplay Videos</Link>
        <Link className="navbaritems" href="/constraints">Constraints</Link>
        <Link className="navbaritems"href="/download">Downloads</Link>
      </div>
    </nav>
  );
}

export default Navbar;
