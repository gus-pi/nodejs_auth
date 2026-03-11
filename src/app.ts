import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config({ quiet: true });

export const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
