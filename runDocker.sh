#!/bin/bash
echo Testing docker-compose in Code Build
echo 🐳🐳🐳🐳🐳🚢🚢🚢🚢🚢🚢🚢🚢
echo Build started on `date`
echo Building the Docker image... 
docker-compose up -d
docker ps -a
echo Build completed on `date`
echo stopping all Docker Containers
docker-compose stop
docker-compose rm --force
echo END OF DEMO 🐳🐳🐳🐳🐳🚢🚢🚢🚢🚢🚢🚢🚢
echo 🐳🐳🐳🐳🐳🚢🚢🚢🚢🚢🚢🚢🚢