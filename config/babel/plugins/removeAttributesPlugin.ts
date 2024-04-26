import { PluginItem } from '@babel/core';

export const removeAttributesPlugin = (): PluginItem => {
  return {
    visitor: {
      Program(path, state) {
        const attributesToRemoved = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const attrName = current.node.name;

            if (attributesToRemoved.includes(attrName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
};
