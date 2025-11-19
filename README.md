# WebWhisper 🎙️

> An intelligent AI-powered assistant that combines real-time speech recognition with advanced web automation capabilities to help you search, shop, and interact with the web using natural language.

## 🌟 Overview

WebWhisper is a modern full-stack web application that bridges voice commands with AI-powered web automation. It uses speech-to-text technology powered by OpenAI's Whisper model, AI conversation capabilities via Google Gemini, and automated browser control through Selenium to perform tasks on your behalf - from web searches to online shopping.

## ✨ Key Features

### 🎤 **Speech Recognition**
- Real-time speech-to-text conversion using Whisper AI
- Support for 50+ languages including English, Spanish, Chinese, German, French, and many more
- Multiple audio input options: microphone recording, file upload, or URL
- High-accuracy transcription with quantized model support for mobile devices

### 🤖 **AI-Powered Conversations**
- Intelligent responses powered by Google Gemini AI
- Context-aware conversations with message history
- Natural language understanding for complex queries
- WebSocket-based real-time communication

### 🌐 **Web Automation**
- Automated web searching using DuckDuckGo
- Browser automation with Selenium WebDriver
- Ability to interact with websites, fill forms, and extract information
- E-commerce integration (eBay and more)

### 💬 **Interactive Chat Interface**
- Clean, modern UI with real-time message updates
- Support for both text and voice input
- Message history and conversation management
- Loading states and action feedback

### 🔐 **User Authentication**
- Secure authentication via Kinde Auth
- User profile management
- Personalized experience with conversation history

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (73.3%), JavaScript (25.7%)
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives + shadcn/ui
- **State Management**: React Hooks, TanStack Query
- **Speech Processing**: Xenova Transformers.js (Whisper)

### Backend
- **Runtime**: Node.js
- **API Layer**: tRPC for type-safe APIs
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: WebSocket server (ws)
- **AI/ML**: 
  - Google Generative AI (Gemini)
  - OpenAI Whisper (via Transformers.js)
  - ElevenLabs (Text-to-Speech)
- **Web Automation**: Selenium WebDriver
- **Web Scraping**: JSDOM, duck-duck-scrape

## 📋 Prerequisites

- **Node.js** 16.x or higher
- **npm** 9.x or higher
- **PostgreSQL** database
- **API Keys**:
  - Google Gemini API key
  - Kinde Auth credentials
  - ElevenLabs API key (optional, for TTS)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/greywarden07/WebWhisper.git
cd WebWhisper
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/webwhisper"

# Kinde Authentication
KINDE_CLIENT_ID="your_kinde_client_id"
KINDE_CLIENT_SECRET="your_kinde_client_secret"
KINDE_ISSUER_URL="https://your-domain.kinde.com"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000"

# AI Services
GEMINI_API_KEY="your_gemini_api_key"
ELEVENLABS_API_KEY="your_elevenlabs_api_key"
```

### 4. Set Up Database
```bash
npm run db:push
```

### 5. Run the Application

**Start the WebSocket Server** (Terminal 1):
```bash
npm start
```

**Start the Next.js Development Server** (Terminal 2):
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📖 Usage Guide

### Using Voice Input

1. **Click the microphone button** to activate speech recognition
2. **Speak your query** - the app transcribes in real-time
3. **AI processes your request** and can perform actions like:
   - Answering questions
   - Searching the web
   - Finding products on e-commerce sites
   - Navigating websites

### Using Text Input

1. Type your message in the text area
2. Press Enter or click Send
3. The AI assistant responds and takes actions as needed

### Available Commands

The AI can understand natural language requests such as:
- "Search for the best laptops under $1000"
- "Find a wheelchair on eBay under 100 dollars"
- "What's the weather like today?"
- "Tell me about [any topic]"

## 📂 Project Structure

```
WebWhisper/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── whisper/           # Speech recognition components
│   │   ├── ui/                # UI components (shadcn/ui)
│   │   ├── ChatInput.tsx      # Main chat interface
│   │   ├── Header.tsx         # Navigation header
│   │   └── Profile.tsx        # User profile
│   ├── hooks/                 # Custom React hooks
│   │   └── useTranscriber.ts  # Whisper transcription hook
│   ├── server/                # Backend server code
│   │   ├── server.cjs         # WebSocket server
│   │   ├── llm.cjs            # LLM interface
│   │   ├── scraper.cjs        # Web scraping utilities
│   │   └── utils.cjs          # Server utilities
│   ├── trpc/                  # tRPC API routes
│   ├── utils/                 # Utility functions
│   └── db.ts                  # Database client
├── .env.example               # Environment variables template
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript configuration
```

## 🔑 Core Components

### Speech Recognition (Whisper)
- Uses Xenova Transformers.js for client-side inference
- Supports multiple models (tiny, base, small, medium)
- Configurable language and task (transcribe/translate)

### WebSocket Server
- Runs on port 6969 by default
- Handles bidirectional communication between client and AI
- Message types: `msg` (chat), `info` (status), `action` (automation), `complete` (done)

### LLM Interface
- Manages conversation with Google Gemini
- Parses AI responses for actions
- Executes system calls and web automation

### Browser Automation
- Selenium WebDriver for browser control
- Can navigate, click, fill forms, and extract data
- Supports multiple websites and platforms

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start WebSocket server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run db:push      # Push database schema
npm run db:studio    # Open Prisma Studio
```

## 🌐 Deployment

### Prerequisites for Production
- PostgreSQL database
- Node.js hosting platform (Vercel, Railway, etc.)
- Chrome/Chromium for Selenium (if using browser automation)

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Note**: The WebSocket server needs to be deployed separately on a platform that supports long-running processes (e.g., Railway, Render, or a VPS).

## 🛡️ Security Considerations

- Never commit `.env` files with real credentials
- Use environment variables for all sensitive data
- Implement rate limiting for AI API calls
- Validate and sanitize all user inputs
- Keep dependencies updated regularly

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**greywarden07**
- GitHub: [@greywarden07](https://github.com/greywarden07)

## 🙏 Acknowledgments

- [OpenAI Whisper](https://openai.com/research/whisper) for speech recognition
- [Google Gemini](https://deepmind.google/technologies/gemini/) for AI capabilities
- [Xenova Transformers.js](https://huggingface.co/docs/transformers.js) for browser-based ML
- [Next.js](https://nextjs.org/) team for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Kinde](https://kinde.com/) for authentication services

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub Issues](https://github.com/greywarden07/WebWhisper/issues)
- Check existing issues for solutions

## 🗺️ Roadmap

- [ ] Add support for more e-commerce platforms
- [ ] Implement conversation history export
- [ ] Add multi-language UI support
- [ ] Enhance browser automation capabilities
- [ ] Add voice output (TTS) integration
- [ ] Mobile app version

---

**Built with ❤️ using Next.js, TypeScript, and AI**

⭐ Star this repository if you find it useful!
