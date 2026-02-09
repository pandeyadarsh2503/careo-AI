import { Send, Mic, MicOff } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from '@/types';

export default function InterviewPanel() {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Hello! I\'m your AI interviewer. I\'ll be conducting this interview based on the role and level you selected. Ready to begin?',
      timestamp: new Date(),
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');

    // Mock AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: 'That\'s a great answer! Let me ask you another question...',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-4 ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-muted text-foreground border border-border'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              <p className="text-xs opacity-70 mt-2">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-border bg-muted/30">
        <div className="flex gap-2">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`p-3 rounded-lg transition-all ${
              isRecording
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your answer..."
            className="flex-1 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Press Enter to send • Click mic to toggle voice input
        </p>
      </div>
    </div>
  );
}
