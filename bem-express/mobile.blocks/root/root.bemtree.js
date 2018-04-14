block('root')({
    replace: () => {
        return Object.assign({}, applyNext(), {
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