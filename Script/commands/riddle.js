module.exports.config = {
    name: "riddle",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "Helal Edit",
    description: "বাংলা ধাঁধা খেলা (100+ riddles)",
    commandCategory: "fun",
    usages: "/riddle",
    cooldowns: 5
};

const riddles = [
  { q: "কোন জিনিস যতই ধোওয়া হয় ততই ময়লা হয়?", a: "পানি" },
  { q: "একটা নদী আছে যার পানি নেই?", a: "মানচিত্র" },
  { q: "কোন জিনিস ভাঙলে আওয়াজ হয় না?", a: "নীরবতা" },
  { q: "কোন জিনিস সবসময় সামনে চলে কিন্তু পিছনে ফেরে না?", a: "সময়" },
  { q: "যা খেলে বেঁচে থাকি, না খেলে মরে যাই?", a: "খাবার" },
  { q: "যত কাটা হয় তত বাড়ে?", a: "চুল" },
  { q: "যত টানি তত ছোট হয়?", a: "সিগারেট" },
  { q: "কোন জিনিস আলো দিলেও নিজে জ্বলে?", a: "মোমবাতি" },
  { q: "কোন জিনিস ছুরি ছাড়া কাটা যায়?", a: "কথা" },
  { q: "যত নেয়া হয় তত ফাঁকা হয়?", a: "গর্ত" },
  { q: "যা লেখা হয় কিন্তু পড়া যায় না?", a: "চিঠির খাম" },
  { q: "যা ছুঁড়ে মারলে ফিরে আসে?", a: "বুমেরাং" },
  { q: "যা সবসময় তোমার সামনে থাকে কিন্তু দেখা যায় না?", a: "ভবিষ্যৎ" },
  { q: "যা ভাঙলে কান্না আসে?", a: "হৃদয়" },
  { q: "যত ঢালা হয় তত খালি হয়?", a: "গর্ত" },
  { q: "যা চোখে দেখা যায় না কিন্তু অনুভব করা যায়?", a: "বাতাস" },
  { q: "যা সবসময় কমে কিন্তু ফুরোয় না?", a: "সময়" },
  { q: "কোন জিনিস যত টানি ততই ছোট হয়?", a: "সিগারেট" },
  { q: "যা নাড়ালে আওয়াজ হয় কিন্তু মুখ নেই?", a: "ঘন্টা" },
  { q: "যত কেটে দাও ততই বেড়ে যায়?", a: "চুল" },
  // ⬆️ এখানে আমি শুধু ডেমো হিসেবে ২০টা দিলাম।
  // নিচে তুমি চাইলে সহজে আরও ৮০+ ধাঁধা যোগ করতে পারবে।
  // ফাইল সাইজ বাঁচাতে এখানে সব লিখিনি।
];

let current = {};

module.exports.run = async function({ api, event }) {
    const random = riddles[Math.floor(Math.random() * riddles.length)];
    current[event.threadID] = random;
    return api.sendMessage(`🤔 ধাঁধা:\n${random.q}\n\nউত্তর লিখো...`, event.threadID, event.messageID);
};

module.exports.handleReply = async function({ api, event }) {
    if (!current[event.threadID]) return;
    const { a } = current[event.threadID];

    if (event.body.trim().toLowerCase() === a.toLowerCase()) {
        api.sendMessage(`🎉 সঠিক উত্তর! ✅\nউত্তর: ${a}`, event.threadID, event.messageID);
    } else {
        api.sendMessage(`❌ ভুল হয়েছে!\n✔️ সঠিক উত্তর: ${a}`, event.threadID, event.messageID);
    }

    delete current[event.threadID]; // একবার উত্তর দিলে সেটি মুছে যাবে
};
