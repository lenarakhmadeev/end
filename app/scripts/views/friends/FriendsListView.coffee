define (require)->

	View = require 'views/View'
	FriendView = require 'views/friends/FriendView'
	_ = require '_'


	class FriendsListView extends View

		className: 'b-friends-list'

		tagName: 'ul'

		initialize: ()->
			@collection.own.on 'change:content', @render, this


		_render: ()->
			showModels = @collection.own.get 'content'

			_.each showModels, @addOne, this


		addOne: (model)->
			friendView = new FriendView model: model
			friendView.render()

			@append friendView