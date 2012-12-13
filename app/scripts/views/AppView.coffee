
define (require)->
	View = require 'views/View'
	appTemplate = require 'tpl!templates/app.html'

	ItemsView = require 'views/items/ItemsView'
	ItemsCollection = require 'models/ItemsCollection'

	FriendsPanelView = require 'views/friends/FriendsPanelView'
	FriendsCollection = require 'models/FriendsCollection'

	M = require 'mediator'
	vk = require 'vk'


	class AppView extends View

		className: 'b-app'

		template: appTemplate

		initialize: ()->
			@friendsCollection = new FriendsCollection()
			@friendsCollection.fetch()

			@friendsPanelView = new FriendsPanelView collection: @friendsCollection

			@itemsCollection = new ItemsCollection()
			@itemsView = new ItemsView collection: @itemsCollection

			M.subscribe 'friend:post', @postItem, this


		_render: ()->
			@append '.b-app__items-place', @itemsView
			@append '.b-app__friends-panel-place', @friendsPanelView

			@itemsView.render()
			@friendsPanelView.render()


		postItem: (friendModel)->
			itemModel = @itemsCollection.getSelectedItem()

			message = 'Очень важно иметь при себе ' + itemModel.get('text') +
			'. Отправь другу предмет через приложение: vk.com/app3293423'

			params =
				#owner_id: friendModel.get 'uid'
				message: message
				attachments: itemModel.get('attach') + ', vk.com/app3293423'

			vk.api 'wall.post', params, ()->
				# todo если ошибка, сообщить
				console.log arguments