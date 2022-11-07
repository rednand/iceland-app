import styled from "styled-components";
import lava from "./../../assets/images/background-lava.jpg";

export const FireIceCSS = styled.div`
  position: relative;
  background: url(${lava});
  background-size: 100%;
  background-position: 100% 60%;

  .backfireice {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: url(${lava});
    background-size: 100%;
    background-position-y: 80%;
    background-repeat: no-repeat;
    position: sticky;
    top: 20%;

    &:hover {
      animation: changeBackLava 5s infinite;

      @keyframes changeBackLava {
        0% {
          background-position-y: 80%;
        }

        50% {
          background-position-y: 100%;
        }

        100% {
          background-position-y: 80%;
        }
      }
    }
  }

  .fireicediv {
    position: absolute;
    top: 1%;
    font-size: 130px;
    color: #fff;
    width: 35%;
    line-height: 90%;
    text-align: start;
    margin-left: 3%;
    display: flex;
    justify-content: flex-start;
  }

  .fireice--p {
    color: #fff;
    position: absolute;
    top: 93%;
    font-size: 10px;
    color: #fff;
    width: 35%;
    line-height: 90%;
    text-align: start;
    margin-left: 3%;
    display: flex;
    justify-content: flex-start;
    font-size: 1rem;
    display: flex;
    p {
      margin: 0 5% 0 0;
      font-size: 1rem;
    }
  }
`;
