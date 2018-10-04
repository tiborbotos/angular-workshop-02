import angular from 'angular';
import LayoutComponent from './events/scope/layout-component';
import UserActionsComponent from './events/scope/user-actions/user-actions-component';
import UserListComponent from './events/scope/user-list/user-list-component';
import ActionBarComponent from './events/scope/action-bar/action-bar-component';
import UserCreator from './creator/user-creator-component';

export default angular
  .module('workshop-02', [])
  .component('layoutComponent', LayoutComponent.create())
  .component('actionBar', ActionBarComponent.create())
  .component('userActions', UserActionsComponent.create())
  .component('userList', UserListComponent.create())
  .component('userCreator', UserCreator.create())
  .name;
