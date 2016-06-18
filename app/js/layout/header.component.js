class AppHeaderCtrl {
  constructor(AppConstants, $rootScope) {
    'ngInject';

    this.pageTitle = $rootScope.pageTitle;

    $rootScope.$on('$stateChangeSuccess', () => {
      this.pageTitle = $rootScope.pageTitle;
    });

    this.appName = AppConstants.appName;

  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
