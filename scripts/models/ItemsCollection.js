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
