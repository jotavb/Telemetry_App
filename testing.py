# Copyright (C) 2020 Vitor Brito

from flask import Blueprint

testing_bp = Blueprint('testing_bp', __name__)

""" Testing """
@testing_bp.route("/testing/", methods=['GET'])
def test_bp():
    return "This is my blueprint test!"