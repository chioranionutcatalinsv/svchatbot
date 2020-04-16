
const assistantId = "cf3c0049-ff40-4e48-bc94-b9372c56411c";
const {assistant} = require('./assistant');


async function createSession(){
  const response = await assistant.createSession({assistantId})
  return response.result.session_id;

}

async function createMessage(textMessage){
  const sessionId = await createSession();
  const response = await assistant.message({
    assistantId: assistantId,
    sessionId: sessionId,
    input: {
      'message_type': 'text',
      'text': textMessage
      }
    });
  return JSON.stringify(response.result, null, 2);
}

module.exports = {
  createMessage
}