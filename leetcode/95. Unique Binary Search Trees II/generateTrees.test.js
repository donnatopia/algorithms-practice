const generateTrees = require('./generateTrees');

xdescribe('95. Unique Binary Search Trees II', () => {

  it('Test Case 1', () => {
    const result = generateTrees(3);
    const expectedCount = 5; // There should be 5 unique BSTs with 3 nodes
    expect(result.length).toBe(expectedCount);

    // Check if one of the expected BSTs is present in the result
    const expectedRoots = [1, 2, 3]; // Possible root values for a BST with 3 nodes
    const isExpectedTreePresent = result.some(rootNode => {
      return expectedRoots.includes(rootNode.val);
    });
    expect(isExpectedTreePresent).toBe(true);
  });

  it('Test Case 2', () => {
    const result = generateTrees(1);
    const expectedCount = 1; // There should be 1 unique BST with 1 node
    expect(result.length).toBe(expectedCount);

    // Check if the expected BST is present in the result
    const expectedRoot = 1;
    const isExpectedTreePresent = result.some(rootNode => {
      return rootNode.val === expectedRoot;
    });
    expect(isExpectedTreePresent).toBe(true);
  });

  it('Test Case 3', () => {
    const result = generateTrees(0);
    const expectedCount = 0; // There should be 0 unique BST with 0 nodes
    expect(result.length).toBe(expectedCount);

    // No need for assertions since there are no expected trees
  });
});