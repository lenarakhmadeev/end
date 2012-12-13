var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, FriendView, FriendsListView, FriendsPanelView, View, friendsPanelTemplate, _;
  $ = require('$');
  _ = require('_');
  View = require('views/View');
  FriendView = require('views/friends/FriendView');
  friendsPanelTemplate = require('tpl!templates/friends-panel.html');
  FriendsListView = require('views/friends/FriendsListView');
  return FriendsPanelView = (function(_super) {

    __extends(FriendsPanelView, _super);

    function FriendsPanelView() {
      return FriendsPanelView.__super__.constructor.apply(this, arguments);
    }

    FriendsPanelView.prototype.className = 'b-friends-panel';

    FriendsPanelView.prototype.tagName = 'ul';

    FriendsPanelView.prototype.template = friendsPanelTemplate;

    FriendsPanelView.prototype.events = {
      'keyup .b-friends-panel__input': 'findFriends'
    };

    FriendsPanelView.prototype.initialize = function() {
      return this.friendsListView = new FriendsListView({
        collection: this.collection
      });
    };

    FriendsPanelView.prototype._render = function() {
      this.append('.b-friends-panel__friends-list-place', this.friendsListView);
      return this.friendsListView.render();
    };

    FriendsPanelView.prototype.findFriends = function(e) {
      var text;
      text = $(e.target).val();
      return this.collection.setFriendsFilter(text);
    };

    return FriendsPanelView;

  })(View);
});
