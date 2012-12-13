requirejs.config
	# Начальная точка приложения
	deps: [ 'main' ]

	baseUrl: 'scripts'

	paths:
		# Библиотеки
		$: 'libs/jquery-1.8.2'
		# http://lodash.com/
		_: 'libs/lodash'
		# http://backbonejs.ru/
		Backbone: 'libs/backbone'
		json2: 'libs/json2'

		# Плагины requirejs
		text: 'libs/requirejs/text'
		tpl: 'libs/requirejs/tpl'

		# Путь к шаблонам
		templates: '../templates'

		# Библиотека vk.com API для iframe приложений
		vk: 'http://vk.com/js/api/xd_connection.js?2'

	map:
		# Синонимы
		'*':
			underscore: '_'
			backbone: 'Backbone'
			jquery: '$'

	# Загрузка не AMD модулей
	shim:
		Backbone:
			deps: [ '$', '_', 'json2' ]
			exports: 'Backbone'

		$:
			exports: 'jQuery'

		vk:
			exports: 'VK'