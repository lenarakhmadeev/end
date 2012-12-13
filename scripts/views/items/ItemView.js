var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var ItemView, View, itemTemplate;
  View = require('views/View');
  itemTemplate = require('tpl!templates/item.html');
  return ItemView = (function(_super) {

    __extends(ItemView, _super);

    function ItemView() {
      return ItemView.__super__.constructor.apply(this, arguments);
    }

    ItemView.prototype.template = itemTemplate;

    ItemView.prototype.className = 'b-item';

    ItemView.prototype.events = {
      'click': 'select'
    };

    ItemView.prototype.initialize = function() {
      return this.model.on('change:selected', this.renderSelected, this);
    };

    ItemView.prototype._render = function() {
      return this.renderSelected();
    };

    ItemView.prototype.renderSelected = function() {
      if (this.model.get('selected')) {
        return this.$el.addClass('b-item_selected');
      } else {
        return this.$el.removeClass('b-item_selected');
      }
    };

    ItemView.prototype.select = function() {
      return this.model.collection.selectItem(this.model);
    };

    return ItemView;

  })(View);
});
