import { QuadrosBottomCSS, QuadrosCSS } from "../Quadros/styles";

const Quadros = () => {
  return (
    <>
      <QuadrosCSS>
        <div className="section1">
          <div>
            <div className="img"></div>
            <div className="text">
              <p> Autumn Wallpapers for Mobile</p>
              <p>US$7.99</p>
            </div>
          </div>
          <div>
            <div className="img3"></div>
            <div className="text">
              <p> New Earth</p>
              <p>from US$149.00</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="img"></div>
          <div>
            <p>Fagradalsfjall</p>
            <p>from US$149.00</p>
          </div>
        </div>
      </QuadrosCSS>
      <QuadrosBottomCSS>
        <a href="/">
          <svg viewBox="0 0 16 12">
            <path
              d="M7.98 0.119999L13.2 5.38H0.78V6.68H13.26L7.98 12H9.78L15.7 6.06L9.78 0.119999H7.98Z"
              fill="#fff"
            ></path>
          </svg>
          <p>Visit the shop</p>
        </a>
      </QuadrosBottomCSS>
    </>
  );
};

export default Quadros;
