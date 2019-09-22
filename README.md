## Prerequisites
### 1. Clone kibana repo from github
```
git clone https://github.com/elastic/kibana.git
```
### 2. Run
```
yarn install
```
```
yarn kbn bootstrap
```

## Run the plugin
### 1. Run Kibana:
from ./kibana/plugins/deduplicate run  
```
$NODE_OPTIONS="--max-old-space-size=4096" yarn start
```
### 2. Run python server
from ./python_code run 
```
$python main.py
```
