import angular from 'angular';
import LayoutComponent from './events/scope/layout-component';
import DogsCatsComponent from '../dogs_cats/dogscats';

export default angular
  .module('workshop-02', [])
  .component('layoutComponent', LayoutComponent.create())
  .component('dogsCatsComponent', DogsCatsComponent.create())
  .name;
