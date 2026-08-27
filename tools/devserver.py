#!/usr/bin/env python3
"""Local preview server for vasiliy.pro.

Same as `python3 -m http.server`, but sends no-store headers so the browser
never shows a stale page after a rebuild.

    python3 tools/devserver.py [port]
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_header(self, keyword, value):
        # Drop validators so a conditional request can never yield a 304.
        if keyword.lower() == "last-modified":
            return
        super().send_header(keyword, value)


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8123
    handler = partial(NoCacheHandler, directory=".")
    with ThreadingHTTPServer(("127.0.0.1", port), handler) as httpd:
        print(f"serving vasiliy.pro on http://localhost:{port} (no-store)")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
