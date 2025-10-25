import { useState, useRef, useEffect } from 'react';
import { useStore } from '../store/useStore';
import clsx from 'clsx';

export const Chat = () => {
  const { messages, sendMessage } = useStore();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl flex flex-col h-full shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-2">
        <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <h2 className="text-base font-semibold text-text-dark">Career Advisor</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={clsx(
              'flex',
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={clsx(
                'max-w-[80%] px-4 py-2.5 text-sm leading-relaxed',
                message.sender === 'user'
                  ? 'bg-primary-navy text-white rounded-2xl rounded-br-md'
                  : 'bg-gray-100 text-text-dark rounded-2xl rounded-bl-md'
              )}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 bg-white rounded-b-xl">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your career path..."
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
              text-sm focus:outline-none focus:border-primary-navy focus:bg-white transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-11 h-11 bg-primary-navy text-white rounded-xl
              flex items-center justify-center hover:bg-opacity-90 transition-all
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
