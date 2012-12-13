define (require)->
	View = require 'views/View'
	itemTemplate = require 'tpl!templates/item.html'


	class ItemView extends View

		template: itemTemplate

		className: 'b-item'

		events:
			'click': 'select'

		initialize: ()->
			@model.on 'change:selected', @renderSelected, this


		_render: ()->
			@renderSelected()


		renderSelected: ()->
			if @model.get 'selected'
				@$el.addClass 'b-item_selected'
			else
				@$el.removeClass 'b-item_selected'


		select: ()->
			@model.collection.selectItem @model
