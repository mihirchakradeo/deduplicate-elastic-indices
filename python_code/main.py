from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)


class User(Resource):

	def get(self, name):
		print("Hello ",name)
		return 200

api.add_resource(User, "/hello/<string:name>")
app.run(debug=True)