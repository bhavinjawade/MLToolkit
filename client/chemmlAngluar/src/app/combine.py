from os import listdir
from os.path import isfile, join
import json

mypath = "C:/Users/Bhavin Jawade/Documents/Courses/Information Retrieval/Project/Project1/tweets/combined"

read_files = [f for f in listdir(mypath) if isfile(join(mypath, f))]
tweet_c = 0

with open("result.json", "w+") as outfile:
    for fn in read_files:
        with open(mypath+"/"+fn) as f:
            data = f.readlines()
            for tweet in data:
                tweet_c += 1
                tweet = json.loads(tweet) 
                outfile.write(json.dumps(tweet))
                outfile.write("\n")
                print(tweet_c)
        print(fn, " - file done ")
