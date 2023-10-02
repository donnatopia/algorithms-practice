const reverseWords = require('./reverseWords');

xdescribe('557. Reverse Words in a String III', () => {

  it('should reverse the order of characters in each word in a sentence, while preserving whitespace and initial word order', () => {
    expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
    expect(reverseWords("God Ding")).toBe("doG gniD");
  });

});