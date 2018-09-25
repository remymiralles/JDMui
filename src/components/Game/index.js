export { default as List } from './List.jsx';
export { default as Form } from './Form.jsx';

// import React from 'react';
// import axios from 'axios';
// import queryString from 'query-string'
// import { connect } from 'react-redux';


// import { List } from '../../components/Game';


// class Game extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     const { onLoad } = this.props;
//     const values = queryString.parse(this.props.location.search)
//     // console.log(values.date)
//     // console.log(this.props.location.query)
//     axios('http://localhost:3000/games?date='+values.date)
//       .then((res) => onLoad(res.data));
//   }

//   render() {
//     const { games } = this.props;
//     return (
//       <div className="container">
//         <div className="row pt-5">
//           <div className="col-12 col-lg-6 offset-lg-3">
//             <h1 className="text-center">JDM</h1>
//           </div>
//         </div>
//         <div className="row pt-5">
//           <div className="col-12 col-lg-6 offset-lg-3">
//             {games.map((game) => {
//               return (
//                 <div className="card my-3">
//                   <div className="card-header">
//                     {game.local_team.name} vs {game.visitor_team.name}

//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   games: state.game.games,
// });

// const mapDispatchToProps = dispatch => ({
//   onLoad: data => dispatch({ type: 'GAME_PAGE_LOADED', data }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Game);