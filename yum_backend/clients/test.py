import requests

#endpoint= 'http://localhost:8000/yum/9'

#endpoint_add= 'http://localhost:8000/yum/create'

#response= requests.post(endpoint_add, json={})

#response = requests.get(endpoint)

endpoint_update = 'http://localhost:8000/yum/update/8'

response = requests.patch(endpoint_update, json={'image': 'https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/2775/presentation_70b7decb-4011-43e8-925a-0615c389b10c.jpeg'})

#response = requests.get (endpoint_add)
print(response.json())

