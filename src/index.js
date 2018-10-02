import angular from 'angular';

import 'angular/angular-csp.css';

import './index.scss';
import workshop02 from './ws02/ws02-module';

angular.module('main', [
  workshop02,
]);

angular.bootstrap(document.documentElement, ['main']);
