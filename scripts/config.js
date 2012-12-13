
requirejs.config({
  deps: ['main'],
  baseUrl: 'scripts',
  paths: {
    $: 'libs/jquery-1.8.2',
    _: 'libs/lodash',
    Backbone: 'libs/backbone',
    json2: 'libs/json2',
    text: 'libs/requirejs/text',
    tpl: 'libs/requirejs/tpl',
    templates: '../templates',
    vk: 'http://vk.com/js/api/xd_connection.js?2'
  },
  map: {
    '*': {
      underscore: '_',
      backbone: 'Backbone',
      jquery: '$'
    }
  },
  shim: {
    Backbone: {
      deps: ['$', '_', 'json2'],
      exports: 'Backbone'
    },
    $: {
      exports: 'jQuery'
    },
    vk: {
      exports: 'VK'
    }
  }
});
