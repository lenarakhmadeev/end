define (require)->

	Backbone = require 'Backbone'
	ItemModel = require 'models/ItemModel'
	_ = require '_'


	class ItemsCollection extends Backbone.Collection

		model: ItemModel

		initialize: ()->
			@reset [
				# 1
				{
					name: 'rope'
					attach: 'photo180648724_293375342'
					img: 'images/rope.jpg'
					selected: true
					text: 'веревка'
				}
				# 2
				{
					name: 'knife'
					attach: 'photo180648724_293375343'
					img: 'images/knife.jpg'
					selected: false
					text: 'нож'
				}
				# 3
				{
					name: 'fire'
					attach: 'photo180648724_293375344'
					img: 'images/fire.jpg'
					selected: false
					text: 'спички'
				}
				# 4
				{
					name: 'crem'
					attach: 'photo180648724_293482368'
					img: 'images/thumbs/crem.png'
					selected: false
					text: 'кремень'
				}
				# 5
				{
					name: 'gun'
					attach: 'photo180648724_293482369'
					img: 'images/thumbs/gun.png'
					selected: false
					text: 'пистолет'
				}
				# 6
				{
					name: 'dollar'
					attach: 'photo180648724_293482691'
					img: 'images/thumbs/dollar.png'
					selected: false
					text: 'растопка'
				}
				# 7
				{
					name: 'bear'
					attach: 'photo180648724_293483032'
					img: 'images/thumbs/bear.png'
					selected: false
					text: 'Беар Гриллс'
				}
				# 8
				{
					name: 'bread'
					attach: 'photo180648724_293483338'
					img: 'images/thumbs/bread.png'
					selected: false
					text: 'сухари'
				}
				# 9
				{
					name: 'shoes'
					attach: 'photo180648724_293483588'
					img: 'images/thumbs/shoes.png'
					selected: false
					text: 'теплая обувь'
				}
				# 10
				{
					name: 'bottle'
					attach: 'photo180648724_293483830'
					img: 'images/thumbs/bottle.png'
					selected: false
					text: 'фляжка'
				}
				# 11
				{
					name: 'kettle'
					attach: 'photo180648724_293483988'
					img: 'images/thumbs/kettle.png'
					selected: false
					text: 'котелок'
				}
				# 12
				{
					name: 'light'
					attach: 'photo180648724_293484126'
					img: 'images/thumbs/light.png'
					selected: false
					text: 'фонарь'
				}
			]


		selectItem: (itemModel)->
			@getSelectedItem().set 'selected', false
			itemModel.set 'selected', true


		getSelectedItem: ()->
			_.find @models, (model)->
				model.get 'selected'
