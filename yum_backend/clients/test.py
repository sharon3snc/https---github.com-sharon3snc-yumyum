import requests

endpoint= 'http://localhost:8000/yum/1'

#endpoint_add= 'http://localhost:8000/yum/create'

#response= requests.post(endpoint_add, json={})

#response = requests.get(endpoint)

#endpoint_update = 'http://localhost:8000/yum/update/8'

#response = requests.patch(endpoint_update, json=update_data)

response = requests.get (endpoint)
print(response.json())

