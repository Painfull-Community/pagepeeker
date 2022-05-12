module.exports = {
    execute: function (message, args) {
        message.reply({ content: `http://image.thum.io/get/${args[0]}`, allowedMentions: { parse: [] }});
    }
}