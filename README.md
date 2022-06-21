# Курсовая работа по курсу ["Информационные системы и базы данных"](https://se.ifmo.ru/en/courses/db) и 4-я лабораторная работа по ["Веб программированию"](https://se.ifmo.ru/ru/courses/web)

# Build
mvn clean package && docker build -t org.pixel/db-course .

# RUN

docker rm -f db-course || true && docker run -d -p 8080:8080 -p 4848:4848 --name db-course org.pixel/db-course 