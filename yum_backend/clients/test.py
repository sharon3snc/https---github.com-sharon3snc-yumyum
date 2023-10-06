import requests

endpoint= 'http://localhost:8000/yum/1'

#endpoint_add= 'http://localhost:8000/yum/create'

#response= requests.post(endpoint_add, json={})

#response = requests.get(endpoint)

endpoint_update = 'http://localhost:8000/yum/update/8'

update_data= {
    'ingredients': [ 
            {'name':'Caldo de pollo', 'quantity': '200', 'unit': 'ml'},
            {'name':'Pepino', 'quantity': '1/2', 'unit': 'unid'},
            {'name':'Ajo', 'quantity': '1', 'unit': 'diente'},
            {'name':'Nata para cocinar', 'quantity': '30', 'unit': 'ml'},
            {'name':'Hummus', 'quantity': '50', 'unit': 'gr'},
            {'name':'Queso parmesano', 'quantity': '1/2', 'unit': 'taza'},
            {'name':'Pimientos en conserva', 'quantity': '100', 'unit': 'gr'},
            {'name':'Tomate', 'quantity': '2', 'unit': 'unid'},
            {'name':'Pan de pita', 'quantity': '2', 'unit': 'unid'},
            {'name':'Sal', 'quantity': '', 'unit': ''},
            {'name':'Pimienta negra', 'quantity': '', 'unit': ''},
        ],
    'instructions': [
            {'step': 1, 'describe':'Pela los ajos. Escurrir los pimientos asados. Agrega a la licuadora junto con el caldo, la crema, la sal y la pimienta. Licue la sopa hasta que quede suave, 1-2 minutos.'}, 
            {'step': 2, 'describe':'Vierta la sopa en una olla grande y cocine a fuego medio-alto, revolviendo ocasionalmente. Una vez que hierva a fuego lento, retirar del fuego.'},
            {'step': 3, 'describe':'Mientras tanto, lave, seque y corte los tomates en rodajas finas. Haz lo mismo con el pepeino. Colócalos en un plato y sazona con sal y pimienta.'},
            {'step': 4, 'describe':'Corta las pitas por la mitad y abre con cuidado los bolsillos. Unte cada bolsillo con hummus y luego rellénelo con rodajas de tomate y pepino.'},
            {'step': 5, 'describe':'Divida la sopa en tazones y espolvoree con queso parmesano; sirva con bolsillos de pita a un lado. ¡A disfrutar!'}
        ],
}

response = requests.patch(endpoint_update, json=update_data)
#response = requests.get (endpoint)
print(response.json())

