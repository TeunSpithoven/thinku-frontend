// import { createQuiz, getQuiz, editQuiz } from "@/services/QuizService.js";

// import { useToast } from "vue-toastification";

// const toast = useToast();

const createQuizStore = {
  state: {
    // id: -1,
    // userId: 1,
    // title: "",
    // description: "",
    // image: "",
    // toast: { type: "", text: "" },
    
    // questions: [],

    // editQuestion: -1,
    // renderQuestions: true,
  },
  getters: {
    
  },
  mutations: {
    // QUIZ
    // saveQuizToDB(state) {
    //   const n = {
    //     quiz: {
    //       userId: state.userId,
    //       title: state.title,
    //       description: state.description,
    //       image: state.image,
    //       questions: state.questions,
    //     },
    //   };
    //   try {
    //     createQuiz(n.quiz).then((response) => {
    //       console.log(response);
    //       toast.success("Quiz opgeslagen!");
    //     });
    //   } catch (err) {
    //     toast.error(err);
    //   }
    // },
    // editQuizToDB(state) {
    //   // get the quiz from state
    //   const n = {
    //     quiz: {
    //       userId: state.userId,
    //       title: state.title,
    //       description: state.description,
    //       image: state.image,
    //       questions: [],
    //     },
    //   };
    //   // fill the quiz with the correct question format
    //   state.questions.forEach((q) => {
    //     const question = {
    //       question: q.question,
    //       number: q.number,
    //       type: q.type,
    //       time: q.time,
    //       answers: q.answers,
    //     };
    //     n.quiz.questions.push(question);
    //   })
    //   // send request to api
    //   try {
    //     editQuiz(state.id, n.quiz).then((response) => {
    //       console.log(response);
    //       toast.success("Wijzigingen opgeslagen!");
    //     });
    //   } catch (err) {
    //     toast.error(err);
    //   }
    // },
    // setEditQuiz(state, n) {
    //   getQuiz(n.id).then((response) => {
    //     const resQuiz = JSON.parse(response);
    //     state.id = resQuiz.id;
    //     state.userId = resQuiz.userId;
    //     state.title = resQuiz.title;
    //     state.description = resQuiz.description;
    //     state.image = resQuiz.image;
    //     state.questions = resQuiz.questions;
    //     console.log(resQuiz.questions);
    //     // toast(`got quiz with id: ${n.id} from api`);
    //   });
    // },
    // updateCreateQuiz(state, n) {
    //   state.userId = n.userId;
    //   state.title = n.title;
    //   state.description = n.description;
    //   state.image = n.image;
    //   state.questions = n.questions;
    // },
    // updateCreateQuizInfo(state, n) {
    //   state.userId = n.userId;
    //   state.title = n.title;
    //   state.description = n.description;
    //   state.image = n.image;
    // },
    // updateQuizTitle(state, n) {
    //   state.title = n.title;
    // },
    // updateQuizDescription(state, n) {
    //   state.description = n.description;
    // },
    // updateCreateQuizImage(state, n) {
    //   // state.image = toString(n.image);
    //   state.image = n.image;
    //   console.log(state.image);
    // },
    // updateCreateQuizQuestions(state, n) {
    //   state.questions = n.questions;
    // },
    
    // ANSWER
    // createAnswer(state, n) {
    //   var questionIndex = state.questions
    //     .map((x) => {
    //       return x.number;
    //     })
    //     .indexOf(n.questionNumber);
    //   state.questions[questionIndex].answers.push(n);
    // },
    // updateAnswer(state, n) {
    //   var questionIndex = state.questions
    //     .map((x) => {
    //       return x.number;
    //     })
    //     .indexOf(n.questionNumber);
    //   var answerIndex = state.questions[questionIndex].answers
    //     .map((x) => {
    //       return x.number;
    //     })
    //     .indexOf(n.number);

    //   state.questions[questionIndex].answers[answerIndex].number = n.number;
    //   state.questions[questionIndex].answers[answerIndex].answer = n.answer;

    //   // TODO: get the amount of correct answers
    //   var correctAnswers = 2;
    //   if (n.isCorrect === true || correctAnswers > 1) {
    //     state.questions[questionIndex].answers[answerIndex].isCorrect =
    //       n.isCorrect;
    //   }
    // },
    // updateAnswerList(state, n) {
    //   var questionIndex = state.questions
    //     .map((x) => {
    //       return x.number;
    //     })
    //     .indexOf(n.questionNumber);
    //   state.questions[questionIndex].answers = n.answers;
    // },
    // deleteAnswer(state, n) {
    //   var questionIndex = state.questions
    //     .map((x) => {
    //       return x.number;
    //     })
    //     .indexOf(n.questionNumber);

    //   if (state.questions[questionIndex].answers.length > 1) {
    //     var index = state.questions[questionIndex].answers
    //       .map((x) => {
    //         return x.number;
    //       })
    //       .indexOf(n.number);

    //     state.questions[questionIndex].answers.splice(index, 1);
    //     state.questions[questionIndex].answers.forEach(
    //       (answer, index) => (answer.number = index)
    //     );
    //     // console.log(state.questions[questionIndex].answers)
    //   } else {
    //     state.error = "there must be at least one answer in a question";
    //   }
    // },
  },
  actions: {},
  modules: {},
};

export { createQuizStore };
