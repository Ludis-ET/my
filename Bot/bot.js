import { Telegraf } from "telegraf";
const TOKEN = "7837821674:AAFviGaE-Q9m9OJsTrpbWkFKcz8Q9c40pHs";
const bot = new Telegraf(TOKEN);

const web_link = "https://shopping-telegram-bot.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
