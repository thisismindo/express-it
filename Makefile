up:
	@echo Start API Service: && \
	npm run build && \
	docker compose up -d
down:
	@echo Shut down API Service: && \
	docker compose down
build:
	@echo Build API Service image: && \
	docker compose build
reset:
	@echo [WARNING] Reset project: && \
	docker compose down --rmi all --remove-orphans
	docker volume prune
	docker image prune
	sudo rm -rf mysql-db-primary
setup-db:
	@echo Setup DB: && \
	./platform/bin/db-setup.sh
check-image:
	@echo Check build image: && \
	docker run -it express-it-app sh
