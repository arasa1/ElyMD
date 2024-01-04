import schedule from 'node-schedule'
import fs from 'fs'

const handler = async(m, { conn, usedPrefix, command, text }) => {
	const jadwal = '0 0 * * *'
	const tugas = schedule.scheduleJob(jadwal, function(){
		try {
			conn.sendMessage(`6285939205982@s.whatsapp.net`, { document: fs.readFileSync('./database.json'), fileName: 'database.json', mimetype: 'application/json' }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply('terjadi kesalahan, cek logs.')
		}
	})
}

handler.command = /^(backuprutinelymdsetiapjamduabelasmalam)$/i
handler.ownerr = true
export default handler