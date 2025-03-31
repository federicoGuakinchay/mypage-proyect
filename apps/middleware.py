import threading

# Store request user per thread
_request_user = threading.local()

class RequestUserMiddleware:
    """Middleware to store request.user for tracking in signals."""
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        _request_user.user = request.user if request.user.is_authenticated else None
        response = self.get_response(request)
        return response

def get_current_user():
    """Get the current request user (if available)."""
    return getattr(_request_user, "user", None)