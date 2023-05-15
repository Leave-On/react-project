
export function buildFileLoader () {

    return  {
        test: /\.(png|jpe?g|gif|woff2|woff|eot|ttf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ]
    }
}