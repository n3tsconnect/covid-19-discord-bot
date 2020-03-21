let Parser = require('rss-parser');
let parser = new Parser();

async function fetchNews() {
    let feed = await parser.parseURL('https://www.google.com/alerts/feeds/15738974781573980486/16376531169866296765')
    return feed;
}


module.exports = {
	name: 'berita',
    description: 'This command will show you the top 15 Google search results about COVID-19 (only Indonesia region).',
    usage: '<module/command>',
	execute(message, args, client) {
        var result = [];
        var page = [];
        fetchNews()
        .then((feed) => {
            var get = "";
            var berita = "";
            feed.items.forEach((item, i) => {
                get = `[${item.title}](${item.link})\n`
                result.push(get);
            })
        }).finally(() => {
            var berita = "";
            var page = 1;
            for (i = 1; i <= 15; i++) {
                berita += result[i] + "\n";
                if (i % 5 == 0 && i != 0) {
                berita = berita.replace(/<[^>]*>/g, '')
                    const beritaEmbed = {
                        color: 0x0099ff,
                        title: 'Top 15 Search Results about COVID-19 in Indonesia',
                        author: {
                            name: 'News - Sourced from Google Alerts RSS Feed',
                        },
                        description: berita,
                        footer : { text: `Page ${page}`}
                    };
                    message.channel.send({ embed: beritaEmbed });
                    berita = "";
                    page++
                }
            }
        })
    },
};