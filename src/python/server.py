from http.server import BaseHTTPRequestHandler
from src.python.client import get_image
import json

class ReplicatePassthroughServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        content_size = int(self.headers["Content-Length"])
        body = self.rfile.read(content_size)
        body_json = json.loads(body.decode("utf8"))
        print(body_json)
        #image_url = get_image(body_json )
        image_url = "https://miro.medium.com/max/612/1*-yjXo32koJRgQ4alESxNXg.jpeg"
        self.send_response(200, "ok")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Access-Control-Allow-Origin", "http://localhost:3000")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Content-Length", f"{len(image_url)}")
        self.end_headers()
        self.wfile.write(image_url.encode("utf-8"))
    
    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Access-Control-Allow-Origin", "http://localhost:3000")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.end_headers()