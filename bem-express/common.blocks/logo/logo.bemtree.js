block('logo')({
    content: (node) => {
        return {
            tag: 'img',
            attrs: node.data.logo
        }
    }
})