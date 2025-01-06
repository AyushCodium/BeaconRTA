import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MinusCircle } from 'lucide-react';

const Chatbot = ({ faqData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I can help you find answers about shares, bonds, IPO, and other securities. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findAnswer = (query) => {
    query = query.toLowerCase();
    let bestMatch = {
      answer: null,
      score: 0
    };

    faqData.categories.forEach(category => {
      category.sections.forEach(section => {
        section.questions.forEach(qa => {
          const questionScore = countMatches(qa.question.toLowerCase(), query);
          const answerScore = countMatches(qa.answer.toLowerCase(), query);
          const totalScore = questionScore * 2 + answerScore;

          if (totalScore > bestMatch.score) {
            bestMatch = {
              answer: {
                question: qa.question,
                answer: qa.answer,
                category: category.title,
                section: section.title
              },
              score: totalScore
            };
          }
        });
      });
    });

    return bestMatch.score > 0 ? bestMatch.answer : null;
  };

  const countMatches = (text, query) => {
    const words = query.split(' ');
    return words.reduce((count, word) => {
      return count + (text.includes(word) ? 1 : 0);
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);

    const answer = findAnswer(input);
    if (answer) {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: answer.answer,
        metadata: {
          question: answer.question,
          category: answer.category,
          section: answer.section
        }
      }]);
    } else {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I couldn't find a specific answer to that question. Could you try rephrasing it?"
      }]);
    }

    setInput('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="rts-btn btn-primary"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
      >
        <MessageSquare />
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: isMinimized ? 'auto' : '400px',
        maxWidth: '100%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}
    >
      {/* Header */}
      <div 
        className="rts-header"
        style={{
          padding: '1rem',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f26729',
          color: '#fff',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MessageSquare size={20} />
          <span>FAQ Assistant</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="rts-btn btn-primary-alta"
            style={{ padding: '4px' }}
          >
            <MinusCircle size={20} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="rts-btn btn-primary-alta"
            style={{ padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div
            style={{
              height: '400px',
              overflow: 'auto',
              padding: '1rem'
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '75%',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    backgroundColor: message.type === 'user' ? '#f26729' : '#f5f5f5',
                    color: message.type === 'user' ? '#fff' : '#333'
                  }}
                >
                  <div>{message.content}</div>
                  {message.metadata && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.8 }}>
                      <div>Category: {message.metadata.category}</div>
                      <div>Section: {message.metadata.section}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form 
            onSubmit={handleSubmit}
            style={{
              padding: '1rem',
              borderTop: '1px solid #eee'
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="rts-btn btn-primary"
                style={{
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Chatbot;