# Steps to follow
 1. git init (creates our git repo)
 2. npm init (creates node_modules)
 3. npm i express (creating framework environment)
 4. npm i --save-dev @types/express (install types)
 5. npm i typescript -d (install typescript with DEV dependancy)
 7. create tsc file and modify outDir in tscconfig to be ./dist
 6. npm tsc (to compile all files from TS to JS) 
 7. npm i nodemon -D (to watch the TS file and compile automaticly)
 8. npm i ts-node -D (refreshes the TS if not working)
 