var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var FriendView, M, View, friendTemplate, vk;
  View = require('views/View');
  friendTemplate = require('tpl!templates/friend-item.html');
  vk = require('vk');
  M = require('mediator');
  return FriendView = (function(_super) {

    __extends(FriendView, _super);

    function FriendView() {
      return FriendView.__super__.constructor.apply(this, arguments);
    }

    FriendView.prototype.className = 'friend-item';

    FriendView.prototype.tagName = 'li';

    FriendView.prototype.template = friendTemplate;

    FriendView.prototype.events = {
      'click': 'sendToFriend'
    };

    FriendView.prototype.sendToFriend = function() {
      return M.publish('friend:post', this.model);
    };

    return FriendView;

  })(View);
});
