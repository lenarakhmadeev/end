define (require)->
	View = require 'views/View'
	_ = require '_'
	ItemView = require 'views/items/ItemView'


	class ItemsView extends View

		className: 'b-items-list'

		initialize: ()->


		_render: ()->
			_.each @collection.models, @addOne, this


		addOne: (model)->
			itemView = new ItemView model: model
			itemView.render()

			@append itemView
