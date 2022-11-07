import styled from "styled-components";
import montanha from "./../../assets/images/montanha.jpg";
import ice from "./../../assets/images/ice.jpeg";
import cachoeira from "./../../assets/images/cachoeira.jpg";
import ovelha from "./../../assets/images/ovelha.jpg";
import raposa from "./../../assets/images/raposa.jpg";

export const HomeCSS = styled.div`
  width: 94%;
  height: 100vh;
  background: url(${montanha});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding: 3%;
  position: relative;
  animation: changeBackgroundColor 22s infinite, opacity 3s ease;
  height: 100vh;
  position: relative;
  z-index: 5;

  &:after {
    content: "";
    background-color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.4;
    z-index: -1;
  }

  .title {
    padding-top: 40px;
    font-size: 120px;
    width: 10%;
    font-family: "HKGrotesk";
    line-height: 80%;

    span {
      margin-left: 30%;
    }
  }

  p {
    font-family: "Typo Grotesk";
    width: 8%;
    font-weight: 100;
    margin-top: 10%;
  }
  .texto__bottom {
    display: flex;
    font-size: 0.9rem;
    margin-left: 50%;

    h3 {
      font-family: "Evolve Sans";
      text-align: start;
      font-size: 15px;
      width: 35%;
      margin-left: 5%;
    }
  }

  .carossel {
    animation: waitAnimate_3457416745 2s both;
    transform-origin: 0%;
  }

  .img {
    transform: rotate(-40deg);
    transition: all 0.3s ease-in;
    color: #fff;
    width: 100%;
    border-radius: 180px;
    height: 100%;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateX(0%);
    background: url(${ovelha});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .img {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .img:after {
    content: "";
    background: transparent;
    position: absolute;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-radius: 180px;
    height: 100%;
  }

  .teste {
    color: #fff;
    width: 100%;
    border-radius: 180px;
    height: 100%;
    background: url(${ovelha});
    background-repeat: no-repeat;
    background-size: cover;
    animation: changeCarossel 20s infinite;
  }

  .teste2 {
    color: #fff;
    width: 100%;
    border-radius: 180px;
    height: 100%;
    margin-left: 100%;
    margin-top: 0%;
    background: url(${ice});
    background-repeat: no-repeat;
    background-size: cover;
    animation: changeCarossel2 20s infinite;
    animation-delay: 0;
  }

  .teste3 {
    color: #fff;
    width: 100%;
    border-radius: 180px;
    height: 100%;
    margin-left: 100%;
    margin-top: -148%;
    background: url(${montanha});
    background-repeat: no-repeat;
    background-size: cover;
    animation: changeCarossel3 20s infinite;
    animation-delay: 5s;
  }
  .teste4 {
    color: #fff;
    width: 100%;
    border-radius: 180px;
    height: 100%;
    margin-left: 100%;
    margin-top: -150%;
    background: url(${cachoeira});
    background-repeat: no-repeat;
    background-size: cover;
    animation: changeCarossel4 20s infinite;
    animation-delay: 9s;
  }

  @keyframes waitAnimate_3457416745 {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
      width: 18%;
      position: absolute;
      height: 50%;
      top: 12%;
      right: 25%;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes changeBackgroundColor {
    0% {
      background: url(${ice});
      background-position-y: 40%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    25% {
      background: url(${ovelha});
      background-position-y: 45%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    50% {
      background: url(${cachoeira});
      background-position-y: 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    75% {
      background: url(${raposa});
      background-position-y: 55%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    100% {
      background: url(${montanha});
      background-position-y: 60%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    0% {
      background: url(${ice});
      background-position-y: 40%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  @keyframes changeCarossel {
    0% {
      background: url(${raposa});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(100%) translatey(100%);
    }
    50% {
      background: url(${raposa});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(0%) translatey(0%);
    }
    75% {
      background: url(${raposa});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-100%) translatey(-100%);
    }
    100% {
      background: url(${raposa});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-180%) translatey(-180%);
    }
  }

  @keyframes changeCarossel2 {
    0% {
      background: url(${ice});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(100%) translatey(100%);
    }
    50% {
      background: url(${ice});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(0%) translatey(0%);
    }
    75% {
      background: url(${ice});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-100%) translatey(-100%);
    }
    100% {
      background: url(${ice});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-180%) translatey(-180%);
    }
  }

  @keyframes changeCarossel3 {
    0% {
      background: url(${montanha});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(100%) translatey(100%);
    }
    50% {
      background: url(${montanha});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(0%) translatey(0%);
    }
    75% {
      background: url(${montanha});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-100%) translatey(-100%);
    }
    100% {
      background: url(${montanha});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-180%) translatey(-180%);
    }
  }

  @keyframes changeCarossel4 {
    0% {
      background: url(${cachoeira});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(100%) translatey(100%);
    }
    50% {
      background: url(${cachoeira});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(0%) translatey(0%);
    }
    75% {
      background: url(${cachoeira});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-100%) translatey(-100%);
    }
    100% {
      background: url(${cachoeira});
      background-repeat: no-repeat;
      background-size: cover;
      transform: translatex(-180%) translatey(-180%);
    }
  }
`;
