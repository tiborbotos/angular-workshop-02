import angular from 'angular';
import LayoutComponent from './events/scope/layout-component';
import DogsCatsComponent from '../dogs_cats/dogscats';
import QuizComponent from '../quiz/quiz';
import QuestionComponent from '../question-component/question-component';
import QuestionHeaderComponent from '../question-header/question-header';
import QuizActionsComponent from '../quiz-actions/quiz-actions';
import QuizResultComponent from '../quiz-result/quiz-result';
import StartComponent from '../start-component/start-component';
import OrderingToolComponent from '../ordering_tool/orderingtool';
import OrderingInputComponent from '../ordering-input/ordering-input';

export default angular
  .module('workshop-02', [])
  .component('layoutComponent', LayoutComponent.create())
  .component('dogsCatsComponent', DogsCatsComponent.create())
  .component('quizComponent', QuizComponent.create())
  .component('questionComponent', QuestionComponent.create())
  .component('questionHeaderComponent', QuestionHeaderComponent.create())
  .component('quizActionsComponent', QuizActionsComponent.create())
  .component('quizResultComponent', QuizResultComponent.create())
  .component('startComponent', StartComponent.create())
  .component('orderingToolComponent', OrderingToolComponent.create())
  .component('orderingInputComponent', OrderingInputComponent.create())
  .name;
