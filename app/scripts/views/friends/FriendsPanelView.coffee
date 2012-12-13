define (require)->
	$ = require '$'
	_ = require '_'

	View = require 'views/View'
	FriendView = require 'views/friends/FriendView'

	friendsPanelTemplate = require 'tpl!templates/friends-panel.html'
	FriendsListView = require 'views/friends/FriendsListView'




	class FriendsPanelView extends View

		className: 'b-friends-panel'

		tagName: 'ul'

		template: friendsPanelTemplate

		events:
			'keyup .b-friends-panel__input': 'findFriends'


		initialize: ()->
			@friendsListView = new FriendsListView collection: @collection


		_render: ()->
			@append '.b-friends-panel__friends-list-place', @friendsListView
			@friendsListView.render()


		findFriends: (e)->
			text = $(e.target).val()

			@collection.setFriendsFilter text





