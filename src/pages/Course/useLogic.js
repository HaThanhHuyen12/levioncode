import { dataQuestions } from "../../fakeData/question";
import React, { useState } from "react";
import lessons from "../../fakeData/lesson.json";
export default function UseLogic() {
  const [answer, setAnswer] = useState({});
  const [progress, setProgress] = useState(0);
  const [tougle1, setTougle1] = useState(1);
  const [tougle2, setTougle2] = useState(1);
  const [messages, setMessages] = useState(false);
  const [message, setMessage] = useState([]);
  const [collapsed, setCollapsed] = useState({});
  console.log("list", answer);
  console.log("progress", progress);
  console.log("aa", Object.values(answer).length);
  const handleAnswer = (_answer, question) => {
    console.log("question", answer);
    console.log("question", question);
    setAnswer({
      ...answer,
      [question.id]: _answer.detail,
    });

    setProgress(Object.values(answer).length);
  };
  const responseBody = {};
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("form submitted ✅");
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, property) => (responseBody[property] = value));
    dataQuestions.forEach((question) => {
      if (question.correctAnswer === responseBody[`q${question.id}`]) {
        setMessage((preData) => {
          return {
            ...preData,
            [`q${question.id}`]: "Đúng",
          };
        });
      } else {
        setMessage((preData) => {
          return {
            ...preData,
            [`q${question.id}`]: "Sai",
          };
        });
      }
    });
    console.log(JSON.stringify(responseBody));
    console.log(message);
    setMessages(true);
  };
  console.log("ngoai", message);
  const tab1 = (id) => {
    console.log(id);
    if (id === 1) {
      setProgress(0);
      setAnswer({});
    }
    setTougle1(id);
  };
  const tab2 = (id) => {
    console.log(id);
    setTougle2(id);
  };
  const handleCollapse = (id) => {
    console.log("collapse", id);
    setCollapsed((preData) => {
      return { ...preData, [`q${id}`]: { id } };
    });
  };
  console.log(collapsed);
  return {
    handleAnswer,
    answer,
    progress,
    tab1,
    tab2,
    tougle1,
    tougle2,
    handleSubmit,
    message,
    messages,
    lessons,
    handleCollapse,
  };
}