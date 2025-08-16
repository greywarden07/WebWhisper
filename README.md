# WebWhisper 🎙️

A modern web application for real-time speech recognition and AI-powered conversation, built with Next.js and TypeScript.

## 🚀 Features

- **Real-time Speech Recognition**: Convert speech to text using Web Speech API
- **AI-Powered Conversations**: Integrated with Google Gemini for intelligent responses
- **Modern UI**: Clean and responsive interface built with React
- **TypeScript Support**: Full type safety throughout the application
- **Fast Performance**: Optimized with Next.js for superior user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript (73.3%), JavaScript (25.7%)
- **Styling**: CSS (1%)
- **AI Integration**: Google Gemini API
- **Speech Recognition**: Web Speech API
- **Package Manager**: npm/yarn

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn
- A Google Gemini API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/greywarden07/WebWhisper.git
   cd WebWhisper
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚦 Usage

1. **Start a Conversation**: Click the microphone button to begin speech recognition
2. **Speak Naturally**: The app will convert your speech to text in real-time
3. **AI Response**: Get intelligent responses powered by Google Gemini
4. **Continue Chatting**: Build upon the conversation with follow-up questions

## 📂 Project Structure

```
WebWhisper/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── pages/       # Next.js pages
│   ├── styles/      # CSS styles
│   ├── types/       # TypeScript type definitions
│   └── utils/       # Utility functions
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |
| `NEXT_PUBLIC_API_URL` | API base URL | Yes |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud Platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**greywarden07**
- GitHub: [@greywarden07](https://github.com/greywarden07)

## 🙏 Acknowledgments

- Google for providing the Gemini AI capabilities
- The Next.js team for the amazing framework
- Web Speech API for speech recognition functionality

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Built with ❤️ using Next.js and TypeScript**
