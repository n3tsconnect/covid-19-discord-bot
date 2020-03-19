const axios = require('axios');

module.exports = {
	name: 'cases',
    description: 'Info about coronavirus cases. If country is not specified, will return number of global COVID-19 cases.',
    usage: '<country>',
	execute(message, args) {
        console.log(args);
        if (args[0] == undefined) {
            axios.get("https://coronavirus-19-api.herokuapp.com/all").then(response => {
                data = response.data;
                const globalCases = {
                    color: 0xFF0000,
                    title: 'Global Case Count',
                    author: {
                        name: 'COVID-19 Cases',
                    },
                    description: 'Here is the latest number of COVID-19 cases around the world.'
                    ,
                    thumbnail: {
                        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Biohazard_symbol.svg/1024px-Biohazard_symbol.svg.png',
                    },
                    fields: [
                        {
                            name: 'Total Cases',
                            value: data['cases'].toLocaleString(),
                            inline: true
                        },

                        {
                            name: 'Total Deaths',
                            value: data['deaths'].toLocaleString(),
                            inline: true
                        },

                        {
                            name: 'Total Recoveries',
                            value: data['recovered'].toLocaleString(),
                            inline: true
                        }
                    ],
                    timestamp: new Date(),
        
                };
                message.channel.send({ embed: globalCases })
            })
        }
        
        else {
            var link1 = "https://restcountries.eu/rest/v2/name/" + args[0];
            var link2 = "https://coronavirus-19-api.herokuapp.com/countries/" + args[0];
            
            const request1 = axios.get(link1);
            const request2 = axios.get(link2);
            
            axios.all([request1, request2]).then(axios.spread((...responses) => {
                const data_country = responses[0].data;
                const data_covid = responses[1].data;
                console.log();

                if(typeof(data_covid) == "object") {
                    const countryCases = {
                        color: 0xFF0000,
                        title: 'Cases in ' + data_covid['country'],
                        thumbnail: {
                            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Biohazard_symbol.svg/1024px-Biohazard_symbol.svg.png'
                        },
                        author: {
                            name: 'COVID-19 Cases',
                        },
                        description: 'Here are some data of COVID-19 cases in ' + data_covid['country']
                        ,
                        fields: [
                            {
                                name: 'Total Cases',
                                value: data_covid['cases'].toLocaleString(),
                                inline: true
                            },
                            
                            {
                                name: 'Total Deaths',
                                value: data_covid['deaths'].toLocaleString(),
                                inline: true
                            },
    
                            {
                                name: 'Total Recoveries',
                                value: data_covid['recovered'].toLocaleString(),
                                inline: true
                            },
                            {
                                name: 'New Cases Today',
                                value: data_covid['todayCases'].toLocaleString(),
                                inline: true
                            },
                            {
                                name: 'Deaths Today',
                                value: data_covid['todayDeaths'].toLocaleString(),
                                inline: true
                            },
    
                            {
                                name: 'Active Cases',
                                value: data_covid['active'].toLocaleString(),
                                inline: true
                            },
                            {
                                name: 'Country Population',
                                value: data_country[0]['population'].toLocaleString(),
                                inline: true
                            },
                            {
                                name: 'Cases per one million inhabitants',
                                value: data_covid['casesPerOneMillion'],
                                inline: true
                            },
                            
                        ],
                        timestamp: new Date(),      
                    };
                    message.channel.send({ embed: countryCases })
                }
                else {
                    message.channel.send("**You have entered an invalid country!**")
                }
            })).catch((e) => {
                if (e.response.status == 404) {
                    message.channel.send("**You have entered an invalid country!**")
                }
            })
        }
    },
};