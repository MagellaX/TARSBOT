import { Message } from '@prisma/client';
import { MessageContentBlock } from '@tars/shared';

export interface TARSAgentResponse {
  contentBlocks: MessageContentBlock[];
  tokenUsage: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
}

export interface TARSAgentService {
  generateMessage(
    systemPrompt: string,
    messages: Message[],
    model: string,
    useTools: boolean,
    signal?: AbortSignal,
  ): Promise<TARSAgentResponse>;
}

export interface TARSAgentModel {
  provider: 'anthropic' | 'openai' | 'google' | 'proxy';
  name: string;
  title: string;
  contextWindow?: number;
}

export class TARSAgentInterrupt extends Error {
  constructor() {
    super('TARSAgentInterrupt');
    this.name = 'TARSAgentInterrupt';
  }
}
