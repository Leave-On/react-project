import webpack from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options
    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }],
    }

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

    const cssLoader = buildCssLoader(isDev)


    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    const fileLoader = buildFileLoader()

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ]
}