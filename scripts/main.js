/*
mixin

верстка

контент

bitbucket
*/

define(function(require) {
  var $, AppView, Backbone, appView, _;
  _ = require('_').noConflict();
  $ = require('$').noConflict();
  Backbone = require('Backbone').noConflict();
  try {
    delete window._;
    delete window.$;
    delete window.Backbone;
  } catch (e) {

  }
  AppView = require('views/AppView');
  appView = new AppView();
  appView.render();
  return appView.$el.appendTo('body');
});
