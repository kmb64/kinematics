export default function TeamConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.team', {
    url: '/team',
    controller: 'teamCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'team/team.html'
  });

}
