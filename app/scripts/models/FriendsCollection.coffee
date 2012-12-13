define (require)->

	Backbone = require 'Backbone'
	vk = require 'vk'
	FriendModel = require 'models/FriendModel'
	_ = require '_'


	class FriendsCollection extends Backbone.Collection

		model: FriendModel

		initialize: ()->
			@own = new Backbone.Model
				showCount: 5


		fetch: ()->
			params =
				order: 'hints'
				fields: [
					'uid'
					'first_name'
					'last_name'
					'nickname'
					'sex'
					'bdate'
					'city'
					'country'
					'timezone'
					'photo'
					'photo_medium'
					'photo_big'
					'domain'
					'has_mobile'
					'rate'
					'contacts'
					'education'
				].join(', ')


			vk.api 'friends.get', params, (data)=>
				# todo ошибки
				@add data.response, {silent: true}

				@showModels @models


		showModels: (models)->
			end = @own.get 'showCount'
			@own.set 'content', models[0...end]


		setFriendsFilter: (text)->
			callback = (friendModel)->
				fullName = friendModel.get('first_name') + ' ' + friendModel.get('last_name')

				lowerFullName = fullName.toLowerCase()
				lowerText = text.toLowerCase()

				lowerFullName.indexOf(lowerText) + 1

			sortedFriends = @filter callback, this
			@showModels sortedFriends



