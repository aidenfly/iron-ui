import React from 'react';
import { VirtualTree } from '../components';

function dig(path = '0', level = 2) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const id = `${path}-${i}`;
    const treeNode = {
      value: id,
      id,
    };

    if (level > 0) {
      treeNode.children = dig(id, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

export default {
  title: 'Components/VirtualTree',
  component: VirtualTree,
  decorators: [
    (Story) => (
      <div style={{ width: 300, height: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const Primary = () => <VirtualTree treeData={treeData} />;

export const Checkable = () => (
  <VirtualTree
    checkable
    treeData={treeData}
    onCheck={(checkedKeys, info) => {
      console.log('Checkable -> info', info);
      console.log('Checkable -> checkedKeys', checkedKeys);
    }}
  />
);

export const DefaultExpandAll = () => (
  <VirtualTree defaultExpandAll treeData={treeData} />
);