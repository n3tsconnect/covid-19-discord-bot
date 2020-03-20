const axios = require('axios');

module.exports = {
    name: 'info',
    description: "Shows you useful information surrounding COVID-19 recommended by the bot's author.",
    usage: '',
    execute(message, args) {

        const infoEmbed = {
            color: 0x0099ff,
            title: 'Recommended Resources',
            author: {
                name: 'Information on COVID-19',
            },
            description: 'Here are some recommended and up to date resources on the situation regarding the 2019-2020 COVID-19 Outbreak:'
            + '\n\n **General Information:**'
            + '\n [A Compact and Concise PSA on COVID-19 (source: u/ilikelegoandcrackers from r/Canada)](https://www.reddit.com/r/canada/comments/fghd23/psa_regarding_covid19_a_warning/)'
            + '\n\n [WHO Informational Page on COVID-19](https://www.who.int/emergencies/diseases/novel-coronavirus-2019)'
            + '\n\n [CDC Informational Page on COVID-19](https://www.cdc.gov/coronavirus/2019-ncov/index.html)'
            + '\n\n [Regional Information (Indonesia) - KAWALCOVID19](https://kawalcovid19.id/)'
            + '\n\n [Regional Information (Indonesia) - Govt. Information Site on COVID-19](https://www.covid19.go.id/)'
            + '\n\n [Regional Information (Indonesia) - Jakarta Govt. COVID-19 Site](https://corona.jakarta.go.id/id)'
            + '\n\n [Regional Information (Indonesia) - Jabar Govt. COVID-19 Site](https://pikobar.jabarprov.go.id/)'

            + '\n\n **Interactive Maps:**'
            + '\n [John Hopkins University Global Interactive Map](https://coronavirus.jhu.edu/map.html)'
            + '\n\n [Channel News Asia Global Interactive Map](https://infographics.channelnewsasia.com/covid-19/map.html)'

            
            + '\n\n **More information might be added to this command later.**'
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