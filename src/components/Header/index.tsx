import { Link } from "react-router-dom";
import { HeaderCSS } from "./styles";

export const Header = () => {
  return (
    <HeaderCSS>
      <ul>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </HeaderCSS>
  );
};
