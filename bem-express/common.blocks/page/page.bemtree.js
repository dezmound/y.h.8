block('page')({
    content: (node) => [
        {
            block: 'container',
            content: [
                {
                    block: 'logo',
                    logo: node.data.logo
                },
                {
                    block: 'grid',
                }
            ]
        },
    ]
});
