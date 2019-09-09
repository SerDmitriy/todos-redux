const initialState = {
  todos: [
    { id: 123, value: 'some text' }
  ],
  errors: null,
  loading: false,
  success: false,
  isAuthenticated: false,
  currentUser: {},
  activeUser: {},
  users: [{}]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos].concat([action.payload]),
        loading: false,
        success: true,
        errors: null
      }
    case 'ADD_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'ADD_TODO_CLEAR':
      return {
        ...state,
        todos: [],
        loading: false,
        success: false,
        errors: null
      }
    case 'EDIT_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'EDIT_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos].map(item => item.id === action.payload.id ? action.payload : item),
        loading: false,
        success: true,
        errors: null
      }
    case 'EDIT_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'EDIT_TODO_CLEAR':
      return {
        ...state,
        todos: [],
        loading: false,
        success: false,
        errors: null
      }
    case 'DEL_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'DEL_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos].filter(item => item.id !== action.payload.id),
        loading: false,
        success: true,
        errors: null
      }
    case 'DEL_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'DEL_TODO_CLEAR':
      return {
        ...state,
        todos: [],
        loading: false,
        success: false,
        errors: null
      }
    case 'AUTH_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'AUTH_TODO_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        loading: false,
        success: true,
        errors: null
      }
    case 'AUTH_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'AUTH_TODO_CLEAR':
      return {
        ...state,
        currentUser: {},
        loading: false,
        success: false,
        errors: null
      }
    case 'FETCH_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos].filter(
          item => item.id === action.payload.id),
        loading: false,
        success: true,
        errors: null
      }
    case 'FETCH_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'FETCH_TODO_CLEAR':
      return {
        ...state,
        todos: [],
        loading: false,
        success: false,
        errors: null
      }
    case 'FETCHALL_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCHALL_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos],
        loading: false,
        success: true,
        errors: null
      }
    case 'FETCHALL_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'FETCHALL_TODO_CLEAR':
      return {
        ...state,
        todos: [],
        loading: false,
        success: false,
        errors: null
      }

    default:
      return state
  }
}