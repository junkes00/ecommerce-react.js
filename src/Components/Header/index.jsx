import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <a className="logo">SHOP.CO</a>
      <nav>
        <ul className="header-menu">
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>On Sale</a>
          </li>
          <li>
            <a>New Arrivals</a>
          </li>
          <li>
            <a>Brands</a>
          </li>
        </ul>
      </nav>
      <input
        type="text"
        name="search"
        id="search"
        className="input-search"
        placeholder="Search for products..."
      />
      <div className="header-user-data">
        <FiShoppingCart width="24px" height="24px" />
        <CgProfile />
      </div>
    </S.Container>
  );
};

export default Header;
