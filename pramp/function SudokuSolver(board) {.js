 function SudokuSolver(board) {
    this.board = board;
  };
  
  SudokuSolver.prototype.solve = function() {
    var index = this.indexOf('0');
    if (!index) return this.board;
  
    for (var possibility = 1; possibility < 10; possibility++) {
      this.board = this.setCharAt(this.board, index, possibility.toString());
      if (this.validBoard(index)) {
        if (this.solve()) return this.board;
      }
    }
    this.board = this.setCharAt(this.board, index, '0');
    return false;
  };
  
  SudokuSolver.prototype.validBoard = function(index) {
    return this.invalidRow(index) &&
           this.invalidCol(index) &&
           this.invalidBox(index);
  }
  
  SudokuSolver.prototype.invalidRow = function(index) {
    var row = Math.floor(index / 9),
        start = row * 9,
        end = start + 9;
  
    for (var checkIndex = start; checkIndex < end; checkIndex++) {
      if (this.invalidCell(checkIndex, index)) return true;
    }
  
    return false;
  }
  
  SudokuSolver.prototype.invalidCol = function(index) {
    var col = index % 9;
  
    for (var colStart = 0; colStart < 80; colStart += 9) {
      if (this.invalidCell(colStart + col, index)) return true;
    }
  
    return false;
  }
  
  SudokuSolver.prototype.invalidBox = function(index) {
    var colStart = Math.floor((index % 9) / 3) * 3,
        rowStart = Math.floor(index / 27) * 27;
  
    for (var i = 0; i < 3; i++) {
      for (var col = colStart; col < colStart + 3; col++) {
        if (this.invalidCell(col + rowStart, index)) return true;
      }
      rowStart += 9;
    }
  
    return false;
  }
  
  SudokuSolver.prototype.invalidCell = function(checkIndex, index) {
    return index !== checkIndex && this.board[index] === this.board[checkIndex];
  }
  
  SudokuSolver.prototype.setCharAt = function(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index + 1);
  }
  
  var boards = ['000000012000000003002300400001800005060070800000009000008500000900040500470006000',
  '020050700400100006800003000200008003040020500000600010002090000090000005704000900',
  '000000003001005600090040070000009050700000008050402000080020090003500100600000000',
  '120300004350000100004000000005400200600070000000008090003100500000009070000060008',
  '100000002090400050006000700050903000000070000000850040700000600030009080002000001',
  '000000039000001005003050800008090006070002000100400000009080050020000600400700000',
  '120300000400000300003050000004200500000080009060005070001500200000090060000007008',
  '003006080000100200000070004009008060030040001070200000300005000005000600980000050',
  '100000009006700020080000400000075030005002000060300000090000800600040001002500060',
  '009000400070300020800060007100800006000010070000056000300005001040000090002000700',
  '000000000000003085001020000000507000004000100090000000500000073002010000000040009',
  '000090050010000030002300700004500070800000200000006400090010000080060000005400007',
  '400030000000600800000000001000050090080000600070200000000102700503000040900000000',
  '708000300000201000500000000040000026300080000000100090090600004000070500000000000',
  '307040000000000091800000000400000700000160000000250000000000380090000500020600000',
  '000000008003000400090020060000079000000061200060502070008000500010000020405000003',
  '000000010400000000020000000000050407008000300001090000300400200050100000000806000',
  '000000012000035000000600070700000300000400800100000000000120000080000040050000600',
  '100000002090400050006000700050304000000060000000058040002000600030009080700000001',
  '000001020300040500000600007002000001080090030400000800500002000090030400006700000']
  
  for(var i = 0; i < boards.length; i++) {
    var solver = new SudokuSolver(boards[i]);
    console.log(solver.solve());
  }
    
    SudokuSolver.prototype.invalidRow = function(index){
      var row = Math.floor(index/9),
          start = row*9,
          end = start+9;
      
      for(var checkIndex = start; checkIndex<end; checkIndex++){
        if(this.invalidCell(checIndex, index))
          return true;
      }
      return false;
    }
    
    SudokuSolver.prototype.invalidCol = function(index){
      var col = index%9;
      
      for(var colStart=0; colStart<80; colStart+=9){
        if(this.invalidCell(colStart+col,index))
          return true;
      }
      return false;
    }
    
    SudokuSolver.prototype.invalidBox = function(index) {}
  