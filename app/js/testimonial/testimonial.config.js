export default function TestimonialConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.testimonial', {
    url: '/testimonial',
    controller: 'testimonialCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'testimonial/testimonial.html'
  });

}
