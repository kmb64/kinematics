export default function servicesConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.services', {
      url: '/services',
      // controller: 'servicesCtrl',
      // controllerAs: '$ctrl',
      templateUrl: 'services/services.html'
    });

}
