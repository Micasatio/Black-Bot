let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
_QuerΓ©s pasarla de la puta madre?_
       *UNETE A LOS GRUPOS DE BLACK_BOT*
       *Y TE DIVERTIRAS MAS QUE TU NOVIA EN LA CAMA DE TU AMIGO*

|GRUPO 1|π
_https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432_
|GRUPO 2|π₯΅
_https://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk_
|GRUPO 3| π»
_https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC_
|GRUPO 4|
https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrA
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
