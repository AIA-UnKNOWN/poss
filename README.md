# Setup

## Running the container
Before going through the setup, please install [docker](https://docs.docker.com/get-started/overview/) first through their [installation](https://docs.docker.com/get-docker/) page.

After installing docker in your machine, we only need to run one command and this will setup everything for you.

> Note: You should be in the app root directory when running this command.
```shell
docker compose up
``` 
Now open the app in your browser with the url [http://localhost:5173](http://localhost:5173).

## Viewing the logs
To view the logs of the containers running, run the command below.
```shell
docker compose logs -f
```
In order to view individual logs of the container, you can run the command passing your container name or id.
```shell
docker logs -f <container-name-or-id>

# Examples
docker logs -f poss-backend-container
docker logs -f poss-frontend-container
docker logs -f <mysql-container-name-or-id>
```

## Stopping the container
Press `CTRL + C` on your keyboard and run the command the remove the containers and networks it created.
```shell
docker compose down
``` 
## Running the storybook
In order the run storybook for your frontend run the command start its server.
```shell
docker exec -it poss-frontend-container bash -c "npm run storybook"
```