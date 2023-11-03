const initState = {
    course: {},
    cart: [

    ],
  };
  
  const rootReducer = (state = initState, action) => {
    const listID = [...state.cart].map((e) => e.id);
    const idPayload = { ...action.payload }.id;
    console.log("listID", listID);
    console.log("a", idPayload);
    console.log([...state.cart].findIndex((e) => e.id === idPayload));
    switch (action.type) {
      case "ADD_TO_CART":
        if ([...state.cart].findIndex((e) => e.id === idPayload) >= 0) {
          alert("success");
        } else {
          return {
            ...state,
            cart: [...state.cart, action.payload],
          };
        }
        return state;
      case "REMOVE_FROM_CART":
        console.log(state);
        console.log(action.payload.id);
        const list = [...state.cart];
        const indexCourseNeedToRemove = list.findIndex(
          (course) => course.id === action.payload.id
        );
        console.log(indexCourseNeedToRemove);
        const courseListAfterRemove = list.splice(indexCourseNeedToRemove, 1);
        console.log("listcourseafterremove", courseListAfterRemove);
        // return state;
        return { ...state, cart: list };
      default:
        return state;
    }
  };
  export default rootReducer;