const Tree = require('./commonAncestor');

xdescribe('Common Ancestor', () => {

  it('should get ancestor path between two nodes', () => {
    var greatGrandma = new Tree();
    var grandma = new Tree();
    greatGrandma.addChild(grandma);

    var mom = new Tree();
    grandma.addChild(mom);

    var me = new Tree();
    mom.addChild(me);

    expect(greatGrandma.getAncestorPath(me)).toStrictEqual([greatGrandma, grandma, mom, me]);
    expect(grandma.getAncestorPath(me)).toStrictEqual([grandma, mom, me]);
    expect(mom.getAncestorPath(me)).toStrictEqual([mom, me]);
    expect(me.getAncestorPath(me)).toStrictEqual([me]);
  });

  it('should return null if no ancestor path exists between two nodes', () => {
    var me = new Tree();
    var stranger = new Tree();
    expect(me.getAncestorPath(stranger)).toBe(null);
  });

  it('should get the closest common ancestor between two nodes', () => {
    var grandma = new Tree();
    var mom = new Tree();
    grandma.addChild(mom);
    var me = new Tree();
    var brother = new Tree();
    mom.addChild(me);
    mom.addChild(brother);

    expect(grandma.getClosestCommonAncestor(me, brother)).toStrictEqual(mom);
  });

  it('should return null if no common ancestor exists between two nodes', () => {
    var me = new Tree();
    var stranger = new Tree();
    expect(me.getClosestCommonAncestor(me, stranger)).toBe(null);
  })

});