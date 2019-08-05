import angular from 'angular';
import LayoutComponent from './events/scope/layout-component';
import DogsCatsComponent from '../dogs_cats/dogscats';
import QuizComponent from '../quiz/quiz';

export default angular
  .module('workshop-02', [])
  .component('layoutComponent', LayoutComponent.create())
  .component('dogsCatsComponent', DogsCatsComponent.create())
  .component('quizComponent', QuizComponent.create())
  .name;
