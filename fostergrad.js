if (Meteor.isClient) {

}

//Sign Up Page
Router.route('/', function () {
  this.render('signUp');
});

//Sign In Page
Router.route('/signIn', function () {
  this.render('signIn');
});

//About Page
Router.route('/about', function () {
  this.render('about');
});

//Contact Page
Router.route('/contact', function () {
  this.render('contact');
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}