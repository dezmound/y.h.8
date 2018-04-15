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
            ]
        });
    }
});