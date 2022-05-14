module.exports = {
    execute: function (message, args, utils) {
        var cls = utils.apis["core-cls"].api;
        if(!args[0]) return message.reply(cls.getString("pagepeeker", "noargs"));
        if(!args[0].startsWith("http")) args[0] = "http://" + args[0];
        message.reply(cls.getString("pagepeeker", "wait"))
        message.channel.send({ content: `https://image.thum.io/get/${args[0]}`, allowedMentions: { parse: [] }});
    }
}