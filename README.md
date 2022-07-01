# Discloud-API
This is a unofficial NPM Package of Discloud API.

[![BUILD](https://img.shields.io/github/workflow/status/GardZock/Discloud-API/CodeQL)](https://github.com/GardZock/Discloud-API/actions/workflows/codeql.yml)    [![NPM_DOWNLOADS](https://img.shields.io/npm/dm/discloud-api)](https://nodei.co/npm/discloud-api/)    [![NPM_LICENSE](https://img.shields.io/npm/l/discloud-api)](https://nodei.co/npm/discloud-api/)     [![NPM_VERSION](https://img.shields.io/npm/v/discloud-api)](https://nodei.co/npm/discloud-api/)     [![PULL_REQUESTS](https://img.shields.io/github/issues-pr/GardZock/Discloud-API)](https://github.com/GardZock/Discloud-API/pulls)

[![NPM](https://nodei.co/npm/discloud-api.png)](https://nodei.co/npm/discloud-api/)

# How to Use
```js
...
const api = new DiscloudAPI('Your Token')
```

# Functions

<dl>
<dt><a href="#userStatus">userStatus() ⇒ <code>Promise.&lt;(UserStatus|void)&gt;</code></dt>
<dd><p>Get status of user.</p>
</dd>
<dt><a href="#get">get(bot_id)</a> ⇒ <code>Promise.&lt;(GetBot|void)&gt;</code></dt>
<dd><p>Get data of a bot.</p>
</dd>
<dt><a href="#logs">logs(bot_id)</a> ⇒ <code>Promise.&lt;(BotLogs|void)&gt;</code></dt>
<dd><p>Get log of a bot.</p>
</dd>
<dt><a href="#restart">restart(bot_id)</a> ⇒ <code>Promise.&lt;(BotRestart|void)&gt;</code></dt>
<dd><p>Restart the bot.</p>
</dd>
</dl>

<a name="userStatus"></a>

## userStatus() ⇒ <code>Promise.&lt;(UserStatus\|void)&gt;</code>
Get status of user.

**Kind**: global function
**Author**: GardZock

**Example**

```js
...
const data = await <(DiscloudAPI)>.userStatus()
//Returns the user data.
```

<a name="get"></a>

## get(bot_id) ⇒ <code>Promise.&lt;(GetBot\|void)&gt;</code>
Get data of a bot.

**Kind**: global function
**Author**: GardZock

| Param | Type | Description |
| --- | --- | --- |
| bot_id | <code>string</code> | ID of Bot |

**Example**

```js
...
const bot = await <(DiscloudAPI)>.bot.get('bot id')
//Returns the bot data.
```

<a name="logs"></a>

## logs(bot_id) ⇒ <code>Promise.&lt;(BotLogs\|void)&gt;</code>
Get log of a bot.

**Kind**: global function
**Author**: GardZock

| Param | Type | Description |
| --- | --- | --- |
| bot_id | <code>string</code> | ID of Bot |

**Example**
```js
...
const logs = await <(DiscloudAPI)>.bot.logs('bot id')
//Returns the logs of bot.
```

<a name="restart"></a>

## restart(bot_id) ⇒ <code>Promise.&lt;(BotRestart\|void)&gt;</code>
Restart the bot.

**Kind**: global function
**Author**: GardZock

| Param | Type | Description |
| --- | --- | --- |
| bot_id | <code>string</code> | ID of Bot |

**Example**

```js
...
const restart = await <(DiscloudAPI)>.bot.restart('bot id')
//Returns a message if sucess, if not return a error.
```