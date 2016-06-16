export default function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.about', {
    url: '/about',
    controller: 'AboutCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'about/about.html'
  });

}
