from celery import Celery
import time 
from chemml.wrapper import ChemMLWrapperRun
import random, string

#Specify mongodb host and datababse to connect to
BROKER_URL = 'mongodb://localhost:27017/jobs'

celery = Celery('EOD_TASKS',broker=BROKER_URL)

#Loads settings for Backend to store results of jobs 
celery.config_from_object('celeryconfig')

@celery.task
def run_pipeline(json_data):
    data = '''{
    "nodes": {
        "ID1": {
        "inputs": {
            "filepath_or_buffer": "./temp/Boston.csv",
            "index_col": 0
        },
        "library": "pandas",
        "method": {},
        "module": "",
        "name": "read_csv",
        "outputs": {
            "df": true
        }
        },
        "ID2": {
        "inputs": {},
        "library": "sklearn",
        "method": {
            "inputs": {
            "X": "@ID1@df"
            },
            "name": "fit_transform",
            "outputs": {
            "X_new": true
            }
        },
        "module": "preprocessing",
        "name": "StandardScaler",
        "outputs": {}
        },
        "ID3": {
        "inputs": {},
        "library": "sklearn",
        "method": {
            "inputs": {
            "X": "@ID2@X_new"
            },
            "name": "fit_transform",
            "outputs": {
            "X_new": true
            }
        },
        "module": "decomposition",
        "name": "PCA",
        "outputs": {}
        },
        "ID4": {
        "inputs": {
            "selection": -1
        },
        "library": "chemml",
        "method": {
            "inputs": {
            "X": "@ID3@X_new"
            },
            "name": "fit",
            "outputs": {
            "X1": true,
            "X2": true
            }
        },
        "module": "wrapper.preprocessing",
        "name": "SplitColumns",
        "outputs": {}
        },
        "ID5": {
        "inputs": {
            "*args": "@ID4@X2@ID4@X1",
            "test_size": 0.2
        },
        "library": "sklearn",
        "method": {},
        "module": "model_selection",
        "name": "train_test_split",
        "outputs": {
            "test1": true,
            "test2": true,
            "train1": true,
            "train2": true
        }
        },
        "ID6": {
        "inputs": {},
        "library": "sklearn",
        "method": {
            "inputs": {
            "X": "@ID5@train1",
            "y": "@ID5@train2"
            },
            "name": "fit",
            "outputs": {}
        },
        "module": "linear_model",
        "name": "LinearRegression",
        "outputs": {
            "obj": true
        }
        },
        "ID7": {
        "inputs": {
            "obj": "@ID6@obj"
        },
        "library": "sklearn",
        "method": {
            "inputs": {
            "X": "@ID5@test1"
            },
            "name": "predict",
            "outputs": {
            "C": true
            }
        },
        "module": "linear_model",
        "name": "LinearRegression",
        "outputs": {}
        },
        "ID8": {
        "inputs": {
            "y_pred": "@ID7@C",
            "y_true": "@ID5@test2"
        },
        "library": "sklearn",
        "method": {},
        "module": "metrics",
        "name": "mean_absolute_error",
        "outputs": {
            "loss": true
        }
        },
        "ID9": {
        "inputs": {
            "file_path": "metric/mae.txt"
        },
        "library": "chemml",
        "method": {
            "inputs": {
            "X": "@ID8@loss"
            },
            "name": "write",
            "outputs": {}
        },
        "module": "wrapper.preprocessing",
        "name": "SaveFile",
        "outputs": {}
        }
    }
    }'''
    print("RUNNING CELERY")
    x = ''.join(random.choices(string.ascii_letters + string.digits, k=5))
    ChemMLWrapperRun(json_data, './' + x)
    f = open("./" + x + "/metric/error.csv", "r")
    data = {
        "dataset": "boston.csv",
        "dataset_file_path": "./temp/boston.csv",
        "error": f.read().rstrip()
        }

    return data 