@echo off
yarn build&&cd dist&&git init&&git add -A&&git commit -m 'deploy'&&git push -f https://github.com/bloodzmoon/vue-todo.git master:gh-pages&&cd ..