# Sentiment ReadAbility Analysis of News Website

An AI-based website that allows users to upload or enter news text for automatic analysis. The system will process the text with NLP to determine the sentiment of the news, whether it is positive, negative, or neutral, while also calculating the readability level to determine how easy the news is to understand for the target audience. The analysis results are displayed concisely to help journalists, editors, and readers evaluate the quality of the news.

## 🚀 Features

- **Sentiment Analysis**: Determine if news is positive, negative, or neutral using Google Gemini 2.0 Flash API
- **Readability Analysis**: Calculate readability scores using Flesch Reading Ease algorithm
- **Multiple Input Methods**: Support text input, file upload (.txt, .pdf, .docx), and URL analysis
- **Real-time Analysis**: Live backend integration with ML processing
- **Interactive UI**: Modern Vue.js 3 interface with animations and visualizations
- **Multi-format Support**: Process various document formats automatically

## 🏗️ Project Structure

```
├── frontend/          # Vue.js 3 + Vite frontend application
├── backend/           # PHP 8.3+ backend API server
├── ml/               # Python ML environment and scripts
└── README.md         # This file
```

## 📋 Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18+ recommended)
- **PHP** (v8.1+ required)
- **Python** (v3.8+ required)
- **pdftotext** (for PDF processing): `sudo apt install poppler-utils`
- **Git** (for cloning)

## ⚡ Quick Start

### Option 1: Docker Compose (Recommended)

The easiest way to run the project is using Docker Compose. This will automatically set up all services with one command.

#### Prerequisites for Docker
- **Docker** (v20+ recommended)
- **Docker Compose** (v2+ recommended)

#### Running with Docker

1. **Clone the Repository**
```bash
git clone https://github.com/Nad795/Sentiment-ReadAbility-Analysis-of-News-Website.git
cd Sentiment-ReadAbility-Analysis-of-News-Website
```

2. **Configure Environment Variables**
```bash
# Create .env file for ML service
cd ml
cp .env.example .env  # If example exists, or create new .env file
```

Add your API keys to `ml/.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent
```

3. **Build and Start All Services**
```bash
# Return to project root
cd ..

# Build and start all services
docker-compose up --build
```

4. **Access the Application**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **ML Service**: http://localhost:8001 (optional)

#### Docker Compose Commands

```bash
# Start services in background
docker-compose up -d --build

# Start with ML service (development profile)
docker-compose --profile development up --build

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Restart specific service
docker-compose restart frontend
```

#### Docker Services Overview

- **Backend**: PHP 8.3 server running on port 8000
- **Frontend**: Vue.js development server on port 5173
- **ML**: Python environment on port 8001 (optional)
- **Health Checks**: Automatic service monitoring
- **Hot Reload**: Live code changes for development

### Option 2: Manual Setup

If you prefer to run services manually or don't have Docker installed:

#### Prerequisites for Manual Setup
- **Node.js** (v18+ recommended)
- **PHP** (v8.1+ required)
- **Python** (v3.8+ required)
- **pdftotext** (for PDF processing): `sudo apt install poppler-utils`
- **Git** (for cloning)

### 1. Clone the Repository

```bash
git clone https://github.com/Nad795/Sentiment-ReadAbility-Analysis-of-News-Website.git
cd Sentiment-ReadAbility-Analysis-of-News-Website
```

### 2. Setup Backend (PHP Server)

```bash
# Navigate to backend directory
cd backend

# Start PHP development server
php -S localhost:8000 -t public
```

The backend will be available at `http://localhost:8000`

### 3. Setup Frontend (Vue.js)

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 4. Setup ML Environment (Python)

Open another terminal:

```bash
# Navigate to ML directory
cd ml

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Linux/Mac
# or
venv\Scripts\activate     # On Windows

# Install dependencies
pip install requests beautifulsoup4 python-dotenv pandas numpy matplotlib seaborn tqdm jupyter
```

### 5. Configure API Keys (Manual Setup Only)

For manual setup, create `.env` file in the `ml/` directory:

```bash
cd ml
cp .env.example .env  # If example exists
# or create new .env file
```

Add your API keys to `.env`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent
```

## 🎯 How to Use

1. **Start all servers** (backend, frontend, and optionally ML environment)
2. **Open your browser** and go to `http://localhost:5173`
3. **Choose input method**:
   - **Text Input**: Type or paste text directly
   - **File Upload**: Upload .txt, .pdf, or .docx files
   - **URL Input**: Enter a news article URL
4. **View Results**: Navigate between sentiment and readability analysis pages

## 🛠️ Development Guide

### Frontend Development

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Development

```bash
cd backend

# Start PHP server
php -S localhost:8000 -t public

# Run tests (if available)
php vendor/bin/phpunit
```

### ML Development

```bash
cd ml

# Activate virtual environment
source venv/bin/activate

# Run Jupyter notebook for development
jupyter notebook

# Test ML scripts
python PBKK_script_api.py
```

## 📁 Project Components

### Frontend (`/frontend`)
- **Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Iconify
- **Routing**: Vue Router

### Backend (`/backend`)
- **Language**: PHP 8.3+
- **Architecture**: Simple REST API (no framework)
- **Features**: 
  - File upload handling (.txt, .pdf, .docx)
  - Text processing and analysis
  - CORS enabled for frontend integration

### ML (`/ml`)
- **Language**: Python 3.8+
- **Libraries**: requests, beautifulsoup4, pandas, numpy
- **APIs**: Google Gemini 2.0 Flash for sentiment analysis
- **Algorithms**: Flesch Reading Ease for readability

## 🔧 API Endpoints

### Backend API (`http://localhost:8000`)

- **POST /api.php**
  - Content-Type: `application/json` (for text)
  - Content-Type: `multipart/form-data` (for files)
  - Response: JSON with sentiment and readability analysis

Example request:
```bash
# Text analysis
curl -X POST http://localhost:8000/api.php \
  -H "Content-Type: application/json" \
  -d '{"text":"Your news text here"}'

# File analysis
curl -X POST http://localhost:8000/api.php \
  -F "file=@your-document.txt"
```

## � Docker Configuration

### Docker Files Structure

```
├── docker-compose.yml     # Multi-service orchestration
├── .dockerignore         # Root ignore patterns
├── frontend/
│   ├── Dockerfile        # Vue.js container (Node.js 20)
│   └── .dockerignore     # Frontend specific ignores
├── backend/
│   ├── Dockerfile        # PHP container
│   └── .dockerignore     # Backend specific ignores
└── ml/
    ├── Dockerfile        # Python ML container
    ├── requirements.txt  # Python dependencies
    └── .dockerignore     # ML specific ignores
```

### Docker Compose Services

- **backend**: PHP 8.3 with Apache, handles file uploads and text processing
- **frontend**: Node.js 20 with Vite dev server for hot reloading
- **ml** (optional): Python 3.11 with ML libraries for advanced processing

### Environment Variables

Create these files for Docker setup:

**`ml/.env`** (Required for ML functionality):
```env
GEMINI_API_KEY=your_api_key_here
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent
```

### Docker Development Workflow

1. **Start development environment:**
```bash
docker-compose up --build
```

2. **Make code changes** - containers will auto-reload

3. **View logs for debugging:**
```bash
docker-compose logs backend
docker-compose logs frontend
docker-compose logs ml
```

4. **Access container shell:**
```bash
docker-compose exec backend bash
docker-compose exec frontend sh
docker-compose exec ml bash
```

## �🐛 Troubleshooting

### Docker Issues

1. **Container build failures**
   ```bash
   # Clean Docker cache and rebuild
   docker-compose down --volumes
   docker system prune -f
   docker-compose up --build --force-recreate
   ```

2. **Port conflicts**
   ```bash
   # Check what's using the ports
   sudo netstat -tulpn | grep :8000
   sudo netstat -tulpn | grep :5173
   
   # Kill processes using the ports
   sudo kill -9 $(sudo lsof -t -i:8000)
   sudo kill -9 $(sudo lsof -t -i:5173)
   ```

3. **Permission issues (Linux)**
   ```bash
   # Fix Docker permissions
   sudo usermod -aG docker $USER
   # Logout and login again
   ```

4. **Volume mounting issues**
   ```bash
   # Remove volumes and recreate
   docker-compose down --volumes
   docker volume prune -f
   docker-compose up --build
   ```

5. **Node.js version compatibility issues**
   ```bash
   # If you see warnings about unsupported Node.js engines
   # The frontend Dockerfile uses Node.js 20 for Vite 7 compatibility
   # Force rebuild the frontend container
   docker-compose build --no-cache frontend
   ```

### Manual Setup Issues

1. **Backend not accessible (Manual Setup)**
   ```bash
   # Check if PHP server is running
   php -S localhost:8000 -t backend/public
   ```

2. **Frontend build errors (Manual Setup)**
   ```bash
   # Clear node_modules and reinstall
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Python environment issues (Manual Setup)**
   ```bash
   # Recreate virtual environment
   cd ml
   rm -rf venv
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. **File upload errors**
   - Ensure `pdftotext` is installed: `sudo apt install poppler-utils`
   - Check file permissions in backend directory
   - Verify file size limits in PHP configuration

5. **API key issues**
   - Make sure `.env` file exists in `ml/` directory
   - Verify Gemini API key is valid and active
   - Check API usage limits

### Development Tips

**For Docker Development:**
- Use `docker-compose logs -f [service]` to monitor specific service logs
- Access container shells with `docker-compose exec [service] bash/sh`
- Use `docker-compose restart [service]` for quick service restarts
- Volume mounting enables live code reloading

**For Manual Development:**
- Use browser DevTools Network tab to debug API calls
- Check browser console for JavaScript errors
- Monitor backend terminal for PHP errors
- Use `curl` to test API endpoints directly

**General Debugging:**
```bash
# Test API endpoint
curl -X POST http://localhost:8000/api.php \
  -H "Content-Type: application/json" \
  -d '{"text":"Test news content"}'

# Check service health (Docker)
docker-compose ps
docker-compose logs --tail=50 backend

# Monitor all logs (Docker)
docker-compose logs -f
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues, please:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information

---

**Made with ❤️ for better news analysis**
