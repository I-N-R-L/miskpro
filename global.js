const fs = require("fs")
global.owner = ["917593919575"];
global.mess = (type, m) => {
    let msg = { wait: 'Wait, in progress', owner: 'Perintah ini hanya dapat digunakan oleh Owner!', premium: 'Perintah ini hanya dapat digunakan oleh Premium!', group: 'Perintah ini hanya dapat digunakan di group!', private: 'Perintah ini hanya dapat digunakan di private chat!', admin: 'Perintah ini hanya dapat digunakan oleh admin group!', botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut', bot: 'Fitur ini hanya dapat diakses oleh Bot', dead: 'Fitur ini sedang dimatikan!', media: 'Reply media', error: "No Results Found" }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
