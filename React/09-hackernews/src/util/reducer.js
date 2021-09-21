export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: true }
    }
    case "SET_NEWS": {
      return {
        ...state,
        loading: false,
        nbPages: action.payload.nbPages,
        news: action.payload.hits,
      }
    }
    case "SET_QUERY": return {
      ...state,
      query: action.payload
    }
    case "HANDLE_SEARCH": {
      return {
        ...state,
        query: action.payload,
        page: 0
      }
    }
    case "CHANGE_PAGE": {
      let newPage = state.page
      if (action.payload === "inc") {
        newPage = state.page + 1
        console.log(newPage);
        if (newPage > state.nbPages) {
          newPage = 0
        }
        } else {
          newPage = state.page - 1
          if (newPage < 0) {
            newPage = state.pages - 1
          }
        }
      }
        return {
          ...state,
          page: newPage
        }
    case "REMOVE_STORY": {
      const newhits = state.hits.filter((hit) => hit.objectID !== action.payload)
      return {
        ...state,
        hits: newhits,
      }
    }
  }
}