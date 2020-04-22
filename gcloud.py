# Copyright (C) 2020 Vitor Brito

import json
from flask import Blueprint, request
from google.cloud import datastore

gcloud_bp = Blueprint('gcloud_bp', __name__)

@gcloud_bp.route('/api/gcloud/', methods=['GET','POST'])
def handler():
    # Get credential from enviroment variable
    client = datastore.Client() 
    # request is a global object we can use to pull apart data sent to us
    if request.method == 'GET':
        query = client.query(kind='Deaths')
        query_iter = query.fetch()
        data = []
        for item in query_iter:
            data.append(item)
        return json.dumps(data)

    elif request.method == 'POST':
        task = datastore.Entity(key=client.key('Deaths'))
        temp = json.loads(request.data)
        task['Date'] = temp['Date']
        for element in temp['DeathInfo']:
            for key, value in element.items():
                task[key] = value
            client.put(task)
            task = datastore.Entity(key=client.key('Deaths'))  
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 

    # HTTP headers in/out
    request.headers
