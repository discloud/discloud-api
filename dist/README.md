# Discloud-API
This is a unofficial NPM Package of Discloud API.

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