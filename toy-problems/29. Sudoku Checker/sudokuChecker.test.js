const sudokuChecker = require('./sudokuChecker');

xdescribe('29. Sudoku Checker', () => {

  it('should return \'solved\' for valid boards', () => {
    const validBoards = ["735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429", "895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214396857\n639578241", "795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538"];

    validBoards.forEach(function (board) {
      expect(sudokuChecker(board)).toBe('solved');
    });
  });

  it('should return \'invalid\' for boards with invalid rows', () => {
    const board = "111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999";

    expect(sudokuChecker(board)).toBe('invalid');
  });

  it('should return \'invalid\' for boards with valid boxes, but invalid rows/columns', () => {
    const board = "123123123\n456456456\n789789789\n123123123\n456456456\n789789789\n123123123\n456456456\n789789789";

    expect(sudokuChecker(board)).toBe('invalid');
  });

  it('should return \'invalid\' for boards with invalid boxes, but valid rows/columns', () => {
    const board = "215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156";

    expect(sudokuChecker(board)).toBe('invalid');
  });

  it('should return \'invalid\' for boards with invalid columns, but invalid rows/columns', () => {
    const board = "524698731\n967531824\n381742596\n719325648\n436871952\n258416379\n893154267\n672983415\n145267983";

    expect(sudokuChecker(board)).toBe('invalid');
  });
});
