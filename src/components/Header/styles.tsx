import styled from "styled-components";

export const HeaderCSS = styled.div`
  width: 100%;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  background: transparent !important;
  z-index: 100;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  ul li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.2em;
    display: inline-block;
    padding: 1em 0.8em;
    line-height: 1;
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 10% 15%;
  }

  a:hover {
    border-radius: 100px;
    border: solid 1px #ececec;
  }
`;
