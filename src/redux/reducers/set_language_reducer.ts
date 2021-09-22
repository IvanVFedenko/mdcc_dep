import { SET_LANGUAGE } from '../../resources/constants';

const initial_state = {
  language: 'Deutsch',
};

interface Action {
  value: string;
  type: string;
}

export const set_language_reducer = (state = initial_state, action: Action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.value,
      };
    default:
      return state;
  }
};
