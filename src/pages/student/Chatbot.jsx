import React, { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Loader2 } from "lucide-react"
import ReactMarkdown from "react-markdown"

export function StudentChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Assalam o Alaikum! I'm your EduOS AI Assistant. I can help you understand your subjects, explain concepts, suggest revision topics, and answer curriculum questions. What would you like to learn today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)

  const suggestions = [
    "Explain Newton's Laws of Motion",
    "Help me revise for O-Level Chemistry",
    "What topics should I focus on for Math?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSendMessage = async (text) => {
    if (!text.trim()) return

    const newMessage = {
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue("")
    setShowSuggestions(false)
    setIsLoading(true)

    try {
      // Send the last 6 messages to maintain context
      const history = messages.slice(-6).map(m => ({ role: m.role, content: m.content }))
      
      const baseUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text, history })
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      
      setMessages(prev => [...prev, {
        role: "assistant",
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.16)-theme(spacing.12))] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
      {/* Header */}
      <div className="flex-none flex items-center gap-4 bg-gradient-to-r from-[#006B6B] to-[#008A8A] text-white p-4">
        <div className="flex items-center justify-center h-12 w-12 bg-white/20 rounded-full shrink-0">
          <Bot className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">EduOS AI Assistant</h2>
            <span className="relative flex h-2.5 w-2.5 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
          </div>
          <p className="text-sm text-white/90">Powered by Google Gemini — Curriculum Support 24/7</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 flex flex-col gap-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar */}
              <div className="shrink-0 flex items-end">
                {msg.role === 'assistant' ? (
                  <div className="h-8 w-8 bg-[#E6F4F4] rounded-full flex items-center justify-center text-lg shadow-sm border border-[#006B6B]/20">
                    🤖
                  </div>
                ) : (
                  <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                )}
              </div>

              {/* Message Bubble */}
              <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#006B6B] text-white rounded-br-sm' 
                      : 'bg-white text-gray-800 border-l-4 border-l-[#006B6B] rounded-bl-sm border border-gray-100'
                  }`}
                >
                  {msg.role === 'assistant' ? (
                    <div className="whitespace-pre-wrap leading-relaxed prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-gray-100 prose-pre:text-gray-800">
                      <ReactMarkdown>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  )}
                </div>
                <span className="text-xs text-gray-400 mt-1 px-1">{msg.timestamp}</span>
              </div>

            </div>
          </div>
        ))}

        {/* Suggestion Chips */}
        {showSuggestions && !isLoading && (
          <div className="flex flex-wrap gap-2 mt-[-16px] ml-11">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(suggestion)}
                className="bg-white border border-[#006B6B]/30 hover:bg-[#E6F4F4] text-[#006B6B] text-sm px-4 py-2 rounded-full shadow-sm transition-colors text-left"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        
        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[80%] flex-row">
              <div className="shrink-0 flex items-end">
                <div className="h-8 w-8 bg-[#E6F4F4] rounded-full flex items-center justify-center text-lg shadow-sm border border-[#006B6B]/20">
                  🤖
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="px-5 py-4 min-h-[48px] rounded-2xl shadow-sm bg-white border-l-4 border-l-[#006B6B] rounded-bl-sm border border-gray-100 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-[#006B6B]/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-[#006B6B]/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-[#006B6B]/50 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-none p-4 bg-white border-t border-gray-200">
        <div className="flex items-end gap-2 max-w-4xl mx-auto">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your subjects, request a quiz, or seek learning advice..."
            className="flex-1 max-h-32 min-h-[52px] resize-none overflow-y-auto rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-[#006B6B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#006B6B] shadow-sm"
            rows="1"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isLoading}
            className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#006B6B] text-white hover:bg-[#005a5a] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors p-3.5"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
