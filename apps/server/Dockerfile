FROM node:21-alpine AS pnpm
ENV CI=1
RUN apk --no-cache add libc6-compat
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  npm install -g pnpm@8.15.6

FROM pnpm AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/server ./apps/server
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install
RUN pnpm --filter schnack-server build

FROM node:21-alpine
COPY --from=deps ./app/node_modules ./node_modules
COPY --from=deps ./app/apps/server/package.json ./apps/server/package.json
COPY --from=deps ./app/apps/server/node_modules ./apps/server/node_modules
COPY --from=deps ./app/apps/server/dist ./apps/server/dist

EXPOSE 8000
WORKDIR /apps/server
CMD ["dist/main.js"]