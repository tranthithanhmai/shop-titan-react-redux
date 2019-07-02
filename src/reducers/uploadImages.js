import * as types from '../constants/ActionType';
var initialState = [];

// var findIndex = (uploadImages, id) => {
//     var result = -1;
//     uploadImages.forEach((uploadImage, index) => {
//         if (uploadImage.id === id) {
//             result = index;
//         }
//     });
//     return result;
// }
const uploadImages = (state = initialState, action) => {
  // var index = -1;
  switch (action.type) {
    case types.ADD_IMAGES:
      state.push(action.uploadImages);
      return [...state];
    // case types.UPDATE_IMAGES:
    //     console.log('action : ', action);
    //     index = findIndex(state, uploadImages.id);
    //     state[index] = uploadImages;
    //     return [...state];
    default: return [...state];
  }
};

export default uploadImages;