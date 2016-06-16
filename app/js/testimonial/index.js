import angular from 'angular';

// Create the module where our functionality can attach to
let testimonialModule = angular.module('app.testimonial', []);

// Include our UI-Router config settings
import TestimonialConfig from './testimonial.config';
testimonialModule.config(TestimonialConfig);

// Controllers
import TestimonialCtrl from './testimonial.controller';
testimonialModule.controller('testimonialCtrl', TestimonialCtrl);


export default testimonialModule;
