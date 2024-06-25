const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const connectDB = require('../config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

describe('User API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  it('should list all users', async () => {
    const res = await request(app).get('/api/worko/user');
    expect(res.statusCode).toEqual(200);
  });

  // Additional tests for other endpoints go here
});
