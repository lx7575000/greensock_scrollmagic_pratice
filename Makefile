.PHONY: server
server:
	browser-sync start --server --files="index.html,css/main.css"

.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/main.css --output bundle/app.css

.PHONY: clean
clean:
	rm -r bundle

.PHONY: all
all:
	(make css & make server & wait)