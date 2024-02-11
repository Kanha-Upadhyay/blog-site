const Reducer = (state, action) => {

  switch (action.type){
    case "LOGIN_START":
      return{
        User:null,
        isFetching:true,
        error:false,
      };
    case "LOGIN_SUCCESS":
      return{
        User:action.payload,
        isFetching:false,
        error:false,
      };
    case "LOGIN_FAILURE":
      return{
        User:null,
        isFetching:false,
        error:true,
      };
    case "LOGOUT":
      return{
        User:null,
        isFetching:false,
        error:false,
      };
      default:
        return state;

  }
  // switch (action.type) {
  //   case value:
  //     
  //     return {
  //       User: null,
  //       isFetching: true,
  //       error: false,
  //     };
  //     break;
  //   case value:
  //     "";
  //     return {
  //       User: action.payload,
  //       isFetching: false,
  //       error: false,
  //     };
  //     break;
  //   case value:
  //     "LOGIN_FAILURE";
  //     return {
  //       User: null,
  //       isFetching: false,
  //       error: false,
  //     };
  //     break;


  //   default:
  //       return state;
  //     break;
  // }
};

export default Reducer;
