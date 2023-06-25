import React, {useState} from 'react'
import EmojiPicker from 'emoji-picker-react'

const ChatApp = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, newMessage]
      setMessages(updatedMessages)
      setNewMessage('')
    }
  }

  const handleEmojiSelect = emoji => {
    setNewMessage(newMessage + emoji)
    setShowEmojiPicker(false)
  }

  return (
    <div>
      <h1>Chat Application</h1>
      <div className="chat-container">
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
          <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            😊
          </button>
          {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiSelect} />}
        </div>
      </div>
    </div>
  )
}

export default ChatApp
