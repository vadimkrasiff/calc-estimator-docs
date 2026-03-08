
# 🚀 Инструкция по сборке и деплою

**ДомLike.Калькулятор** — Калькулятор расчёта строительных материалов

---

## 📋 Оглавление

- [Структура проекта](#структура-проекта)
- [Требования](#требования)
- [Бэкенд](#1-бэкенд-backend)
- [Фронтенд](#2-фронтенд-frontend)
- [Документация](#3-документация-documentation)
- [Деплой всего проекта](#-деплой-всего-проекта)
- [Автоматический скрипт](#-скрипт-для-автоматического-деплоя)
- [Проверка после деплоя](#-проверка-после-деплоя)
- [Частые проблемы](#-частые-проблемы-и-решения)
- [Памятка](#-памятка-для-быстрого-деплоя)

---

## 📁 Структура проекта

```
~/app/
├── backend/              # Бэкенд (Node.js + Express)
│   ├── src/
│   ├── .env
│   └── package.json
├── frontend/             # Фронтенд (React + Vite)
│   ├── src/
│   ├── nginx.conf        # Конфиг nginx
│   ├── docs/             # Файлы документации (билд)
│   └── package.json
├── docs/
│   └── src/              # Документация (Docusaurus)
│       ├── docs/
│       ├── sidebars.js
│       └── package.json
├── docker-compose.yml
├── deploy-all.sh         # Скрипт деплоя
└── .gitignore
```

---

## 🛠 Требования

| Компонент | Версия | Примечание |
|-----------|--------|------------|
| **Node.js** | v20.x | Для сборки фронтенда и документации |
| **Docker** | 24+ | Контейнеризация |
| **Docker Compose** | 2.0+ | Оркестрация контейнеров |
| **Git** | 2.30+ | Контроль версий |
| **SSL** | Let's Encrypt | HTTPS сертификаты |

---

## 1️⃣ Бэкенд (Backend)

### 📝 Внесение изменений

**На своём компьютере:**

```bash
cd ~/path/to/calc-estimator/backend

# Внеси изменения в код
# Например: src/controllers/, src/routes/, src/models/
```

---

### 🔨 Сборка и деплой

#### Шаг 1: Закоммить и запушь

```bash
cd backend
git status
git add .
git commit -m "Backend: [краткое описание изменений]"
git push origin main
```

---

#### Шаг 2: Обнови на сервере

**Подключись к серверу:**

```bash
ssh root@31.172.79.34
```

**Выполни команды:**

```bash
# 1. Перейди в папку бэкенда и забери изменения
cd ~/app/backend
git pull origin main

# 2. Вернись в корень и пересобери бэкенд
cd ~/app
docker-compose build --no-cache backend

# 3. Пересоздать контейнер
docker-compose up -d --force-recreate backend

# 4. Проверить статус
docker-compose ps backend

# 5. Проверить логи
docker-compose logs backend | tail -30
```

⏱ **Время: 2–3 минуты**

---

#### Шаг 3: Проверка

```bash
# Проверь что бэкенд отвечает
curl http://127.0.0.1:3001/api

# Проверь логи на ошибки
docker-compose logs backend | grep -i error
```

**Ожидаемый результат:**

- ✅ Контейнер в статусе `Up`
- ✅ API отвечает (статус 200 или 401)
- ✅ В логах нет ошибок

---

### 🔄 Быстрый деплой бэкенда

```bash
# === ЛОКАЛЬНО ===
cd backend && git add . && git commit -m "Fix" && git push

# === НА СЕРВЕРЕ ===
cd ~/app/backend && git pull
cd ~/app && docker-compose build --no-cache backend
docker-compose up -d --force-recreate backend
```

---

## 2️⃣ Фронтенд (Frontend)

### 📝 Внесение изменений

**На своём компьютере:**

```bash
cd ~/path/to/calc-estimator/frontend

# Внеси изменения в код
# Например: src/pages/, src/components/, src/widgets/
```

---

### 🔨 Сборка и деплой

#### Шаг 1: Закоммить и запушь

```bash
cd frontend
git status
git add .
git commit -m "Frontend: [краткое описание изменений]"
git push origin main
```

---

#### Шаг 2: Обнови на сервере

**Подключись к серверу:**

```bash
ssh root@31.172.79.34
```

**Выполни команды:**

```bash
# 1. Перейди в папку фронтенда и забери изменения
cd ~/app/frontend
git pull origin main

# 2. Вернись в корень и пересобери фронтенд
cd ~/app
docker-compose build --no-cache frontend

# 3. Пересоздать контейнер
docker-compose up -d --force-recreate frontend

# 4. Проверить статус
docker-compose ps frontend

# 5. Проверить логи
docker-compose logs frontend | tail -30
```

⏱ **Время: 3–5 минут** (Vite build)

---

#### Шаг 3: Проверка

```bash
# Проверь что сайт открывается
curl -k -I https://vkrasiv.ru

# Проверь что API проксируется
curl -k https://vkrasiv.ru/api

# Проверь логи на ошибки
docker-compose logs frontend | grep -i error
```

**Ожидаемый результат:**

- ✅ Контейнер в статусе `Up`
- ✅ `https://vkrasiv.ru` открывается
- ✅ API запросы работают (статус 200)
- ✅ В логах нет ошибок

---

### 🔄 Быстрый деплой фронтенда

```bash
# === ЛОКАЛЬНО ===
cd frontend && git add . && git commit -m "Fix" && git push

# === НА СЕРВЕРЕ ===
cd ~/app/frontend && git pull
cd ~/app && docker-compose build --no-cache frontend
docker-compose up -d --force-recreate frontend
```

---

## 3️⃣ Документация (Documentation)

### 📝 Внесение изменений

**На своём компьютере:**

```bash
cd ~/path/to/calc-estimator

# Внеси изменения в файлы документации
# Например: docs/getting-started.md, docs/calculator/overview.md
```

---

### 🔨 Сборка и деплой

#### Шаг 1: Закоммить и запушь

```bash
cd docs/src
git status
git add .
git commit -m "Docs: [краткое описание изменений]"
git push origin main
```

---

#### Шаг 2: Обнови на сервере

**Подключись к серверу:**

```bash
ssh root@31.172.79.34
```

**Выполни команды:**

```bash
# 1. Перейди в папку с исходниками документации
cd ~/app/docs/src

# 2. Забери изменения из GitHub
git pull origin main

# 3. Установи зависимости (если менялся package.json)
npm install

# 4. Собери билд (Docusaurus)
npm run build

# 5. Скопируй билд в папку для nginx
cp -r build/* ~/app/frontend/docs/

# 6. Перезагрузи nginx (подхватит изменения)
docker exec myapp-frontend nginx -s reload

echo "✅ Документация обновлена!"
```

⏱ **Время: 2–4 минуты**

---

#### Шаг 3: Проверка

```bash
# Проверь что документация открывается
curl -k -I https://docs.vkrasiv.ru

# Проверь файлы внутри контейнера
docker exec myapp-frontend ls /usr/share/nginx/docs/

# Проверь логи
docker-compose logs frontend | grep -i docs
```

**Ожидаемый результат:**

- ✅ `https://docs.vkrasiv.ru` открывается
- ✅ Файлы в `/usr/share/nginx/docs/` обновлены
- ✅ Навигация работает

---

### 🔄 Быстрый деплой документации

```bash
# === ЛОКАЛЬНО ===
cd docs/src && git add . && git commit -m "Update" && git push

# === НА СЕРВЕРЕ ===
cd ~/app/docs/src && git pull && npm run build
cp -r build/* ~/app/frontend/docs/
docker exec myapp-frontend nginx -s reload
```

---

## 🚀 Деплой всего проекта

Если изменилось **всё** (бэкенд + фронтенд + документация):

### На сервере:

```bash
# 1. Обновить бэкенд
cd ~/app/backend && git pull origin main

# 2. Обновить фронтенд
cd ~/app/frontend && git pull origin main

# 3. Обновить документацию
cd ~/app/docs/src && git pull origin main

# 4. Вернуться в корень и пересобрать все образы
cd ~/app
docker-compose build --no-cache

# 5. Пересоздать все контейнеры
docker-compose up -d --force-recreate

# 6. Перезагрузить nginx (для docs)
docker exec myapp-frontend nginx -s reload

# 7. Проверить статус
docker-compose ps

echo "✅ Всё обновлено!"
```

⏱ **Время: 5–10 минут**

---

## 📜 Скрипт для автоматического деплоя

Создай скрипт на сервере для быстрого деплоя:

```bash
nano ~/app/deploy-all.sh
```

**Вставь содержимое:**

```bash
#!/bin/bash
set -e

echo "🚀 Деплой проекта ДомLike.Калькулятор..."
echo "================================"

# 1. Обновить код из каждого репозитория
echo "📥 Git pull..."
cd ~/app/backend && git pull origin main
cd ~/app/frontend && git pull origin main
cd ~/app/docs/src && git pull origin main

# 2. Пересобрать образы
echo "🔨 Docker build..."
cd ~/app
docker-compose build --no-cache

# 3. Обновить документацию
echo "📚 Building docs..."
cd ~/app/docs/src
npm install
npm run build
cp -r build/* ~/app/frontend/docs/

# 4. Пересоздать контейнеры
echo "🔄 Recreating containers..."
cd ~/app
docker-compose up -d --force-recreate

# 5. Перезагрузить nginx
echo "⚙️ Reloading nginx..."
docker exec myapp-frontend nginx -s reload

# 6. Проверить статус
echo "✅ Проверка..."
docker-compose ps

echo "================================"
echo "✅ Деплой завершён!"
echo "🌐 https://vkrasiv.ru"
echo "📚 https://docs.vkrasiv.ru"
```

**Сделай исполняемым:**

```bash
chmod +x ~/app/deploy-all.sh
```

**Запускай одной командой:**

```bash
~/app/deploy-all.sh
```

---

## 🧪 Проверка после деплоя

### Чек-лист

| Компонент | Проверка | Ожидаемый результат |
|-----------|----------|---------------------|
| **Бэкенд** | `curl http://127.0.0.1:3001/api` | ✅ 200 или 401 |
| **Фронтенд** | `curl -k -I https://vkrasiv.ru` | ✅ 200 OK |
| **Документация** | `curl -k -I https://docs.vkrasiv.ru` | ✅ 200 OK |
| **API прокси** | `curl -k https://vkrasiv.ru/api` | ✅ Ответ от бэкенда |
| **SSL** | Открой в браузере | ✅ Зелёный замочек 🔒 |

---

### Быстрые команды для проверки

```bash
# Статус всех контейнеров
docker-compose ps

# Логи бэкенда
docker-compose logs backend | tail -20

# Логи фронтенда
docker-compose logs frontend | tail -20

# Проверка nginx конфига
docker exec myapp-frontend nginx -t

# Проверка файлов документации
docker exec myapp-frontend ls /usr/share/nginx/docs/ | head -5
```

---

## ⚠️ Частые проблемы и решения

| Проблема | Решение |
|----------|---------|
| `git pull` ошибка | Проверь ветку: `git branch` → должна быть `main` |
| `docker-compose build` ошибка | Очисти кэш: `docker system prune -a` |
| Контейнер не запускается | `docker-compose logs <сервис>` → смотри ошибку |
| Изменения не видны | Очисти кэш браузера: `Ctrl+Shift+Delete` |
| 502 Bad Gateway | Проверь что бэкенд запущен: `docker-compose ps backend` |
| 404 на docs | Проверь файлы: `ls ~/app/frontend/docs/` |
| SSL ошибка | Проверь сертификат: `ls /etc/letsencrypt/live/` |
| Node.js версия | Проверь: `node --version` → должно быть v20.x |
| npm install ошибка | Удали `node_modules` и `package-lock.json`, затем `npm install` |

---

## 📋 Памятка для быстрого деплоя

```bash
# === БЭКЕНД ===
cd ~/app/backend && git pull
cd ~/app && docker-compose build --no-cache backend
docker-compose up -d --force-recreate backend

# === ФРОНТЕНД ===
cd ~/app/frontend && git pull
cd ~/app && docker-compose build --no-cache frontend
docker-compose up -d --force-recreate frontend

# === ДОКУМЕНТАЦИЯ ===
cd ~/app/docs/src && git pull && npm run build
cp -r build/* ~/app/frontend/docs/
docker exec myapp-frontend nginx -s reload

# === ВСЁ СРАЗУ ===
~/app/deploy-all.sh
```

---

## 🔐 Безопасность

### Перед деплоем

- [ ] Проверь что нет чувствительных данных в коде (пароли, ключи)
- [ ] Убедись что `.env` файлы не закоммичены в Git
- [ ] Проверь что `.gitignore` настроен правильно

### После деплоя

- [ ] Проверь логи на подозрительную активность
- [ ] Убедись что SSL сертификаты действительны
- [ ] Проверь что бэкенд не доступен напрямую (только через proxy)

---

## 📞 Контакты и поддержка

| Ресурс | Ссылка |
|--------|--------|
| 🌐 Сайт | [vkrasiv.ru](https://vkrasiv.ru) |
| 📚 Документация | [docs.vkrasiv.ru](https://docs.vkrasiv.ru) |
| 🐛 GitHub | [vadimkrasiff/calc-estimator](https://github.com/vadimkrasiff/calc-estimator) |

---

**Версия документа:** 1.1  
**Последнее обновление:** Март 2026  
**Актуально для:** ДомLike.Калькулятор v0.0.0

---

> **🏗️ ДомLike.Калькулятор** — умный расчёт для умного строительства