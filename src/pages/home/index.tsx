import Carrossel from "../../components/Carrossel";
import { FireIce } from "../../components/FireIce";
import Memory from "../../components/Memory";
import Quadros from "../../components/Quadros";
import { HomeCSS } from "./styles";

const Home = () => {
  return (
    <>
      <HomeCSS>
        <div className="title">
          Gunner <span>Freyr</span>
        </div>
        <p> Photographer & Entrepreneur from Iceland</p>
        <div className="carossel">
          <div className="img">
            <div className="teste"></div>
            <div className="teste2"></div>
            <div className="teste3"></div>
            <div className="teste4"></div>
          </div>
        </div>
        <div className="texto__bottom">
          <h3>
            Gunnar is a Reykjavik based photographer, storyteller and creative
            entrepreneur. He was born in Denmark by Icelandic parents and in
            2014, he decided to quit his corporate job to satisfy his desire for
            adventure.
          </h3>
          <h3>
            With camera in hand, his passion for exploration led him out into
            the wilderness. Gunnar loves to travel and is always excited for new
            adventures and projects!
          </h3>
        </div>
      </HomeCSS>
      <Memory />
      <Carrossel />
      <FireIce />
      <Quadros />
    </>
  );
};

export default Home;
