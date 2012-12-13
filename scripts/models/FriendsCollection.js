var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, FriendModel, FriendsCollection, vk, _;
  Backbone = require('Backbone');
  vk = require('vk');
  FriendModel = require('models/FriendModel');
  _ = require('_');
  return FriendsCollection = (function(_super) {

    __extends(FriendsCollection, _super);

    function FriendsCollection() {
      return FriendsCollection.__super__.constructor.apply(this, arguments);
    }

    FriendsCollection.prototype.model = FriendModel;

    FriendsCollection.prototype.initialize = function() {
      return this.own = new Backbone.Model({
        showCount: 5
      });
    };

    FriendsCollection.prototype.fetch = function() {
      var params,
        _this = this;
      params = {
        order: 'hints',
        fields: ['uid', 'first_name', 'last_name', 'nickname', 'sex', 'bdate', 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'domain', 'has_mobile', 'rate', 'contacts', 'education'].join(', ')
      };
      return vk.api('friends.get', params, function(data) {
        _this.add(data.response, {
          silent: true
        });
        return _this.showModels(_this.models);
      });
    };

    FriendsCollection.prototype.showModels = function(models) {
      var end;
      end = this.own.get('showCount');
      return this.own.set('content', models.slice(0, end));
    };

    FriendsCollection.prototype.setFriendsFilter = function(text) {
      var callback, sortedFriends;
      callback = function(friendModel) {
        var fullName, lowerFullName, lowerText;
        fullName = friendModel.get('first_name') + ' ' + friendModel.get('last_name');
        lowerFullName = fullName.toLowerCase();
        lowerText = text.toLowerCase();
        return lowerFullName.indexOf(lowerText) + 1;
      };
      sortedFriends = this.filter(callback, this);
      return this.showModels(sortedFriends);
    };

    return FriendsCollection;

  })(Backbone.Collection);
});
