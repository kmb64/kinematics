import angular from 'angular';

// Create the module where our functionality can attach to
let teamModule = angular.module('app.team', []);

// Include our UI-Router config settings
import TeamConfig from './team.config';
teamModule.config(TeamConfig);

// Controllers
import TeamCtrl from './team.controller';
teamModule.controller('teamCtrl', TeamCtrl);


export default teamModule;
