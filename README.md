# Himaaus Backend API

Express + TypeScript REST API backend for the Himaaus application.

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Getting Started

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` if custom configuration is required.
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- **Health Check**: `GET /api/health`
- **Branches**:
  - `GET /api/branches` - Get list of branches
  - `GET /api/branches/:id` - Get branch details by ID

## Build for Production

```bash
npm run build
npm start
```
