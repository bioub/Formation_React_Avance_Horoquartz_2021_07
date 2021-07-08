const { createStore } = require("redux");

// Fonction Pure
// - prédictive
// ex de fonction prédictive : sum(1, 2) === 3
// ex de fonction non-prédictive : Date.now() === ???
// - pas de side-effect, ne doit appeler d'API externe
// ex d'API externe : request HTTP, localStorage, geolocation
// fonction intermédiaire qui réalise un traitement sur le state => OK
// - ne modifie pas ses paramètres (state immuable)
const initialState = { count: 0 };

function reducer(state = initialState, action) {
  console.log('reducer called', action.type);
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

console.log("state initial", store.getState());

store.subscribe(() => {
  console.log("state", store.getState());
});

store.dispatch({ type: "titi" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

// const totoEl = document.createElement('toto');
// totoEl.addEventListener('titi', (event) => { event.type });
// totoEl.dispatchEvent(new Event('titi'));
