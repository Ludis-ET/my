import { Telegraf } from "telegraf";
const TOKEN = "7837821674:AAFviGaE-Q9m9OJsTrpbWkFKcz8Q9c40pHs";
const bot = new Telegraf(TOKEN);

const web_link = "https://shopping-telegram-bot.vercel.app/"; // Your web app link
const welcomeImageUrl = "https://i.imgur.com/oe4iK5i.jpg"; // Example of a valid image URL

bot.start((ctx) => {
  const userName = ctx.from.first_name || "there";

  // Sending a personalized message with an image and inline web app button
  ctx.replyWithPhoto(welcomeImageUrl, {
    caption: `Hey ${userName}, welcome to our shopping bot!`,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Start Shopping",
            web_app: { url: web_link }, // In-app Web App button
          },
        ],
      ],
    },
  });
});

bot.launch();
