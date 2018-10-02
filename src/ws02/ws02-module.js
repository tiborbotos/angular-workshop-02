import angular from 'angular';
import LayoutComponent from './events/scope/layout-component';

export default angular
  .module('workshop-02', [])
  .component('layoutComponent', LayoutComponent.create())
  .name;
