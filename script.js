var vm = new Vue({
  el:"#app",
  data: {
    gather: true,
    state: "Press the cards to start a game!",
    symbols:[
      {label: "spades", symbol: "♠"},
      {label: "heart", symbol: "♥"},
      {label: "spades", symbol: "♠"},
      {label: "clubs", symbol: "♣"}
    ],
    cards: [
      { id: 1, label: "spades", open: false},
      { id: 2, label: "heart", open: false},
      { id: 3, label: "spades", open: false},
      { id: 4, label: "clubs", open: false}
    ]
  },
  methods: {
    getSymbol(label){
      let result = this.symbols.find(s=>s.label==label)
      return result?result.symbol:label
    }
  }
  
})