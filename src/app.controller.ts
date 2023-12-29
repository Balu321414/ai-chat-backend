import { Controller, Post, Body } from '@nestjs/common';

@Controller('api/chat')
export class ChatController {
  @Post()
  getResponse(@Body('userMessage') userMessage: string): string {
    const lowercasedMessage = userMessage.toLowerCase();

    if (lowercasedMessage.includes('hi')) {
      return 'Hello! How can I help you?';
    } else if (lowercasedMessage.includes('how are you')) {
      return 'I am just a computer program, but I am functioning well. Thanks for asking!';
    } else if (lowercasedMessage.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'I did not understand that. Can you please rephrase?';
    }
  }
}

