import { connectToDB } from './config/db';
import dotenv from 'dotenv';
import http from 'http';
import { app } from './app';

dotenv.config({ quiet: true });
const port = process.env.PORT;

async function startServer() {
    await connectToDB();

    const server = http.createServer(app);

    server.listen(port, () => {
        console.log(`Server listening to port ${port}`);
    });
}

startServer().catch((error) => {
    console.error('Error while starting the server', error);
    process.exit(1);
});
