// const assert = require('assert');
// const Botmock = require('botkit-mock');
// const yourController = require('../skills/unhandled_messages');

// describe("controller tests", ()=>{
//     afterEach(() => {
//         //clean up botkit tick interval
//         this.controller.shutdown();
//     });

//     beforeEach((done) => {
//         this.userInfo = {
//             slackId: 'user123',
//             channel: 'channel123'
//         };

//         this.controller = Botmock({
//             debug: false,
//         });

//         this.bot = this.controller.spawn( ); 
        

//         yourController(this.controller);
//         done();
//     });
//     it('should return', () => {
//         return this.bot.usersInput(
//             [
//                 {
//                     type: 'message_received', //if type null, default to direct_message
//                     user: this.userInfo.slackId, //user required for each direct message
//                     channel: this.userInfo.channel, // user channel required for direct message
//                     messages: [
//                         {
//                             text: 'help',
//                             isAssertion: true 
//                         }
//                     ]
//                 }
//             ]
//         ).then((message) => {
//             console.log(message);
//             return assert.equal(message.text, 'I do not know how to respond to that message yet.  Define new features by adding skills in my `skills/` folder.  [Read more about building skills](https://github.com/howdyai/botkit-starter-web/blob/master/docs/how_to_build_skills.md).\n\n(This message is from the unhandled_messages skill.');
//         })
//     })
// });  
