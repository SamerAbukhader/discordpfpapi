const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
app.use(express.json());
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// You might want to store this in an environment variable or something

const fetchUser = async (id, token) => {
  const response = await fetch(`https://discord.com/api/v9/users/${id}`, {
    headers: {
      Authorization: `Bot ${token}`
    }
  })
  if (!response.ok) throw new Error(`Error status code: ${response.status}`)
  return await response.json()
}

async function main(id, token){
    let avatar = await fetchUser(id, token);
    let link =  await `https://cdn.discordapp.com/avatars/${id}/${avatar["avatar"]}?size=512`
    return link
}

app.post('/api/getpfp', async (req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    const discordid = req.query["id"]
    const token = req.query["token"]
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
    res.send(await main(discordid, token))
})

//PORT
const port =  process.env.PORT || 3000
app.listen(port, () => console.log(`Listening On Port ${port}...`))
