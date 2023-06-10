# TZ JSN
---
Installation

```
git clone https://github.com/MaI0SerfI3unny/superhero-node-tz-JSN.git
cd superhero-node-tz-JSN
npm i
```
Setting Backend
Go to .env file and edit setting for mysql 

```
DATABASE_NAME=heroes_db
LOGIN_MYSQL=typehereloginmysql
PASSWORD_MYSQL=typeherepasswordmysql
PORT_MYSQL=typehereportmysql
HOST_MYSQL=localhost
```

```
npm run migrate
npm run seed
npm run dev
```

Setting Frontend
Go to client dir 

```
npm i
npm run dev
```

Now backend has been started on 4000 port by default and frontend on 3000 port