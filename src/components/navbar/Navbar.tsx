import Link from "next/link";
import MoonIcon from "../../assets/icons/moonIcon";
import SearchIcon from "../../assets/icons/serachIcon";
import BurgerIcon from "../../assets/icons/burggerIcon";
import { SideBar } from "../sideBar/sideBar";
import { useState } from "react";
import { useRouter } from "next/router";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const [isShowNav,setShowNav]=useState(false)
  const router = useRouter()
  return (
    <nav className="Navbar">
      <Link href={"/"}>
        <h1 className="logo select-none cursor-pointer">Blog | مدونة</h1>
      </Link>
      <div className="Wrapper">
        <ul className="Links">
          <li>
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Articles">
              <a className={router.pathname == "/Articles" ? "active" : ""}>
                Articles
              </a>
            </Link>
          </li>
          <li>
            <Link href="/report_studies">
              <a
                className={router.pathname == "/report_studies" ? "active" : ""}
              >
                Reporting and Studies
              </a>
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex gap-2">
          <MoonIcon />
          <SearchIcon />
        </div>

        {/* if there time do in it */}
        <div className="block md:hidden" onClick={() => setShowNav(!isShowNav)}>
          <BurgerIcon />
          <SideBar isShowNav={isShowNav} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
