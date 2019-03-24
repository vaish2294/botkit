const assert = require('assert');
const Botmock = require('botkit-mock');
const yourController = require('../skills/sample_hears');

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
                            text: 'typing',
                            isAssertion: true 
                        }
                    ]
                }
            ]
        ).then((message) => {
            console.log(message);
            return assert.equal(message.text, 'This message specified a 5000ms typing delay');
        })
    }).timeout(5000);;
});  
