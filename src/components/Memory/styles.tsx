import styled from "styled-components";
import raposa from "./../../assets/images/fundomemories.jpg";

export const MemoryCSS = styled.div`
  background-color: #41443d;
  width: 100%;
  height: 280vh;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -2.8%;

  &:after {
    content: "";
    background: url(${raposa});
    position: absolute;
    top: 8%;
    left: 10%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 80%;
    border-radius: 800px;
    height: 250vh;
  }
  h2 {
    color: white;
    font-size: 50px;
    position: sticky;
    line-height: 120%;
    top: 5%;
    z-index: 12;
    width: 40%;
    margin-left: 4%;
    padding-top: 15%;
  }

  h3 {
    color: white;
    font-size: 90px;
    position: absolute;
    top: 50%;
    line-height: 10%;
    margin-left: 223%;
  }

  .memory__div--p {
    color: white;
    font-size: 1rem;
    position: sticky;
    line-height: 100%;
    top: 120%;
    margin-top: 25%;
    display: flex;

    p {
      margin: 0 5% 0 0;
      font-size: 1rem;
    }
  }
`;
