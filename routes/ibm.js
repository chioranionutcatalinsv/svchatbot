const express = require('express');
const router = express.Router();
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const url = "https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/be231959-f69e-4d6e-86c3-34d08dd4c19f";
const apiKey = "480yt_I2Bo5S_WzZF5W9G5egTypV0sZZPaO5AYa5GqYE";
const assistantId = "cf3c0049-ff40-4e48-bc94-b9372c56411c";

const assistant = new AssistantV2({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: apiKey,
    }),
    url: url,
});

router.post('/textQuery/:text', async (req, res) => {
    try{
        const {text} =  req.params;

        const response = await assistant.createSession({assistantId});

        const {result} = await assistant.message({
            assistantId: assistantId,
            sessionId: response.result.session_id,
            input: {
                'message_type': 'text',
                'text': text,
            }
        });
        res.send(JSON.stringify(result, null, 2));
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;