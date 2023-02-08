SPACE := $(subst , ,)
PACK = $(subst $(SPACE),,$(1))
CMD_NOT_FOUND = $(error $(call PACK, $(1)) is required for this rule)

define check_cmd
    $(if $(shell command -v $(1)),, $(call CMD_NOT_FOUND, $(1)))
endef

$(call check_cmd, echo)
$(call check_cmd, tput)

ifneq ($(shell tput colors),0)
    GREEN := \e[32m
    RED := \e[31m
    YELLOW := \e[33m
    RESET := \e[39m
endif

ARROW := $(RED)>$(GREEN)>$(YELLOW)>$(RESET)
OK := [$(GREEN)OK$(RESET)]

DEPS_FOLDER := node_modules
DIST := dist

all: run

$(DEPS_FOLDER):
	$(call check_cmd, npm)
	@ npm install

run: $(DEPS_FOLDER)
	$(call check_cmd, npm)
	@ echo -e "$(ARROW) Running project..."
	@ npm run dev $(NPM_FLAGS)
	@ echo -e "$(OK) Done"

.PHONY: run

host: NPM_FLAGS := -- --host
host: run

.PHONY: host

clean:
	@ $(RM) -r $(DIST)
	@ echo -e "$(OK) Removed build"

fclean: clean
	@ $(RM) -r $(DEPS_FOLDER)
	@ echo -e "$(OK) Removed node modules"

.PHONY: clean fclean

re: fclean all

.PHONY: re
