from src.python.server import ReplicatePassthroughServer
from http.server import HTTPServer

server = HTTPServer(("localhost", 8080), ReplicatePassthroughServer)
server.serve_forever()