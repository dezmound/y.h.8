block('root')({
    replace: () => {
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
            ]
        });
    }
});