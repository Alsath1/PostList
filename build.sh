#!/bin/bash

# Очистка предыдущей сборки
rm -rf ./out

# Сборка образа
docker build -t nextjs-builder .

# Копирование файлов
docker create --name temp-builder nextjs-builder
docker cp temp-builder:/app/out ./out
docker rm temp-builder

echo "Файлы сборки скопированы в ./out"