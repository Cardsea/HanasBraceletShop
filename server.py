from http.server import HTTPServer, SimpleHTTPRequestHandler
import webbrowser
import os

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler):
    server_address = ('', 8000)  # '' means localhost
    httpd = server_class(server_address, handler_class)
    print("✨ Server started at http://localhost:8000")
    print("🎀 Press Ctrl+C to stop the server")
    webbrowser.open('http://localhost:8000')  # Open in your browser
    httpd.serve_forever()

if __name__ == '__main__':
    run() 