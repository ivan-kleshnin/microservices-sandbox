include ${PWD}/docs/Makefile # draft

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
	@docker compose -f docker-compose.yml up --build

dev: # Run the project in the dev mode
	@docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build

sh-db: # Shell to the db container
	@docker exec -it mydocker-api-db sh

sh-api: # Shell to the api container
	@docker exec -it mydocker-api sh

sh-frontend: # Shell to the frontend container
	@docker exec -it mydocker-frontend sh

# TODO logs for each instance?
# TODO possible to live-reload through Nginx?
