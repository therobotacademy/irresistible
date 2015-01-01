#!flask/bin/python

"""Alternative version of the ToDo RESTful server implemented using the
Flask-RESTful extension."""

from flask import Flask, jsonify, abort, request, make_response, url_for
from flask.views import MethodView
from flask.ext.restful import Api, Resource, reqparse, fields, marshal
from flask.ext.cors import CORS
 
app = Flask(__name__, static_url_path = "")

api = Api(app)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,Accept')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

toppings = [
    {
        'id': 1,
        'title': u'Pepperoni'
    },
    {
        'id': 2,
        'title': u'Pineapple'
    }
]
 
topping_fields = {
    'title': fields.String,
    'id': fields.Integer
}

class ToppingListAPI(Resource):

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('title', type = str, required = True, help = 'No topping title provided', location = 'json')
        super(ToppingListAPI, self).__init__()
        
    def get(self):
        return { 'toppings': map(lambda t: marshal(t, topping_fields), toppings) }

    def post(self):
        args = self.reqparse.parse_args()
        topping = {
            'id': toppings[-1]['id'] + 1,
            'title': args['title'],
        }
        toppings.append(topping)
        return { 'topping': marshal(topping, topping_fields) }, 201

class ToppingAPI(Resource):
    
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('title', type = str, location = 'json')
        super(ToppingAPI, self).__init__()

    def get(self, id):
        topping = filter(lambda t: t['id'] == id, toppings)
        if len(topping) == 0:
            abort(404)
        return { 'topping': marshal(topping[0], topping_fields) }
        
    def put(self, id):
        topping = filter(lambda t: t['id'] == id, toppings)
        if len(topping) == 0:
            abort(404)
        topping = topping[0]
        args = self.reqparse.parse_args()
        for k, v in args.iteritems():
            if v != None:
                topping[k] = v
        return { 'topping': marshal(topping, topping_fields) }

    def delete(self, id):
        topping = filter(lambda t: t['id'] == id, toppings)
        if len(topping) == 0:
            abort(404)
        toppings.remove(topping[0])
        return { 'result': True }

@app.route('/')
def root():
    return app.send_static_file('index.html')

api.add_resource(ToppingListAPI, '/api/v1.0/toppings', endpoint = 'toppings')
api.add_resource(ToppingAPI, '/api/v1.0/toppings/<int:id>', endpoint = 'topping')
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 5000, debug = True)
