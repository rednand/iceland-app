import styled from "styled-components";

export const CarrosselCSS = styled.div`
  height: 100vh;
  overflow: hidden;

  .carrossel-imagens {
    display: flex;
    overflow: hidden;
    align-items: center;
    margin-top: 10%;
    width: auto;

    a {
      text-decoration: none;
      margin-left: 8%;
      animation: changeCarosselTeste 80s ease-in-out infinite;

     
      p {
        text-align: center;
      }
    }

    img {
      height: auto;
      width: 20vw;
      transform-origin: right;
      transform: translatex(0%);
    }

    @keyframes changeCarosselTeste {
      0% {
        transform: translatex(0%);
      }

      100% {
        transform: translatex(-850%);
      }
    }
  }
`;
