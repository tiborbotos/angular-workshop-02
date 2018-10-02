export default class LayoutComponent {
  static create() {
    return {
      template: require('./layout.html'),
      controller: LayoutComponent,
    };
  }
}
