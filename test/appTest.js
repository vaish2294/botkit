// // const botMock = require('botkit-testing');
// const Botmock = require('botkit-mock');
// const testedFile = require("../skills/sample_hears"); 
// // const testedFile = require("../skills/unhandled_messages")
// const assert = require('assert');
 
// describe("simple controller",() => {
//   // beforeEach((done) => {
//   //   testedFile( botMock.controller);
//   //   done();
//   // });
//   beforeEach((done)=>{
//     this.controller = Botmock({});
//     // type can be ‘slack’, facebook’, or null
//     this.bot = this.controller.spawn({});
//     testedFile(this.controller);
//     done(); 
// }); 


 
//   // it('hello', (done) => {
//   //   this.controller.testRunner.human('test')
//   //     .bot('I heard a test')
//   //     .start(done)
//   //   ;
//   // });
//   it('test should return I heard a test ', function () {
//     return this.bot.usersInput('test').then((message) => {
//       return assert.equal(
//         message.text,
//         'I heard a test'
//       );
//     });
//   })

//   // describe('user does not exist in memory storage', function () {
//     // ;
//   // });


// });









// // const botMock = require('botkit-testing');
// // const testedFile = require("../skills/_connection_events");
// // const assert = require('assert');

// // describe("simple controller",() => {
// //   // beforeEach((done) => {
// //   //   testedFile(botMock.bot, botMock.controller);
// //   //   done();
// //   // });
   
// //   beforeEach(()=>{
// //     this.controller = botMock.create();
// //     // type can be ‘slack’, facebook’, or null
// //     this.bot = this.controller.spawn({type: null});
// //     testedFile(this.controller);
// // });
  
// //   it('should return help message ', () => {
// //     return this.bot.usersInput(
// //         [
// //             {
// //                 user: 'hello',
// //                 channel: 'someChannel',
// //                 messages: [
// //                     {
// //                         text: 'Hello human! I am brand new Botkit bot, ready to be customized to your needs!', isAssertion: true
// //                     }
// //                 ]
// //             }
// //         ]
// //     ).then((message) => {
// //         // In message, we receive a full object that includes params:
// //         // {
// //         //    user: 'someUserId',
// //         //    channel: 'someChannel',
// //         //    text: 'help message',
// //         // }
// //         return assert.equal(message.text, 'help message');
// //     })
// // });
// //   // it('hi bot', (done) => {
// //   //   botMock.testRunner
// //   //     .human('hi bot')
// //   //     .bot('hi human')
// //   //     .bot('How are you?')
// //   //     .human('fine thanks you, and you?')
// //   //     .bot('fine thanks')
// //   //     .start(done)
// //   //   ;
// //   // });npm run test
// // }); 





const assert = require('assert');
const Botmock = require('botkit-mock');
const yourController = require('../skills/_connection_events');

describe("controller tests", ()=>{
    afterEach(() => {
        //clean up botkit tick interval
        this.controller.shutdown();
    });

    beforeEach((done) => {
        this.userInfo = {
            slackId: 'user123',
            channel: 'channel123'
        };

        this.controller = Botmock({
            debug: false,
        });

        this.bot = this.controller.spawn( ); 
        

        yourController(this.controller);
        done();
    });
    it('should return', () => {
        return this.bot.usersInput(
            [
                {
                    type: 'message_received', //if type null, default to direct_message
                    user: this.userInfo.slackId, //user required for each direct message
                    channel: this.userInfo.channel, // user channel required for direct message
                    messages: [
                        {
                            text: 'help',
                            isAssertion: true 
                        }
                    ]
                }
            ]
        ).then((message) => {
            console.log(message);
            return assert.equal(message.text, 'I can point you to resources, and connect you with experts who can help.');
        })
    }).timeout(10000);;
});  




 



