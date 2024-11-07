import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['263716394979', '𝑪𝒓𝒐𝒏𝒆𝒃', true], 
  ['263716394979', '𝑻𝒄𝒓𝒐𝒏𝒆𝒃 𝑯𝒂𝒄𝒌𝒙', true],
  ['263716394979', '𝐓𝐜𝐫𝐨𝐧𝐞𝐛 -(𝐇𝐚𝐜𝐤𝐱)', true], 
  ['263716394979', '𝚃𝚌𝚛𝚘𝚗𝚎𝚋 ⚡', true],
  ['263716394979', '𝙷𝚊𝚌𝚔𝚡', true],
  ['263716394979', '𝚃𝚌𝚛𝚘𝚗𝚎𝚋 𝙷𝚊𝚌𝚔𝚡', true]
] 

global.mods = ['263779042976'] 
global.prems = ['263779042976']
global.allowed = ['263779042976']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝙸𝙱𝙱𝙾𝚃-𝚇𝙼𝙳-𝚅10'
global.premium = 'true'
global.packname = '𝚆𝙾𝚁𝙻𝙳 𝙾𝙵 𝚃𝙴𝙲𝙷 TEAM' 
global.author = '@TcronebHackx-Md' 
global.menuvid = 'https://telegra.ph/file/325630f66abc968eda8e2.mp4'
global.igfg = '▢✓ Follow Our https://chat.whatsapp.com/LqD6utmLF699JIW9R82O95\n' 
global.dygp = 'https://chat.whatsapp.com/LqD6utmLF699JIW9R82O95'
global.fgsc = 'https://github.com/Dark-Town/Gangster' 
global.fgyt = 'https://youtube.com/@cbf_263'
global.fgpyp = 'https://youtube.com/@cbf_263'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./Gangster.jpg')

global.wait = '*🕣 _𝙸𝙱𝙱𝙾𝚃-𝚇𝙼𝙳-𝚅10 IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
