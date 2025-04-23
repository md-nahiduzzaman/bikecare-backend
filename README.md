# BikeCare Backend

A RESTful API for managing bike service records, customers, and bikes for a bike maintenance shop.

## Live API

Deployed on Vercel: [https://bikecare-backend.vercel.app](https://bikecare-backend.vercel.app)  
_Update with the actual deployment URL._

## Tech Stack

- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Libraries**: `http-status`, `dotenv`
- **Tools**: `ts-node`, `@types/express`

## Setup Guide

### Prerequisites

- Node.js (v16+)
- PostgreSQL (v13+)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/md-nahiduzzaman/bikecare-backend.git
   cd bikecare-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:

   ```bash
   NODE_ENV=development
   DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/bikecare?schema=public
   PORT=3000
   ```

4. Run Prisma migrations:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Start the server:

   ```bash
   npx ts-node src/app.ts
   ```

6. (Optional) Seed test data:
   ```bash
   npx ts-node src/seed.ts
   ```

API will be available at `http://localhost:3000`.

## Key Features

- **Customer Management**: CRUD operations with unique email validation.
- **Bike Management**: Manage bikes linked to customers.
- **Service Records**: Track and update service details.
- **Overdue Services**: Fetch pending or in-progress services older than 7 days (`GET /api/services/status`).
- **Error Handling**: Standardized error responses.

## Example Endpoint

**GET /api/services/status**

```json
{
  "success": true,
  "message": "Overdue or pending services fetched successfully",
  "data": [
    {
      "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-01T10:00:00.000Z",
      "completionDate": null,
      "description": "Oil change",
      "status": "pending"
    }
  ]
}
```

## Notes

- Ensure PostgreSQL is running.
- Update `.env` for production deployment.
- Report issues via GitHub.
