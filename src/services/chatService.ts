import { Message, SystemMessage, ChatMessage } from '@/types/chat';
import { SYSTEM_MESSAGE, API_CONFIG } from '@/config/chatConfig';

export const sendChatMessage = async (userMessage: string, messages: Message[]): Promise<string> => {
  const apiMessages: (SystemMessage | ChatMessage)[] = [SYSTEM_MESSAGE];
  
  const chatMessages = messages.filter(msg => msg.role !== 'system');
  const startIndex = chatMessages[0]?.role === 'assistant' ? 1 : 0;
  
  for (let i = startIndex; i < chatMessages.length; i++) {
    const currentMsg = chatMessages[i];
    if (i === startIndex || 
        (apiMessages[apiMessages.length - 1].role === 'system' && currentMsg.role === 'user') ||
        (apiMessages[apiMessages.length - 1].role === 'user' && currentMsg.role === 'assistant') ||
        (apiMessages[apiMessages.length - 1].role === 'assistant' && currentMsg.role === 'user')) {
      apiMessages.push({
        role: currentMsg.role as 'user' | 'assistant',
        content: currentMsg.content
      });
    }
  }

  if (apiMessages[apiMessages.length - 1].role !== 'user') {
    apiMessages.push({ role: 'user', content: userMessage });
  }

  const response = await fetch(API_CONFIG.url, {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      model: API_CONFIG.model,
      messages: apiMessages,
      temperature: API_CONFIG.temperature,
      max_tokens: API_CONFIG.max_tokens
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('API Error:', errorData);
    throw new Error(errorData.error?.message || 'Failed to get response from AI');
  }

  const data = await response.json();
  
  if (data.choices && data.choices[0]?.message?.content) {
    return data.choices[0].message.content;
  }
  
  throw new Error('Invalid response format from AI');
};