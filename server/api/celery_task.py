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
    print("RUNNING CELERY")
    
    output_format = 'csv'
    isError = False

    x = ''.join(random.choices(string.ascii_letters + string.digits, k=5))
    ChemMLWrapperRun(json_data, './' + x)
    f = open("./" + x + "/metric/results." + output_format, "r")
    
    data = {
        "data": f.read().rstrip(),
        "isError": isError,
        "result_format": output_format
        }

    return data 