# Copyright (C) 2020 Vitor Brito

import jinja2
from flask import Flask, request, jsonify, render_template, make_response, Blueprint
from flask_cors import CORS, cross_origin

### BLUEPRINTS - MODULES ###
from default import default_bp
from generic import generic_bp
from testing import testing_bp
from gcloud import gcloud_bp

### APP - CORS ###
app = Flask(__name__) # , 'template folder path')
app.config['CORS_HEADERS'] = 'Content-Type'
app.jinja_loader = jinja2.FileSystemLoader('client/dist')
CORS(app, resources = { r"/api/*":{"origins":"*"}})

### REGISTER BLUEPRINTS ###
app.register_blueprint(default_bp)
app.register_blueprint(generic_bp)
app.register_blueprint(testing_bp)
app.register_blueprint(gcloud_bp)

### DEBUG ###
if __name__=='__app__':
    app.run( host='127.0.0.1', port=5000, debug=True )




