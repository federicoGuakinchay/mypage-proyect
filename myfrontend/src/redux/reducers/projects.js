import{
  GET_PROJECTS_LIST_SUCCESS ,
  GET_PROJECTS_LIST_FAIL ,
  GET_PROJECTS_LIST_CATEGORIES_SUCCESS ,
  GET_PROJECTS_LIST_CATEGORIES_FAIL ,
  GET_PROJECTS_SUCCESS, 
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SEARCH_SUCCESS,
  GET_PROJECTS_SEARCH_FAIL,
  GET_AUTHOR_LIST_SUCCESS,
  GET_AUTHOR_LIST_FAIL,
} from '../actions/projects/types'

const initialState = {
  projects_list:null,
  projects_list_category:null,
  filtered_projects:null,
  project:null,
  count:null,
  next:null,
  previous :null
}

export default function Projects(state= initialState , action){
  const  {type, payload} =  action;
  console.log(payload)
  switch (type) {
    case GET_PROJECTS_LIST_SUCCESS:
      return {...state, 
        projects_list: payload.results.Projects, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_PROJECTS_LIST_FAIL:
      return {...state, 
        PROJECTS_list:  [], 
        count:      null, 
        next:       null,
        previous:   null
    }
    case GET_PROJECTS_LIST_CATEGORIES_SUCCESS:
      return {...state, 
        projects_list_category: payload.results.Projects, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_PROJECTS_LIST_CATEGORIES_FAIL:
      return {...state, 
        projects_list_category:  null, 
        count:      null, 
        next:       null,
        previous:   null
    }
    case GET_AUTHOR_LIST_SUCCESS:
      return {...state, 
        projects_list: payload.results.projects, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_AUTHOR_LIST_FAIL:
      return {...state, 
        projects_list_category:  null, 
        count:      null, 
        next:       null,
        previous:   null
    }
    case GET_PROJECTS_SUCCESS:
      return {...state, 
        project: payload.project
    }
    case GET_PROJECTS_FAIL:
      return {...state, 
        project :      null, 
    }
    case GET_PROJECTS_SEARCH_SUCCESS:
      return {...state, 
        filtered_projects: payload.results.projects, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_PROJECTS_SEARCH_FAIL:
      return {...state, 
        filtered_projects:  null, 
        count:      null, 
        next:       null,
        previous:   null
    }
    default:
      return state      
  }
}