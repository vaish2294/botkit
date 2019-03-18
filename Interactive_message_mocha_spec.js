'use strict';
const assert = require('assert');
const Botmock = require('../../../lib/Botmock');
const fileBeingTested = require('../skills/interactve_messages');

describe('interactive_message_callback', function () {
	afterEach(function () {
		this.controller.shutdown();
	});
	

		
		this.controller = Botmock({
			stats_optout: true,
			debug: false,
		});
		
		this.bot = this.controller.spawn({
			type: 'botkit anywhere',
		});
		
		fileBeingTested(this.controller);
	});
	
	describe('action match /^action$/', function () {
		beforeEach(function () {
			// add action
			this.controller.on('test', function (bot, message) {
				bot.reply(message, 'Hello human! I am brand new Botkit bot, ready to be customized to your needs!');
			});
			
			//this.sequence = [
//{
					//type: 'interactive_message_callback', //if type null, default to direct_message
					
					//channel: this.userInfo.channel_join, // user channel required for direct message
					//messages: [
						//{
							//actions: [{
								//name: 'say',
								//value: 'say'
							//}],
							//user: {
								//id: 'some user id',
							//},
							//attachments: [],
							//original_message: {
								//attachments: [],
							//},
							//isAssertion: true,
						//}
					//]
				//}
			//];
		//});
		
		it('should visit tests event and bot reply hello', function () {
			this.sequence = [
				{
					type: 'interactive_message_callback', //if type null, default to direct_message
					
					channel: this.userInfo.channel, // user channel required for direct message
					messages: [
						{
							actions: [{
								name: 'action',
								value: 'test'
							}],
							isAssertion: true,
						}
					]
				}
			];
			
			return this.bot.usersInput(this.sequence).then((message) => {
				return assert.equal(
					message.text,
					'hello'
				);
			});
		});
	});
	
	describe('action match /^say/', function () {
		beforeEach(function () {
			// add action
			this.controller.on('message', function (bot, message) {
				bot.reply(message, 'hello');
			});
			
		
		
		it('should visit tests event and bot reply hello', function () {
			return this.bot.usersInput(this.sequence).then((message) => {
				return assert.equal(
					message.text,
					'hello'
				);
			});
		});
		
		it('should add in api log replyInteractive with correct text', function () {
			return this.bot.usersInput(this.sequence).then((message) => {
				return this.bot.usersInput(this.sequence).then((message) => {
					var e = this.bot.api.logByKey['replyInteractive'][0];
					e.json.attachments[0];
					return assert.equal(
						e.json.attachments[0].text,
						'<@some user id> said, say'
					);
				});
			});
		});
	});
	
});
