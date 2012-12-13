var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var ItemView, ItemsView, View, _;
  View = require('views/View');
  _ = require('_');
  ItemView = require('views/items/ItemView');
  return ItemsView = (function(_super) {

    __extends(ItemsView, _super);

    function ItemsView() {
      return ItemsView.__super__.constructor.apply(this, arguments);
    }

    ItemsView.prototype.className = 'b-items-list';

    ItemsView.prototype.initialize = function() {};

    ItemsView.prototype._render = function() {
      return _.each(this.collection.models, this.addOne, this);
    };

    ItemsView.prototype.addOne = function(model) {
      var itemView;
      itemView = new ItemView({
        model: model
      });
      itemView.render();
      return this.append(itemView);
    };

    return ItemsView;

  })(View);
});
