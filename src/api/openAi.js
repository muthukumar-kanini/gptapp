import axios from "axios";

const client = axios.create({
  headers: {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json",
  },
});


    const chatGptEndPoint = "https://api.openai.com/v1/chat/completions";

export const apiCall = async (prompt, messages) => {
  try {
    const res = await client.post(chatGptEndPoint, {
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: `Does this message want to generate an AI picture, image, art, or anything similar? ${prompt}. Simply answer with a yes or no.`
      }],
    });
    console.log(res.data);
  } catch (err) {
    console.log("error:", err);
    return Promise.resolve({ success: false, msg: err.message });
  }
};