#!/bin/bash
set -e

# Ensure .env file exists
if [ ! -f .env ]; then
    cp .env.example .env
fi

# Generate a simple APP_KEY if not set (since key:generate may not be available)
if ! grep -q "^APP_KEY=base64:" .env; then
    # Generate a simple base64 encoded key
    echo "APP_KEY=base64:$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 | base64)" >> .env
fi

# Execute the passed command
exec "$@"
