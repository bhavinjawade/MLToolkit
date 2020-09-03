# Deployment Guide: ML Toolkit

## Backend: 

1. Clone repository:

```
https://github.com/bhavinjawade/ChemML_Web_UI
```

2. Activating environment and setting up flask API. The api code package requirements are written in requirements.txt

```
conda activate ./my_chemml_env
cd server
cd api
pip3 install requirements.txt

```

3. Install chemml

```
cd ..
cd chemml
pip3 install -e .
```

4. Start API Server
```
python api.py &
```

4. Setup Celery and MongoDB. 

> MongoDB is both our application database and celery backend and broker.

> Celeryconfig is alreay written in a file called celeryconfig.py. So the next steps are to install mongoDB and install celery and create celery worker process.

If MongoDB and celery are installed, then run:

```
celery -A celery_task worker --loglevel=info --pool=eventlet
```

To install celery:

```
pip3 install celery
```

To install mongoDB community via terminal:

```
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
```
```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

```
```
sudo apt-get update
```
```
sudo apt-get install -y mongodb-org
```

Start mongoDB server:

`
sudo systemctl start mongod
`

## Frontend

Create production build of angular project.

```
cd client
cd chemmlAngular
ng build --prod
```

This will create the production build in dist folder. 

> Make sure angular.json baseURL is set to point right url for static files.