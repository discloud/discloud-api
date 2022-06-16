# Discloud-API

- To use TS, get only archives with ".ts" and a package.json and a translate-texts.json.
- To use JS, get only ./dist archives and package.json.

- Para usar TS, pegue apenas arquivos com final ".ts" no inicio, um package.json e o translate-texts.json.
- Para usar JS, pegue apenas os arquivos da pasta "dist" e o package.json.


# How to Use
```js
...
const api = new DiscloudAPI('Your Token')
```

> User
  - [User Status](#user-status)

> Bot
  - [Get Bot](#get-bot)
  - [Get Logs of Bot](#get-logs-of-bot)
  - [Restart the Bot](#restart-the-bot)

## User Status

```js
...

const data = await (DiscloudAPI).userStatus()
//Returns the user data.
```

## BOT

### Get Bot
```js
...
const bot = await (DiscloudAPI).bot.get('bot id')
//Returns the bot data.
```

### Get Logs of Bot
```js
...
const logs = await (DiscloudAPI).bot.logs('bot id')
//Returns the logs of bot.
```

### Restart the Bot
```js
...
const restart = await (DiscloudAPI).bot.restart('bot id')
//Returns a message if sucess, if not return a error.
```