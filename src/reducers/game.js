export default (state={games: []}, action) => {
	console.log("here");
  console.log(action);
  switch(action.type) {
    case 'GAME_PAGE_LOADED':
      return {
        ...state,
        games: action.data.games,
      };
    default:
      return state;
  }
};