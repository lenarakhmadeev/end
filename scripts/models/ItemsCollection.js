var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, ItemModel, ItemsCollection, _;
  Backbone = require('Backbone');
  ItemModel = require('models/ItemModel');
  _ = require('_');
  return ItemsCollection = (function(_super) {

    __extends(ItemsCollection, _super);

    function ItemsCollection() {
      return ItemsCollection.__super__.constructor.apply(this, arguments);
    }

    ItemsCollection.prototype.model = ItemModel;

    ItemsCollection.prototype.initialize = function() {
      return this.reset([
        {
          name: 'rope',
          attach: 'photo180648724_293375342',
          img: 'images/rope.jpg',
          selected: true,
          text: 'веревка'
        }, {
          name: 'knife',
          attach: 'photo180648724_293375343',
          img: 'images/knife.jpg',
          selected: false,
          text: 'нож'
        }, {
          name: 'fire',
          attach: 'photo180648724_293375344',
          img: 'images/fire.jpg',
          selected: false,
          text: 'спички'
        }, {
          name: 'crem',
          attach: 'photo180648724_293482368',
          img: 'images/thumbs/crem.png',
          selected: false,
          text: 'кремень'
        }, {
          name: 'gun',
          attach: 'photo180648724_293482369',
          img: 'images/thumbs/gun.png',
          selected: false,
          text: 'пистолет'
        }, {
          name: 'dollar',
          attach: 'photo180648724_293482691',
          img: 'images/thumbs/dollar.png',
          selected: false,
          text: 'растопка'
        }, {
          name: 'bear',
          attach: 'photo180648724_293483032',
          img: 'images/thumbs/bear.png',
          selected: false,
          text: 'Беар Гриллс'
        }, {
          name: 'bread',
          attach: 'photo180648724_293483338',
          img: 'images/thumbs/bread.png',
          selected: false,
          text: 'сухари'
        }, {
          name: 'shoes',
          attach: 'photo180648724_293483588',
          img: 'images/thumbs/shoes.png',
          selected: false,
          text: 'теплая обувь'
        }, {
          name: 'bottle',
          attach: 'photo180648724_293483830',
          img: 'images/thumbs/bottle.png',
          selected: false,
          text: 'фляжка'
        }, {
          name: 'kettle',
          attach: 'photo180648724_293483988',
          img: 'images/thumbs/kettle.png',
          selected: false,
          text: 'котелок'
        }, {
          name: 'light',
          attach: 'photo180648724_293484126',
          img: 'images/thumbs/light.png',
          selected: false,
          text: 'фонарь'
        }, {
          name: 'condom',
          attach: 'photo180648724_293484654',
          img: 'images/thumbs/condom.png',
          selected: false,
          text: 'защита от комаров'
        }, {
          name: 'axe',
          attach: 'photo180648724_293484875',
          img: 'images/thumbs/axe.png',
          selected: false,
          text: 'топор'
        }, {
          name: 'sleep',
          attach: 'photo180648724_293485057',
          img: 'images/thumbs/sleep.png',
          selected: false,
          text: 'спальный мешок'
        }
      ]);
    };

    ItemsCollection.prototype.selectItem = function(itemModel) {
      this.getSelectedItem().set('selected', false);
      return itemModel.set('selected', true);
    };

    ItemsCollection.prototype.getSelectedItem = function() {
      return _.find(this.models, function(model) {
        return model.get('selected');
      });
    };

    return ItemsCollection;

  })(Backbone.Collection);
});
