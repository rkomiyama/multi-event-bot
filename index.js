require("dotenv").config();
const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command("hello", ctx => ctx.reply("Hello from AWS!!!"));
bot.command("list", ctx => ctx.reply("List of events"));
bot.command("create", ctx => ctx.reply("Creates event"));
bot.command("delete", ctx => ctx.reply("Deletes event"));

exports.handler = (event, context, callback) => {
  const tmp = JSON.parse(event.body);
  bot.handleUpdate(tmp);
  return callback(null, {
    statusCode: 200,
    body: ""
  });
};
