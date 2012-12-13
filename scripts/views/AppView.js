var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var AppView, FriendsCollection, FriendsPanelView, ItemsCollection, ItemsView, M, View, appTemplate, vk;
  View = require('views/View');
  appTemplate = require('tpl!templates/app.html');
  ItemsView = require('views/items/ItemsView');
  ItemsCollection = require('models/ItemsCollection');
  FriendsPanelView = require('views/friends/FriendsPanelView');
  FriendsCollection = require('models/FriendsCollection');
  M = require('mediator');
  vk = require('vk');
  return AppView = (function(_super) {

    __extends(AppView, _super);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.className = 'b-app';

    AppView.prototype.template = appTemplate;

    AppView.prototype.initialize = function() {
      this.friendsCollection = new FriendsCollection();
      this.friendsCollection.fetch();
      this.friendsPanelView = new FriendsPanelView({
        collection: this.friendsCollection
      });
      this.itemsCollection = new ItemsCollection();
      this.itemsView = new ItemsView({
        collection: this.itemsCollection
      });
      return M.subscribe('friend:post', this.postItem, this);
    };

    AppView.prototype._render = function() {
      this.append('.b-app__items-place', this.itemsView);
      this.append('.b-app__friends-panel-place', this.friendsPanelView);
      this.itemsView.render();
      return this.friendsPanelView.render();
    };

    AppView.prototype.postItem = function(friendModel) {
      var itemModel, message, params;
      itemModel = this.itemsCollection.getSelectedItem();
      message = 'После конца света пригодится ' + itemModel.get('text') + '. Отправь другу предмет через приложение: vk.com/app3293423 Спеши, осталось не долго!';
      params = {
        owner_id: friendModel.get('uid'),
        message: message,
        attachments: itemModel.get('attach') + ', vk.com/app3293423'
      };
      return vk.api('wall.post', params, function() {
        return console.log(arguments);
      });
    };

    return AppView;

  })(View);
});
