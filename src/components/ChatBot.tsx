'use client';

import { useState } from 'react';

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

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text: userText,
      },
    ]);

    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text:
            data.reply ||
            'Xin lỗi, tôi chưa có câu trả lời.',
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text:
            'Xin lỗi, chatbot hiện không khả dụng.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Nút mở chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-600 text-white shadow-xl hover:scale-110 transition"
        >
          💬
        </button>
      )}

      {/* Khung chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-white rounded-3xl shadow-2xl border z-50 overflow-hidden flex flex-col">

          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                EGGPORCE Assistant
              </h3>
              <p className="text-xs opacity-80">
                Hỗ trợ khách hàng
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl"
            >
              ×
            </button>
          </div>

          {/* Tin nhắn */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.role === 'user'
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
                <div className="bg-white border px-4 py-2 rounded-2xl">
                  Đang trả lời...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-4 flex gap-2">
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
              placeholder="Hỏi về EGGPORCE..."
              className="flex-1 border rounded-xl px-3 py-2 outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-green-600 text-white px-5 rounded-xl"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}