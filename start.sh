docker swarm init
docker pull dleo9307/kafka:2.13
docker pull zookeeper:latest
docker stack deploy --compose-file docker-compose.yml app
