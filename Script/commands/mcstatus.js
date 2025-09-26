const { default: axios } = require("axios");

module.exports = {
  name: "mc",
  description: "Check Minecraft server status",
  usage: "/mc <server-ip>",
  async execute(bot, msg, args) {
    if (!args[0]) {
      return msg.reply("⚠️ Please give a server IP!\nExample: `/mc play.hypixel.net`");
    }

    const ip = args[0];
    const api = `https://api.mcsrvstat.us/2/${ip}`;

    try {
      const res = await axios.get(api);
      const data = res.data;

      if (!data.online) {
        return msg.reply(`❌ Server **${ip}** is Offline!`);
      }

      // Detect Java or Bedrock
      let type = "Unknown";
      if (data.ip) {
        if (data.port == 19132) type = "Bedrock";
        else type = "Java";
      }

      let reply = `✅ **Minecraft Server Status**\n\n`;
      reply += `🌐 **IP:** ${ip}\n`;
      reply += `📡 **Status:** Online\n`;
      reply += `👥 **Players:** ${data.players.online}/${data.players.max}\n`;
      reply += `🛠 **Software:** ${data.software || "Unknown"}\n`;
      reply += `🎮 **Version:** ${data.version || "Unknown"}\n`;
      reply += `🔎 **Type:** ${type}\n`;

      if (data.debug && data.debug.ping) {
        reply += `⏱ **Ping:** ${data.debug.ping} ms\n`;
      }

      if (data.country) {
        reply += `🌍 **Hosting Country:** ${data.country}\n`;
      }

      if (data.motd && data.motd.clean) {
        reply += `💬 **MOTD:** ${data.motd.clean.join(" ")}\n`;
      }

      msg.reply(reply);

    } catch (err) {
      console.error(err);
      msg.reply("⚠️ Could not fetch server details. Try again later.");
    }
  },
};
