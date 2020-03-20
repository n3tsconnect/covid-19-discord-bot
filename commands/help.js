module.exports = {
	name: 'help',
    description: 'This command will show you details about a module/command and how to use it!',
    usage: '<module/command>',
	execute(message, args, client) {
        if(args[0] == undefined) {
            var commandlist = "";
            client.commands.forEach(function(commands) {
                commandlist = commandlist + "- " + commands.name + '\n';
            })
            message.channel.send("```Available Modules:\n" + commandlist + "```")
        }
        else {
            if (!client.commands.has(args[0])) return;
            var command_info = client.commands.get(args[0]);
            console.log(command_info)
            const helpEmbed = {
                title: "Command: " + client.prefix + command_info['name'],
                author: {
                    name: 'Module Information',
                },
                description: command_info['description'],
                fields: [
                    {
                        name: 'Usage',
                        value: client.prefix + command_info['name'] + ' ' + command_info['usage']
                    }
                ],
                timestamp: new Date(),
            };
            message.channel.send({ embed: helpEmbed })

        }
    },
};