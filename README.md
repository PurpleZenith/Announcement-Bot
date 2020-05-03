# TameshiWebhooks
By CompleteTheSquare

### Motivation 

This bot-webhook system is meant to keep Discord server clusters well informed of important activities.

### How it works
First, a webhook is first set up in the server. The webhook ID and token are then extracted and placed into their respective res files.
The embed can then be altered. After this, as Main is run and the prefix is used, the embed is sent to the various servers via webhook.

### Technologies used
Discord API
Node.js (v12.16.3)
Discord.js, a Node.js module (v12.2.0)

### Setup
Host guild: player's guild that will host the bot
Host channel: channel in which user interacts with the bot

##### Step 1: Configure hostChannelID
a. Add bot to host guild.
b. Select a channel that the bot has access to. This will be the host channel.
c. Copy the channel's ID.
d. Go to res>auth>auth.json
e. Replace the value for hostChannelID with your current channel ID



#### Credits
Special thanks to UWEngSoc. 
