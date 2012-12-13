define (require)->

	Backbone = require 'Backbone'
	ItemModel = require 'models/ItemModel'
	_ = require '_'


	class ItemsCollection extends Backbone.Collection

		model: ItemModel

		initialize: ()->
			@reset [
				{
					name: 'rope'
					attach: 'photo180648724_293375342'
					img: 'images/rope.jpg'
					selected: true
					text: 'веревка'
				}
				{
					name: 'knife'
					attach: 'photo180648724_293375343'
					img: 'images/knife.jpg'
					selected: false
					text: 'нож'
				}
				{
					name: 'fire'
					attach: 'photo180648724_293375344'
					img: 'images/fire.jpg'
					selected: false
					text: 'спички'
				}
			]


		selectItem: (itemModel)->
			@getSelectedItem().set 'selected', false
			itemModel.set 'selected', true


		getSelectedItem: ()->
			_.find @models, (model)->
				model.get 'selected'
