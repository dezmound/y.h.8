block('card').elem('actions')({
    elemMods: (node, ctx) => ctx.channel ? {'bottom': true} : {},
    content: (node, ctx) => {
        return [
            ctx.channel ? {
                block: 'card',
                elem: 'channel',
                mix: {
                    block: 'channel'
                },
                content: ctx.channel
            } : {},
            {
                block: 'card',
                elem: 'more',
                mix: {
                    block: 'more'
                }
            },
            {
                block: 'card',
                elem: 'like',
                mix: {
                    block: 'like'
                }
            },
        ];
    }
})