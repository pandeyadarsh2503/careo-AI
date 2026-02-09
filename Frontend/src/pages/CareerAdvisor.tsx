import { useState } from 'react';
import { Send, User, Briefcase, GraduationCap, TrendingUp, Sparkles } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { motion } from 'framer-motion';
import { ChatMessage } from '@/types';

export default function CareerAdvisor() {
  const user = useAuthStore(state => state.user);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: `Hi ${user?.name || 'there'}! I'm your AI career advisor. I can help you with career planning, skill development, resume tips, and much more. What would you like to discuss today?`,
      timestamp: new Date(),
    },
  ]);

  const profileData = {
    name: user?.name || 'User',
    email: user?.email || 'user@example.com',
    role: 'Full Stack Developer',
    experience: '3 years',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
    education: 'B.S. Computer Science',
  };

  const quickPrompts = [
    'How can I improve my resume?',
    'What skills should I learn next?',
    'How do I negotiate salary?',
    'Career transition advice',
  ];

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
        content: 'That\'s a great question! Let me help you with that. This is a placeholder response - in production, this would be powered by a real AI backend.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Left Sidebar - Profile */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-80 bg-card border-r border-border p-6 overflow-y-auto hidden lg:block"
      >
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="font-bold text-xl mb-1">{profileData.name}</h2>
          <p className="text-sm text-muted-foreground">{profileData.email}</p>
        </div>

        <div className="space-y-6">
          {/* Current Role */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Current Role
            </div>
            <p className="text-sm text-muted-foreground pl-6">{profileData.role}</p>
            <p className="text-xs text-muted-foreground pl-6">{profileData.experience} experience</p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              Education
            </div>
            <p className="text-sm text-muted-foreground pl-6">{profileData.education}</p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Top Skills
            </div>
            <div className="flex flex-wrap gap-2 pl-6">
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-sm">Career Score</h3>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-3xl font-bold text-gradient">85</span>
            <span className="text-sm text-muted-foreground">/100</span>
          </div>
          <p className="text-xs text-muted-foreground">
            You're doing great! Keep improving your skills.
          </p>
        </div>
      </motion.aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AI Career Advisor</h1>
              <p className="text-sm text-muted-foreground">
                Get personalized career guidance and advice
              </p>
            </div>
          </div>
        </div>

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
                className={`max-w-[70%] rounded-xl p-4 ${
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

          {/* Quick Prompts */}
          {messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-sm text-muted-foreground text-center mb-3">
                Or try one of these:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickPrompt(prompt)}
                    className="p-3 border border-border rounded-lg text-sm hover:bg-muted hover:border-primary transition-all text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about your career..."
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
            Press Enter to send • Ask me about career planning, skills, or job search strategies
          </p>
        </div>
      </div>
    </div>
  );
}
