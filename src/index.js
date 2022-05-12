module.exports = {
    execute: function (message, args) {
        message.reply(`http://image.thum.io/get/${args[0]}`);
    }
}