const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const url = "https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/be231959-f69e-4d6e-86c3-34d08dd4c19f";
const apiKey = "480yt_I2Bo5S_WzZF5W9G5egTypV0sZZPaO5AYa5GqYE";

const assistant = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: apiKey,
  }),
  url: url,
});

module.exports ={
  assistant
}