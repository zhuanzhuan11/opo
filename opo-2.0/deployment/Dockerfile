FROM node:24.18.1-bookworm-slim
WORKDIR /app
COPY --chown=node:node package.json ./
COPY --chown=node:node backend ./backend
COPY --chown=node:node frontend ./frontend
COPY --chown=node:node database/migrations ./database/migrations
COPY --chown=node:node scripts ./scripts
RUN mkdir -p /app/database/runtime && chown node:node /app/database/runtime
USER node
ENV HOST=0.0.0.0 PORT=3200 OPO_MODE=sandbox OPO_ORIGIN=http://127.0.0.1:3200
EXPOSE 3200
CMD ["node", "backend/server.mjs"]

