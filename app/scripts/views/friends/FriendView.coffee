define (require)->
	View = require 'views/View'
	friendTemplate = require 'tpl!templates/friend-item.html'
	vk = require 'vk'
	M = require 'mediator'


	class FriendView extends View

		className: 'friend-item'

		tagName: 'li'

		template: friendTemplate

		events:
			'click': 'sendToFriend'


		sendToFriend: ()->
			M.publish 'friend:post', @model

