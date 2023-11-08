// import Quiz from "./components/Quiz/Quiz";
import Quiz from "./Quiz1/Quiz";
import { useEffect, useState } from "react";



function QuizApp() {
  const [questions, setQuestions] = useState([]);
  useEffect(() =>{
    getQuestions();
  },[]);

  // async function getQuestions() {
  //   try {
  //     const response = await fetch('http://serwer2360058.home.pl/questions.json'); // Wczytaj plik questions.json z lokalnego katalogu
  //     if (!response.ok) {
  //       throw new Error('Błąd podczas pobierania pliku JSON');
  //     }
      
  //     const questions = await response.json();
  //     return questions;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // }
  
  // // Wywołanie funkcji i obsługa wyniku
  // getQuestions()
  //   .then(questions => {
  //     if (questions) {
  //       console.log('Pobrane pytania:', questions);
  //       // Tutaj możesz wykonać operacje na pobranych pytaniach
  //     } else {
  //       console.log('Nie udało się pobrać pytań.');
  //     }
  //   });
  // const getQuestions = async () => {
  //   try {
  //     const response = await fetch("src/Components/Quiz/questions2.json"); 
  //     const questionsResponse = await response.json();
  //     console.log(questionsResponse);
  //     setQuestions(questionsResponse)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const getQuestions = async () => {
    try {
      const response = await fetch("https://644982a3e7eb3378ca4ba471.mockapi.io/questions"); 
      const questionsResponse = await response.json();
      console.log(questionsResponse);
      setQuestions(questionsResponse)
    } catch (error) {
      console.log(error);
    }
  }


  return questions.length && <Quiz questions={questions} />;
}

export default QuizApp;