import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  //putting all the information from data file into a question state
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answer</h3>

        {/* taking the hole information from the data file and spritting it out */}
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
