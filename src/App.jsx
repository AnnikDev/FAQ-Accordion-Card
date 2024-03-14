import { GlobalStyles } from "./Globals";
import styled from "styled-components";
import React, { useState } from "react";

import illustrationMobile from "/images/illustration-woman-online-mobile.svg";
import illustrationMobileShadow from "/images/bg-pattern-mobile.svg";

import illustrationDesktop from "/images/illustration-woman-online-desktop.svg";

import QuestionContainer from "./components/QuestionContainer";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <GlobalStyles />
      <Main>
        <div className="images">
          <img className="girlIllustration" src={illustrationMobile} alt="" />
          <img
            className="girlIllustrationShadow"
            src={illustrationMobileShadow}
            alt=""
          />
        </div>

        <Title>FAQ</Title>
        <QuestionContainer
          questionIndex={0}
          active={active}
          setActive={setActive}
        />
        <QuestionContainer
          questionIndex={1}
          active={active}
          setActive={setActive}
        />
        <QuestionContainer
          questionIndex={2}
          active={active}
          setActive={setActive}
        />
        <QuestionContainer
          questionIndex={3}
          active={active}
          setActive={setActive}
        />
        <QuestionContainer
          questionIndex={4}
          active={active}
          setActive={setActive}
        />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 32.7rem;
  border-radius: 23px;
  box-shadow: 0 50px 50px -20px rgba(53, 18, 122, 0.5);
  background-color: #fff;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  align-items: center;
  position: relative;

  .images {
    display: flex;
    flex-direction: column;
    height: 20.7rem;
    position: absolute;
    top: -11rem;
  }

  .girlIllustration {
    width: 23.7rem;
    height: 18rem;
  }

  .girlIllustrationShadow {
    transform: translateY(-7.5rem);
  }

  @media screen and (min-width: 90rem) {
    width: 92rem;
    padding: 6.5rem 9.5rem 8.3rem 47.6rem;
    align-items: flex-start;
    background-image: url(${illustrationDesktop});
    background-repeat: no-repeat;
    background-position: top 7rem left -8rem;
    .images {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  color: #1e1f36;
`;
