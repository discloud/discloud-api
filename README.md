# Discloud-API
This is a unofficial NPM Package of Discloud API.

# How to Use
```js
...
const api = new DiscloudAPI('Your Token')
```

# Functions

<dl>
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

<a name="get"></a>

## get(bot_id) ⇒ <code>Promise.&lt;(GetBot\|void)&gt;</code>
Get data of a bot.

**Kind**: global function
**Author**: GardZock

| Param | Type | Description |
| --- | --- | --- |
| bot_id | <code>string</code> | ID of Bot |

<a name="logs"></a>

## logs(bot_id) ⇒ <code>Promise.&lt;(BotLogs\|void)&gt;</code>
Get log of a bot.

**Kind**: global function
**Author**: GardZock

| Param | Type | Description |
| --- | --- | --- |
| bot_id | <code>string</code> | ID of Bot |

<a name="restart"></a>

## restart(bot_id) ⇒ <code>Promise.&lt;(BotRestart\|void)&gt;</code>
Restart the bot.

**Kind**: global function
**Author**: GardZock

| Param | Type | Description |
| --- | --- | --- |
| bot_id | <code>string</code> | ID of Bot |