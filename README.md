VUE TEMPLATE - KENN

Absolute basics required to setup a full-stack vue project, zero bells and whistles.
For anyone that may find it useful, mostly myself

- npm run build - builds the frontend code to ./frontend/dist.
- npm run dev - launches live vite server on frontend port (3001) and backend on backend port (3000)
- npm run prod - launches two express servers for frontend (3001) and backend (3000)
- docker-compose up --build - builds the frontend files and launches prod in container

Steps to take:
- Rename docker container in docker-compose
- Change ports in server.js if neccessary