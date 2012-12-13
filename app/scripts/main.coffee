
###
mixin

верстка

контент

bitbucket

###


define ( require )->
	# Хак, чтобы убрать из window
	_ = require( '_' ).noConflict()
	$ = require( '$' ).noConflict()
	Backbone = require( 'Backbone' ).noConflict()

	# IE delete bug
	try
		delete window._
		delete window.$
		delete window.Backbone
	catch e

	AppView = require 'views/AppView'


	appView = new AppView()
	appView.render()
	appView.$el.appendTo 'body'

