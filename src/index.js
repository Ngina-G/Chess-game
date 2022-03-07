let board1 = Chessboard('board1', 'start')
let board2 = Chessboard('board2', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
  })
  
  $('#startBtn').on('click', board2.start)
  $('#clearBtn').on('click', board2.clear)