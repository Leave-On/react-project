import { PluginItem } from "@babel/core";

export default function(): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const propsToRemove = state.opt.props || []

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name

                        if (propsToRemove.includes(nodeName)) {
                            current.parentPath.remove()
                        }
                    }
                })
            }
        },
    };
}