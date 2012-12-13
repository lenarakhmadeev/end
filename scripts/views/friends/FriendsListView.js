var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var FriendView, FriendsListView, View, _;
  View = require('views/View');
  FriendView = require('views/friends/FriendView');
  _ = require('_');
  return FriendsListView = (function(_super) {

    __extends(FriendsListView, _super);

    function FriendsListView() {
      return FriendsListView.__super__.constructor.apply(this, arguments);
    }

    FriendsListView.prototype.className = 'b-friends-list';

    FriendsListView.prototype.tagName = 'ul';

    FriendsListView.prototype.initialize = function() {
      return this.collection.own.on('change:content', this.render, this);
    };

    FriendsListView.prototype._render = function() {
      var showModels;
      showModels = this.collection.own.get('content');
      return _.each(showModels, this.addOne, this);
    };

    FriendsListView.prototype.addOne = function(model) {
      var friendView;
      friendView = new FriendView({
        model: model
      });
      friendView.render();
      return this.append(friendView);
    };

    return FriendsListView;

  })(View);
});
