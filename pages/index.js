import React, { useState, useEffect } from "react";

const QuestionAnswering = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch("https://38mr0ftz43.execute-api.ap-south-1.amazonaws.com/default/question_answering", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      });
      const data = await res.json();
      setResponse(data);
    };
    sendRequest();
  }, []);

  return <div>{response}</div>;
};

export default QuestionAnswering;
