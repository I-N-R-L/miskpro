.const {setGPTkey, saveGPTmessage, getGPTmessage} = require('../lib/database/gpt');
const axios = require('axios');

async function clear() {
    return await saveGPTmessage('')
}

async function interactWithAI(userPrompt) {
    try {
        let messageData = { 'messages': [] };
        const {message,key} = await getGPTmessage();
        if(!key) return '*provide a gpt key*\n*_gpt setkey* <key>_\n*example*\n_gpt setkey sk-**************yth_';
        if (message) messageData = JSON.parse(message);
        let systemMessage = "Conversation history:\n" + messageData.messages.map(m => `${m.role} [${m.timestamp}]: ${m.content}`).join("\n");
        let userMessage = "New request: " + userPrompt;
        let response = await axios({
            method: 'post',
            url: 'https://api.openai.com/v1/chat/completions',
            headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
            data: { 'model': 'gpt-3.5-turbo', 'messages': [ { "role": "system", "content": systemMessage }, { "role": "user", "content": userMessage } ] }
        });
        let timestamp = new Date().toISOString();
        messageData.messages.push({ "role": "user", "content": userPrompt, "timestamp": timestamp });
        messageData.messages.push({ "role": "assistant", "content": response.data.choices.message.content, "timestamp": timestamp });
        await saveGPTmessage(JSON.stringify(messageData, null, 2));
        return response.data//.choices[0].message.content;
    } catch (e) {
        return e?.response?.data?.error?.message ? e.response.data.error.message : e
    }
}

const GPT = {
    set: async(key)=>await setGPTkey(key),
    prompt: async(prompt) => await interactWithAI(prompt),
    clear: async() => await clear()
}
module.exports = {GPT};
