# --- Stage 1: Build Environment ---
FROM node:20-alpine AS builder

WORKDIR /app

# キャッシュ効率化のため package.json のみ先にコピー
COPY package.json package-lock.json ./
RUN npm ci

# ソースコードをコピーしてビルド
COPY . .
RUN npm run build

# --- Stage 2: Production Environment ---
FROM nginx:alpine

# Nginx設定ファイルをコピー
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ビルド成果物をNginxの公開ディレクトリへコピー
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]