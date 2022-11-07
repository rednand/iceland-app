import styled from "styled-components";
import demos from "./../../assets/images/demos.jpg";
import quadro from "./../../assets/images/quadro.jpg";
import room from "./../../assets/images/RedOnBlackHills_Large.png";

export const QuadrosCSS = styled.div`
  background-color: #212821;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2%;
  justify-items: stretch;
  align-items: stretch;

  .section1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10% 5%;
    grid-column-gap: 5px;
    width: 78%;

    .img:first-child {
      background: url(${demos});
      background-size: 100%;
      background-position: 50%;

      &:hover {
        animation: testando2 1s ease;
        background-size: 110%;

        @keyframes testando2 {
          0% {
            background-size: 105%;
          }
          100% {
            background-size: 110%;
          }
        }
      }
    }

    .text {
      margin-top: 13%;
    }

    p {
      color: #fff;
      margin-left: 1%;
      line-height: 70%;
    }

    .img3 {
      background: url(${room});
      background-position: 10%;
      background-size: 100%;

      &:hover {
        animation: testando3 1s ease;
        background-size: 110%;

        @keyframes testando3 {
          0% {
            background-size: 105%;
          }
          100% {
            background-size: 110%;
          }
        }
      }
    }

    .img,
    .img3 {
      margin: 4% 2%;
      height: 25vh;
      background-repeat: no-repeat;
    }
  }

  .section2 {
    margin: 10% 0 0;

    .img {
      width: 82%;
      height: 70vh;
      margin: 2% 0 0 10%;
      background: url(${quadro});
      background-size: 120%;
      background-position: 50%;
      background-repeat: no-repeat;

      &:hover {
        animation: testando 1s ease;
        background-size: 130%;

        @keyframes testando {
          0% {
            background-size: 120%;
          }
          100% {
            background-size: 130%;
          }
        }
      }
    }

    p {
      color: #fff;
      margin-left: 10%;
    }
    p + p {
      text-align: center;
    }
  }
`;

export const QuadrosBottomCSS = styled.div`
  background-color: #212821;
  padding-left: 32%;
  padding-top: 5%;
  padding-bottom: 2%;
  display: flex;
  width: 68%;
  justify-content: center;

  a {
    font-family: "Scto Grotesk A Regular", "proxima-nova", "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    letter-spacing: -0.05em;
    font-style: italic;
    line-height: 0.9;
    color: #fff;
    font-size: 2rem;
    display: flex;

    p {
      width: 25%;
    }
  }

  svg {
    margin: 0 5%;
    width: 6%;

    &:hover {
      animation: mudandoPosicaoArrow 1s ease;

      @keyframes mudandoPosicaoArrow {
        0% {
          transform: translatex(0%);
        }
        100% {
          transform: translatex(40%);
        }
      }
    }
  }
`;
