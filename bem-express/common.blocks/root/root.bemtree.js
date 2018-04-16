block('root')({
    replace: (node, ctx) => {
        const data = node.data = ctx.data;
        const meta = data.meta || {};
        const og = meta.og || {};

        if (ctx.context) return ctx.context;

        return {
            block: 'page',
            title: data.title,
            favicon: '/favicon.ico',
            styles: [
                {
                    elem: 'css',
                    url: '/index.min.css'
                }
            ],
            scripts: [
                {
                    elem: 'js',
                    url: '/index.min.js'
                }
            ],
            head: [
                { elem: 'meta', attrs: { name: 'description', content: meta.description } },
                { tag: 'link', attrs: { rel: 'stylesheet', href: 'fonts/fonts.css' } },
                { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
                { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
                { elem: 'meta', attrs: { property: 'og:site_name', content: og.siteName } },
                { elem: 'meta', attrs: { property: 'og:locale', content: og.locale || 'en_US' } },
                { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
                { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
                {
                    tag: 'style',
                    content: `
                        html {
                            font-size: 10px;
                            font-family: YSText-Regular, sans-serif;
                        }
                        body {
                            font-feature-settings: "liga", "kern";
                            box-sizing: border-box;
                        }
                        h2 {
                            font-family: YSDisplay-Heavy, sans-serif;
                            font-size: 1.9rem;
                            margin: 0 0 1rem;
                        }
                        img {
                            width: 100%;
                        }
                    `
                }
            ],
            mods: {
                view: data.view
            }
        };
    }
});
