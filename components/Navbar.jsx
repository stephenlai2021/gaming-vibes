import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import AuthContext from "../stores/authContext";
import MobileNav from "./MobileNav";
import { useRouter } from 'next/router'

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);

  const router = useRouter()

  const handleClick = () => {
    if (!user) {
      login()
    }
    router.push('/guides')
  }

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>

        {authReady && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            {/* <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li> */}

            <li onClick={handleClick}>Guides</li>

            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
            {user && <li>{user.email}</li>}
            {user && (
              <li onClick={logout} className="btn">
                Log out
              </li>
            )}
          </ul>
        )}

        {authReady && <MobileNav />}
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}
