import styled from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";
import data from "../data.json";

export default function QuestionContainer({
  questionIndex,
  active,
  setActive,
}) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;
  return (
    <QuestionsSection
      onClick={() => {
        if (active === questionIndex) {
          setActive(null);
        } else {
          setActive(questionIndex);
        }
      }}
      active={active}
      questionindex={questionIndex}
    >
      <div>
        <Question active={active} questionindex={questionIndex}>
          {question}
        </Question>
        <img src={Arrow} alt="" />
      </div>
      {active === questionIndex && <Answer>{answer}</Answer>}
    </QuestionsSection>
  );
}

const QuestionsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 27.9rem;

    img {
      width: 0.9rem;
      height: 0.6rem;
      transform: ${(props) =>
        props.active === props.questionindex
          ? "rotate(180deg)"
          : "rotate(0deg)"};
      transition: 0.3s;
    }
  }

  @media screen and (min-width: 90rem) {
    div {
      width: 35rem;
    }
  }
`;

const Question = styled.h2`
  font-size: 1.3rem;
  font-weight: ${(props) =>
    props.active === props.questionindex ? "700" : "400"};
  color: #4b4c5f;

  &:hover {
    color: #f47b56;
  }

  @media screen and (min-width: 90rem) {
    font-size: 1.4rem;
  }
`;

const Answer = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: #787887;
`;
