# Announcement Bot
By PurpleZenith

### Motivation 

This bot-webhook system is meant to keep Discord server clusters well informed of important information.

### How it works
First, the user adds the bot to the server. They then configure auth.json the bot in and add the required information. The user then creates a webhook in their servers then configures id.json and token.json. After running System.js, the user should then follow instructions found in the startup embed to send their embed.

### Technologies used
Discord API

Node.js (v12.16.3)

Discord.js, a Node.js module (v12.2.0)

### Setup
Host guild: player's guild that will host the bot

Host channel: channel in which user interacts with the bot

It is assumed that the user has enabled Developer mode in order to copy IDs.



#### Step 1: Configure  auth.json - This requires Manage Servers permission

a. Add bot to host guild

b. Select a channel that the bot has access to. This will be the host channel

c. Copy the channel's ID

d. Select auth.json (res/auth/auth.json)

e. Replace the value for token with your bot's token

f. Replace the value for hostChannelID with your current channel ID

g. (optional) Replace prefix with desired prefix. By default, it is the "+" character

#### Step 2: Configure id.json and token.json - This requires Manage Webhook permission

a. Create a webhook in the servers who you want to receive the message, and copy the webhook link

b. Replace the value for the id with your current webhook id

c. Replace the value for the token with your current webhook token

#### Step 3: Sending messages

a. Run System.js with node. If the run is successful, an embed will be in the host channel

b. You will need to write your embed. For more information on how to write an embed, please see Discord and Discord.js documentation

c. System.js will automatically pick the file named embed.js

d. Additional instructions available upon running System.js
