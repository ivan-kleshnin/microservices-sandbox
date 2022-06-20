# include ${PWD}/docs/Makefile # draft

help: # Show this help
	@egrep -h '\s#\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?# "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

init:
	@echo '# Added by MyDocker\n127.0.0.1 mydocker.local' | sudo tee -a /etc/hosts

install-api:
	@cd api ; yarn install

install-frontend:
	@cd frontend ; yarn install

install: install-api install-frontend

start: # Run the project in the prod mode
	@docker compose up --build

dev: # Run the project in the dev mode
	@docker compose -f docker-compose.dev.yml up --build --detach

down:
	@docker-compose down --remove-orphans

# SHELL TO
sh-auth: # Shell to the db container
	@docker exec -it mydocker-next-auth sh

sh-main: # Shell to the api container
	@docker exec -it mydocker-next-main sh

sh-db: # Shell to the frontend container
	@docker exec -it mydocker-mongo-db sh

seed-db:
	@docker exec -it mydocker-mongo-db \
    mongoimport --db default --collection users --type json --file seed/users.json --jsonArray --drop

# TODO logs for each instance?
# TODO possible to live-reload through Nginx?

# LOCAL MACHINE ------------------------------------------------------------------------------------
cleanup:
	@docker system prune -a -f

cleanup-volumes:
	@docker system prune -a -f --volumes

kill-all:
	@docker kill $(docker ps -q)

mongod:
	@cd /usr/local/mongodb/bin && ./mongod --dbpath /usr/local/mongodb/data/db > ../logs/mongod.log 2>&1 &

mongo:
	@/usr/local/mongodb/bin/mongo
