#!/bin/bash
mkdir account-unlocker1.0
cd account-unlocker1.0
cp -fr /home/akroma/walletunlock/account-unlock.js /home/akroma/account-unlocker1.0/

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install 8.9.3
nvm use 8.9.3
npm update
npm i crypto --save
npm i prompt-promise --save
npm i web3_ipc --save
npm i pkg --save
pkg -t node8-linux account-unlock.js
 
./account-unlock --enc 18858

pkg -t node8-linux account-unlock.js

rm -fr account-unlock.js node_modules iv.h package-lock.json

echo "setup complete"




