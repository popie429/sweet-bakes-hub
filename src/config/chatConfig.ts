import { SystemMessage } from '@/types/chat';

export const INITIAL_GREETING = "Hi! I'm Sydney's Cakes AI assistant. How can I help you today?";

export const SYSTEM_MESSAGE: SystemMessage = {
  role: 'system',
  content: `You are a concise assistant for Sydney's Cakes bakery. Provide direct, brief answers to questions without additional context unless specifically asked. Here's what you know:
    - Piglet Cake ($160)
    - Don Julio Cake ($140)
    - Macaroon Cake ($80)
    - Vintage Two-Tier Cake ($210)
    - Sun & Moon Cake ($120)
    Only provide information that directly answers the user's question.`
};

export const API_CONFIG = {
  url: 'https://api.perplexity.ai/chat/completions',
  headers: {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json',
  },
  model: 'llama-3.1-sonar-small-128k-online',
  temperature: 0.2,
  max_tokens: 1000,
};