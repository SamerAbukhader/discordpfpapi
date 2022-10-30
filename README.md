# DISCORD PROFILE API

This is an API made with **NODE.JS & EXPRESS.JS** that connects with the Discord Users API v9, and it retrieves the users **PROFILE AVATAR**!
and right now, its hosted on **HEROKU** on this [LINK](https://dashboard.heroku.com/apps/discord-profile-picture-api)

# Files
The File `index.js` is fully open source so you can read as much as you want!

# USAGE!
You make an POST request to this URL posted above or here `https://discord-profile-picture-api.herokuapp.com/api/getpfp/?id=USER-ID&token=YOUR-BOT-TOKEN` , *__THIS IS ONLY AN API NOT A WEBSITE__*
Here is a jQuery Example using `$.POST`
```js
async function getpfp(id, token){
	var avatar = $.post(`https://discord-profile-picture-api.herokuapp.com/api/getpfp/?id=${id}&token=${token}`));
	//var avatar will hold the AVATAR LINK!
}
```
In the Link on `id=USER-ID` you place in the target user id & for the `token=YOUR-BOT-TOKEN` you place the bot token obtained from the [Discord Developer Portal](https://discord.com/developers/applications)

# WEBSITE
I have made a GitHub hosted Website using this API right [HERE](https://samerabukhader.github.io/discord-profile-picture-grabber/)
