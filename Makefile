REPORTER = spec

test:
	@NODE_ENV=test ./node_modules/.bin/mocha --harmony test/*.js $(OPT) --reporter $(REPORTER) --colors

.PHONY: test