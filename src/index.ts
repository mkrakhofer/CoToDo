import express from 'express';
import * as path from "path";

const app = express();
const PORT = 8080;

// add middlewares
app.use(express.static(path.join(__dirname, "../frontend", "build")));
app.use(express.static("public"));

app.get('/api-call', (req, res) => {
    res.send('ok!!!');
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get('/', (req,res) => {
    res.send('Express + TypeScript Server 123');
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});