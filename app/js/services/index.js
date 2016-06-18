import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Include our UI-Router config settings
import ServicesConfig from './services.config';
servicesModule.config(ServicesConfig);

// Controllers
// import servicesCtrl from './services.controller';
// servicesModule.controller('servicesCtrl', servicesCtrl);


export default servicesModule;
