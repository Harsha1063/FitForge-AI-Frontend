import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';

@Injectable()
export class GroqService {
  private readonly groq: Groq;

  constructor() {
    this.groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  async generate(prompt: string): Promise<string> {
    try {
      const chatCompletion =
        await this.groq.chat.completions.create({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.7,
        });

      return (
        chatCompletion.choices[0]?.message?.content ??
        ''
      );
    } catch (error: any) {
      console.error('Groq Error:', error);

      throw new Error(
        error?.message ??
          'Unable to connect to Groq AI.'
      );
    }
  }
}