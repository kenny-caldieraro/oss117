# OSS 117, Best punchline
## Le Caire, nid d'API

The website for test [https://oss117.click](https://oss117.click)
Is now avaible on [tor](http://s7uytyfrx25df27bodgbtj7zz54onc3li7oy535shwdx7my3q5fquqyd.onion/)

## Database

I use mysql and sequelize for gestion of the database.
# API

End Points : 
```
https://oss117.click/api/v1/quote/random
https://oss117.click/api/v1/quote/all
https://oss117.click/api/v1/quote/:id
https://oss117.click/api/v1/perso/["name"]
```

Response example :
```json
{
	"id": 42,
	"content": "Je n'y suis pour rien. C'est l'inexpugnable arrogance de votre beauté qui m'asperge.",
	"author": "Hubert Bonnisseur de la Bath (alias OSS 117)",
	"film": "OSS 117 : Rio ne répond plus"
}
```
