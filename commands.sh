#!/bin/bash

# GIT project
git init
echo "node_modules" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "public" >> .gitignore

# NPM initializing and libraries
npm init -y
npm i --save-dev express mocha chai

# Project structures
mkdir src test
touch dev-server.mjs
touch src/index.mjs src/index.html src/index.css src/tax.mjs
touch test/tax.spec.mjs

# NPM project details
npm pkg set description="Tax calculator"
npm pkg set author="AUTHOR_NAME_HERE"
npm pkg set license="MIT"

# ECMAScript approach
npm pkg set type="module"

# NPM scripts
npm pkg set scripts.start="node dev-server.mjs"
npm pkg set scripts.test="mocha"
npm pkg set scripts.build="mkdir -p dist && rm -f dist/* && cp -r src/* dist"
npm pkg set scripts.dev="node --watch-path=src --watch dev-server.mjs"
