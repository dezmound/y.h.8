block('root')({
    replace: () => {
        const oldContext = applyNext();
        return Object.assign({}, applyNext(), {
            styles: [
                {
                    elem: 'css',
                    url: '/desktop.min.css'
                }
            ],
            scripts: [
                {
                    elem: 'js',
                    url: '/desktop.min.js'
                }
            ],
            head: [
                ...oldContext.head,
                {
                    tag: 'style',
                    content: `
                        @media screen and (min-width: 1280px) {
                            html {
                                font-size: 11px;
                            }
                        }
                        @media screen and (min-width: 1600px) {
                            html {
                                font-size: 15px;
                            }
                        }
                    `
                }
            ]
        });
    }
});