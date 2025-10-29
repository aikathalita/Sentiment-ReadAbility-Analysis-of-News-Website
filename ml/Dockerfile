# ML Python Dockerfile
FROM python:3.11-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy requirements file if exists, otherwise install packages directly
COPY requirements.txt* ./

# Install Python dependencies
RUN if [ -f requirements.txt ]; then \
        pip install --no-cache-dir -r requirements.txt; \
    else \
        pip install --no-cache-dir \
            requests \
            beautifulsoup4 \
            python-dotenv \
            pandas \
            numpy \
            matplotlib \
            seaborn \
            tqdm \
            jupyter; \
    fi

# Copy ML scripts
COPY . .

# Create .env file if it doesn't exist
RUN touch .env

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD python -c "import requests; print('ML environment OK')" || exit 1

# Keep container running for development
CMD ["tail", "-f", "/dev/null"]
