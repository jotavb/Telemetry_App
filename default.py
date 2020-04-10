# Copyright (C) 2020 Vitor Brito

import os
import sys
import logging
import urllib.request
from flask import Blueprint, request

default_bp = Blueprint('default_bp', __name__)

""" Main Route - Get the index page - local or on GAE """
@default_bp.route('/', defaults={'path':''})
@default_bp.route('/<path:path>')
def vue_client( path ):
    logging.info( path )
    if os.getenv('GAE_ENV','').startswith('standard'):
        return render_template('index.html')
    elif request.method == 'POST':
        # handle the post style of request
        post_data = request.data  # json object/string posted to this route
    else:
        url = 'http://localhost:4000/{0}'.format( path )
        return urllib.request.urlopen( url ).read()