block('grid').elem('card').elemMod('description', 'no')({
    content: (node, ctx) => {
        return [
            {
                tag: 'h2',
                attrs: {
                        class: 'YSText-Bold',
                        style: `color: ${ctx.content.titleColor}`
                },
                content: ctx.content.title
            },
            {
                block: 'card',
                elem: 'actions-wrapper',
                content: [
                    {
                        tag: 'img',
                        attrs: {
                            srcset: ctx.content.image ?
                            ['', '@2x', '@3x'].map(e=>ctx.content.image.replace(new RegExp(`.(png|jpg|jpeg)`,'gi'), `${e}.$1 ${e.replace(/(@|x)/ig, '') * 320 || '320'}w`))
                            .join(',')
                            : '',
                            sizes: ctx.content.image ?
                            [1, 2, 3].map(e => `(max-width: ${e * 320 - 1}px) ${e * 320}px`).join(',')
                            : '',
                        }
                    },
                    {
                        block: 'card',
                        elem: 'actions'
                    }
                ]
            }
        ]
    }
});