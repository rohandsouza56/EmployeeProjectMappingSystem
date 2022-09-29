import React from "react";
import { useState, useEffect } from "react";
import QuizService from "../../Services/QuizService";
import "./Quiz.css";

const QuizComp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [Questionbank, setQuestionbank] = useState([]);

  useEffect(() => {
    getAllQuestions(window.sessionStorage.getItem("quizTechId"));
  }, []);

  const getAllQuestions = (techId) => {
    console.log(localStorage.getItem("jwtToken"));
    QuizService.getAllQuestions(techId)
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].question);
        setQuestionbank(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAnswerResponse = (isTrue) => {
    if (isTrue && Questionbank[currentQuestion].marks < 1) {
      let qb = Questionbank;
      qb[currentQuestion].marks = qb[currentQuestion].marks + 1;
      setScore(score + 1);
      setQuestionbank(qb);
      console.log(Questionbank[currentQuestion].marks);

      console.log(qb);
    }
    if (!isTrue && Questionbank[currentQuestion].marks === 1) {
      let qb = Questionbank;
      qb[currentQuestion].marks = qb[currentQuestion].marks - 1;

      setScore(score - 1);

      setQuestionbank(qb);
      console.log(qb);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const NEXTQUESTION = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const PREVQUESTION = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return Questionbank.length > 0 ? (
    <div className="attempt-quiz ">
      {showScore ? (
        <div className="score-section w-50 text-white">
          You have scored {score} out of {Questionbank.length}
          {/* <>
            <button type="submit" onClick={resetQuiz}>
              Play Again!!
            </button>
          </> */}
        </div>
      ) : (
        <div className="quiz-card w-50 ">
          <div className="question-section ">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{Questionbank.length}
            </div>

            <div className="question-text">
              {Questionbank[currentQuestion].question}
            </div>
          </div>

          <div className="answer-section">
            {Questionbank[currentQuestion].options.map((option) => (
              <button
                className="answer-button"
                onClick={() => handleAnswerResponse(option.true)}
              >
                {option.option}
              </button>
            ))}
          </div>

          <div className="quiz-button-div row ">
            <button className="quiz-button col-6" onClick={PREVQUESTION}>
              PREVQUESTION
            </button>
            <button className="quiz-button col-6" onClick={NEXTQUESTION}>
              NEXTQUESTION
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default QuizComp;
