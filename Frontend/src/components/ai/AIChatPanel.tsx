import { X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    {
      id: '1',
      role: 'ai',
      content: 'Hi! I\'m your AI career assistant. I can help you analyze this job posting, prepare for interviews, or answer questions about the role.',
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    // TODO: Implement chat functionality with backend
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-background border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-bold">AI Career Assistant</h2>
                  <p className="text-xs text-muted-foreground">Powered by advanced AI</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Placeholder message */}
              <div className="text-center py-8">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  AI analysis will load after backend integration
                </p>
                <p className="text-xs text-muted-foreground">
                  Ask me anything about this job or your career!
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-6 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 bg-muted border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Press Enter to send
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
