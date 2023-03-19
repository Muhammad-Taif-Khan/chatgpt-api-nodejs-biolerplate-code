import { OpenAIApi, Configuration } from "openai";
import {config} from "dotenv"
config();

const configuration = new Configuration({
    apiKey:process.env.OPENAIKEY ,
});


const openai = new OpenAIApi(configuration);

openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages:[
        {
            role:'system',
            content:"You are an informative assistant."

        },
        {
            role:"user",
            content:"how are you?"
        }
    ]
}).then(resp =>{
    console.log(resp.data.choices[0].message.content);
})