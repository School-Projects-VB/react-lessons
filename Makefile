SHELL := /bin/bash

GREEN := \033[32m
RESET := \033[39m
ARROW := \033[1m\033[31m>$(GREEN)>\033[33m>$(RESET)

run:
	@ echo -e "${ARROW} Running project..."
	@ npm run dev

	@ echo -e "[${GREEN}OK${RESET}] Done"

.PHONY: run