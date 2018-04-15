block('grid')({
    content: (node) => {
        return node.data.gridData.map((card) => {
            if (card.description) {
                card.description = card.description.substr(0, 255 + card.description.substr(255).indexOf(' ')).trim();
            }
            return {
                elem: 'card',
                content: card,
                elemMods: card.description ? {
                    size: card.size
                } : {
                    size: card.size,
                    description: 'no'
                },
                mix: {
                    block: 'card'
                }
            };
        });
    }
})