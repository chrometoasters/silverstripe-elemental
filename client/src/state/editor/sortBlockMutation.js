import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { query as readBlocksQuery, config as readBlocksConfig } from './readBlocksForAreaQuery';

// GraphQL query for changing the sort order of blocks
const mutation = gql`
mutation SortBlockMutation($blockId:ID!, $afterBlockId:ID!) {
  sortBlock(
    ID: $blockId
    AfterBlockID: $afterBlockId
  ) {
    ID
    IsLiveVersion
    IsPublished
  }
}
`;

const config = {
  props: ({ mutate, ownProps: { actions } }) => {
    const handleSortBlock = (blockId, afterBlockId, areaId) => mutate({
      variables: {
        blockId,
        afterBlockId,
      },
      optimisticResponse: {
        sortBlock: {
          ID: blockId,
          IsLiveVersion: false,
          __typename: 'Block',
        },
      },
      update: (store, { data: { sortBlock: updatedElementData } }) => {
        const variables = readBlocksConfig.options({ areaId }).variables;
        const cachedData = store.readQuery({ query: readBlocksQuery, variables });

        // Query returns a deeply nested object. Explicit reconstruction via spreads is too verbose.
        // This is an alternative, relatively efficient way to deep clone
        const newData = JSON.parse(JSON.stringify(cachedData));
        let blocks = newData.readOneElementalArea.Elements;

        // Find the block we reordered
        const movedBlockIndex = blocks.findIndex(block => block.ID === blockId);
        // Keep it
        const movedBlock = blocks[movedBlockIndex];
        // Update the moved block with the new details returned in the GraphQL response
        Object.entries(updatedElementData).forEach(([key, value]) => {
          // Skip the type name as this is always returned but should never change
          if (key === '__typename') {
            return;
          }

          movedBlock[key] = value;
        });
        // Remove the moved block
        blocks.splice(movedBlockIndex, 1);
        // If the target is 0, it's added to the start
        if (!afterBlockId) {
          blocks.unshift(movedBlock);
        } else {
          // Else, find the block we inserted after
          const targetBlockIndex = blocks.findIndex(block => block.ID === afterBlockId);
          // Add it back after the target
          const end = blocks.slice(targetBlockIndex + 1);
          blocks = blocks.slice(0, targetBlockIndex + 1);
          blocks.push(movedBlock);
          blocks = blocks.concat(end);
        }

        // Add it back to the full result
        newData.readOneElementalArea.Elements = blocks;
        store.writeQuery({ query: readBlocksQuery, data: newData, variables });
      },
    });
    return {
      actions: {
        ...actions,
        handleSortBlock,
      },
    };
  },
};

export { mutation, config };

export default graphql(mutation, config);
