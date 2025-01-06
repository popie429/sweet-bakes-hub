export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface SystemMessage {
  role: 'system';
  content: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}