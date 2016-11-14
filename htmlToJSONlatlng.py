import re
import json

infile = open("LATLON.txt", "r")
with open("cities.json", "w") as outfile:
   for line in infile:
      matchObj = re.match( r'\[\w\w\w\]\s+(\d\d\.\d\d)\s+(\d{1,3}\.\d\d)\s+(.+),(\w\w)', line, re.M|re.I)
      if matchObj:
         json.dump("{ID:'"+line[0:5]+"',LAT:"+matchObj.group(1).strip()+",LON:"+"-"+matchObj.group(2).strip()+
            ",CITY:'"+matchObj.group(3).strip()+"',STATE:'"+matchObj.group(4).strip()+"',JOBS:0},", outfile, sort_keys = True, indent = 4,
separators=(',', ':'))
infile.close()
outfile.close()
