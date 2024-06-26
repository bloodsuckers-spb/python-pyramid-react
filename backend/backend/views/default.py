from pyramid.view import view_config
from pyramid.response import Response

@view_config(route_name='home', request_method='GET', renderer='json')
def get_data(request):
    data = {'message': 'Hello from Python Pyramid!'}
    return data
