conda activate ./anaconda3/envs/my_chemml_env
export NODE_HOME=~/nodejs-latest/node-v12.18.3-linux-x64/ 
export PATH=$PATH:$NODE_HOME/bin
cd MLToolkit_Feb_2/MLToolkit/client/chemmlAngular/
npm start
flask run --host=0.0.0.0 --port=8080