export default function LocationConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.location', {
    url: '/location',
    controller: 'locationCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'location/location.html'
  });

}
