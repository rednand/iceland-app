import { CarrosselCSS } from "./styles";
import iceland from "./../../assets/images/carrossel-imagens/iceland.jpg";
import wolf from "./../../assets/images/carrossel-imagens/wolf.jpg";
import texture from "./../../assets/images/carrossel-imagens/DJI_0399.jpg";
import montanha from "./../../assets/images/montanha.jpg";
import ice from "./../../assets/images/ice.jpeg";
import cachoeira from "./../../assets/images/cachoeira.jpg";
import ovelha from "./../../assets/images/ovelha.jpg";
import raposa from "./../../assets/images/raposa.jpg";

const Carrossel = () => {
  return (
    <>
      <CarrosselCSS>
        <div className="carossel">
          <div className="carrossel-imagens">
            <a href="/">
              <img src={iceland} alt="" />
              <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={wolf} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={texture} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={montanha} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={ice} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={ovelha} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={cachoeira} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={raposa} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={texture} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={iceland} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={wolf} alt="" /> <p>Títuto 1</p>
            </a>
            <a href="/">
              <img src={texture} alt="" /> <p>Títuto 1</p>
            </a>
          </div>
        </div>
      </CarrosselCSS>
    </>
  );
};

export default Carrossel;
