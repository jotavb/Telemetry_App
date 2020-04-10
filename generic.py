# Copyright (C) 2020 Vitor Brito

from flask import Blueprint, request

generic_bp = Blueprint('generic_bp', __name__)

@generic_bp.route('/api/generic/<param>', methods=['GET','POST'])
def handler( param ):
    
    #return param
    # request is a global object we can use to pull apart data sent to us
    if request.method == 'GET':
        # handle the get style of the request
        query = request.args.get('arg')  # ?arg=val&arg2=val2

    elif request.method == 'POST':
        # handle the post style of request
        post_data = request.data  # json object/string posted to this route
        return str(post_data)
    # HTTP headers in/out
    request.headers