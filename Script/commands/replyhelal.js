module.exports.config = {
  name: "autoChat",
  eventType: ["message"],
  version: "2.0.0",
  credits: "Helal",
  description: "Bot auto replies like human (Banglish + Bangla)"
};

// ====== Fixed replies (Emotion wise) ======
const replies = {
  "kemon aso": ["Alhamdulillah valo 🤲", "Ami valo, tumi? 😇", "Eto eto chill hocche 😅"],
  "valo lagse na": ["Ore vai relax nao 😌", "New kichu try koro 🔥", "Ato serious ho na boss 🙂"],
  "miss u": ["Ore vai miss kortesi 🥲", "Amio miss kori 😌", "Tor miss ta heavy 💖"],
  "pagol": ["Pagol na artist 😎", "Tui pagol re 🤭", "Pagol bolei valo lage 😅"],
  "chup": ["Thik ase 😶", "Besi kotha bolbo na 🙂", "Silent mode on 😌"],
  "bolbo na": ["Tor iccha re boss 🤐", "Bolo na ken 🥲", "Ami guess korbo 😏"],
  "hello": ["Hi 🌸", "Hello re vai 😎", "Salam 😇"],
  "salam": ["Wa Alaikum Salam 🤲", "Salam accept holo ✅", "Walaikum Salam vai 💖"],
  "bhalo na": ["Tension koiro na vai 🙂", "Sobar life e onek ups & downs thake 😌", "Tor jonno dua thaklo 🤲"],
  "ajke ki khabi": ["Biryani 😍", "Khichuri 🍲", "Cha r biscuits ☕"],
  "ki obostha": ["Eito valo 😄", "Tor jonno ready 😎", "Onk chill mood e 🌸"],
  "study": ["Korso? 📚", "Parikkhar jonno ready naki 😏", "Tui porashuna koro boss 🔥"],
  "game": ["Game kheli? 🎮", "PUBG naki FF? 😎", "Minecraft e chole asho 🧱"],
};

// ====== Random replies (Funny, Emotional, Chill) ======
const randomReplies = [
  "Hmm 🙂","Ore vai 😅","Tor matha kharap 😜","Vai chill 😎","Ki re pagol 😂",
  "Tui ekdom baje 😏","Love u vai 💖","Shanto ho 😌","Ajke weather valo 🌤️",
  "Basay chill hocche 😇","Mobile charge nai 😭","Ore baba valo thakish 🤲",
  "Tor kotha miss kortesi 😌","Sad na ho bro 💔","Life e chill korte hobe 😎",
  "Tui ekdom boss 🔥","Pagol pagol feel dicchi 🤯","Ore vai mojai moja 😄",
  "Bondhu der miss hocche 🥺","Mood off naki? 🥲","Ajke abar valo lagbe 💖",
  "Eto cute keno tui? 😳","Valo hoye ja 🙂","Ar tension nai 🔥",
  "Mojar din 🌈","Bondhu der miss 🥺","Ajke raat e chill korbo 🕺",
  "Study korte bhalo lage na 😭","Cha lagbe ☕","Game kheli? 🎮",
  "Tui ekdom hero 😎","Pagol pagol vibes 😅","Ami busy re 😐",
  "Besi kotha bolish na 🤐","Ajke abar special din 🌸","Boss tui joss 🔥",
];

// ====== Run Function ======
module.exports.run = async function({ api, event }) {
  let text = event.body?.toLowerCase();
  if (!text) return;

  // Check fixed replies
  if (replies[text]) {
    let options = replies[text];
    let reply = options[Math.floor(Math.random() * options.length)];
    return api.sendMessage(reply, event.threadID, event.messageID);
  }

  // Otherwise random reply
  let reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
  return api.sendMessage(reply, event.threadID, event.messageID);
};
