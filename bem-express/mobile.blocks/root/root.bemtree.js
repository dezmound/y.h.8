block('root')({
    replace: () => {
        const oldContext = applyNext();
        return Object.assign({}, oldContext, {
            styles: [
                {
                    elem: 'css',
                    url: '/mobile.min.css'
                }
            ],
            scripts: [
                {
                    elem: 'js',
                    url: '/mobile.min.js'
                }
            ],
            head: [
                ...oldContext.head,
                {
                    tag: 'style',
                    content: `
                    @media screen and (max-width: 1280px) {
                        html {
                            font-size: 10px;
                        }
                    }
                    @media screen and (max-width: 988px) {
                        html {
                            font-size: 9px;
                        }
                    }
                    @media screen and (max-width: 748px) {
                        html {
                            font-size: 9px;
                        }
                    }
                    @media screen and (max-width: 442px) {
                        html {
                            font-size: 13px;
                        }
                    }
                    `
                }
            ]
        });
    }
});