import pandas as pd
from pandasql import sqldf, load_meat, load_births
import pandasql

sql = pandasql.PandaSQL()

table_names = ["Boston","assignment2data"]
project_name = "ResultsTestProject"

data_frames = []

for table_name in table_names:
    data_frames.append(pd.read_csv("./project_files/" + project_name + "/" + table_name + ".csv"))

# create aliases for your dataframes
env = {""+table_names[i]: df for i, df in enumerate(data_frames)}
print(env)

df = sql('select * from assignment2data.csv Limit  10', env=env)

p_name = "result.csv"
 
df.to_csv("./project_files/" + project_name + "/" + p_name, sep=',')

# tell pandasql to use the aliases
