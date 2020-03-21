const { general, maps } = require('./info/info.json')
var generalInfo = ""
    mapsInfo = ""
    

module.exports = {
    name: 'info',
    description: "Shows you useful information surrounding COVID-19 recommended by the bot's author.",
    usage: '',
    execute(message, args) {
        general.forEach((info) => {
            generalInfo += `\n[${info['description']}](${info['link']})\n`
        })

        maps.forEach((info) => {
            mapsInfo += `\n[${info['description']}](${info['link']})\n`
        })

        const infoEmbed = {
            color: 0x0099ff,
            title: 'Recommended Resources',
            author: {
                name: 'Information on COVID-19',
            },
            description: 
            'Here are some recommended and up to date resources on the situation regarding the 2019-2020 COVID-19 Outbreak:'
            + '\n\n **General Information:**'
            + generalInfo
            + '\n **Interactive Maps:**'
            + mapsInfo
                
            + '\n**More information might be added to this command later.**'
            ,
            thumbnail: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnz3li3an_k7fTdPCmol2xW8HrPiVFkzqEEbtyN6NvnBvnQo0G',
            },
            fields: [
            ],
            timestamp: new Date(),

        };

        message.channel.send({ embed: infoEmbed })
    }
}