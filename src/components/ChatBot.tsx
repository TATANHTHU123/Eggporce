'use client';

import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Xin chào! Tôi là trợ lý EGGPORCE. Bạn muốn tìm hiểu điều gì về dự án?',
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: userText },
    ]);

    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: data.reply || 'Xin lỗi, tôi chưa có câu trả lời.',
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Xin lỗi, chatbot hiện không khả dụng.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-[90vw] max-w-[340px] h-[70vh] max-h-[520px] bg-white rounded-2xl shadow-2xl border z-50 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold">
                EGGPORCE Assistant
              </h3>
              <p className="text-xs opacity-80">
                Hỗ trợ khách hàng
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                  }`}
              >
                <div
                  className={`max-w-[75%] px-3 py-1.5 rounded-2xl ${msg.role === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-white border'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border px-3 py-1.5 rounded-2xl">
                  Đang trả lời...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
              placeholder="Hỏi về EGGPORCE..."
              className="flex-1 border rounded-lg px-3 py-1.5 text-sm outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-green-600 text-white px-4 rounded-lg text-sm"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}