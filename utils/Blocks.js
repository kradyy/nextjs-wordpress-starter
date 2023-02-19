import { v4 as uuid } from "uuid";

export const AssignIds = (blocksJSON) => {
  const blocks = JSON.parse(blocksJSON);

  //  Recursively assign ids to each blocks
  const assignId = (b) => {
    b.map((block) => {
      if (!block.id) {
        block.id = uuid();
      }

      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(blocks);

  return blocks;
};
