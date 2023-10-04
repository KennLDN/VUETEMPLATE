const express = require('express');
const app = express();
const apiRoutes = require('./backend/main');
const path = require('path');
const { spawn } = require('child_process');

const BACKEND_PORT = 3000;
const FRONTEND_PORT = 3001;

app.use('/api', apiRoutes);

if (process.argv[2] === '-prod') {
    const frontendApp = express();

    frontendApp.use(express.static(path.join(__dirname, 'frontend', 'dist')));
    frontendApp.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
    });
    frontendApp.listen(FRONTEND_PORT, () => {
        console.log(`Frontend is running on http://localhost:${FRONTEND_PORT}`);
    });
} else if (process.argv[2] === '-dev') {
    const vite = spawn('vite', ['dev', '--port', FRONTEND_PORT, '--host'], { cwd: path.join(__dirname, 'frontend'), stdio: 'inherit' });
    
    vite.on('close', code => {
        if (code !== 0) {
            console.error(`Vite process exited with code ${code}`);
            process.exit(code);
        }
    });

    console.log(`Frontend Dev server is running on http://localhost:${FRONTEND_PORT}`);
}

app.listen(BACKEND_PORT, () => {
  console.log(`Backend server is running on http://localhost:${BACKEND_PORT}`);
});
