import requests

endpoint= 'http://localhost:8000/api/yum/'
response= requests.get(endpoint)

print(response.json())
