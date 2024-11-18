import{
  GET_BLOG_LIST_SUCCESS ,
  GET_BLOG_LIST_FAIL ,
  GET_BLOG_LIST_CATEGORIES_SUCCESS ,
  GET_BLOG_LIST_CATEGORIES_FAIL ,
  GET_BLOG_SUCCESS, 
  GET_BLOG_FAIL,
  GET_BLOG_SEARCH_SUCCESS,
  GET_BLOG_SEARCH_FAIL,
  GET_AUTHOR_BLOG_LIST_SUCCESS,
  GET_AUTHOR_BLOG_LIST_FAIL,
} from '../actions/blog/types'

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  // Add other fields relevant to a blog post
}

interface BlogCategory {
  id: number;
  name: string;
  // Other category-specific fields if necessary
}

// State structure
interface BlogState {
  blog_list: Post[] | null;
  blog_list_category: BlogCategory[] | null;
  author_blog_list: BlogCategory[] | null;
  filtered_posts: Post[] | null;
  post: Post | null;
  count: number | null;
  next: string | null;
  previous: string | null;
}

const initialState: BlogState = {
  blog_list: null,
  blog_list_category: null,
  author_blog_list: null,
  filtered_posts: null,
  post: null,
  count: null,
  next: null,
  previous: null,
};

// Define the action payload type
type BlogAction = {
  type: string;
  payload: {
    results: {  posts?: Post[]; };
    count?: number;
    next?: string | null;
    previous?: string | null;
    post?: Post;
  };
};


export default function blog(state= initialState , action:BlogAction){
  const  {type, payload} =  action;
  console.log(payload)
  switch (type) {
    case GET_BLOG_LIST_SUCCESS:
      return {...state, 
        blog_list: payload.results.posts, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_BLOG_LIST_FAIL:
      return {...state, 
        blog_list:  [], 
        count:      null, 
        next:       null,
        previous:   null
    }
    //change this  !!!
    case GET_AUTHOR_BLOG_LIST_SUCCESS:
      return {...state, 
        author_blog_list: payload.results.posts, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_AUTHOR_BLOG_LIST_FAIL:
      return {...state, 
        author_blog_list:  [], 
        count:      null, 
        next:       null,
        previous:   null
    }
    case GET_BLOG_LIST_CATEGORIES_SUCCESS:
      return {...state, 
        blog_list_category: payload.results.posts, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_BLOG_LIST_CATEGORIES_FAIL:
      return {...state, 
        blog_list_category:  null, 
        count:      null, 
        next:       null,
        previous:   null
    }
    case GET_BLOG_SUCCESS:
      return {...state, 
        post: payload.post
    }
    case GET_BLOG_FAIL:
      return {...state, 
        post :      null, 
    }
    case GET_BLOG_SEARCH_SUCCESS:
      return {...state, 
        filtered_posts: payload.results.posts, 
        count: payload.count, 
        next: payload.next,
        previous: payload.previous
    }
    case GET_BLOG_SEARCH_FAIL:
      return {...state, 
        filtered_posts:  null, 
        count:      null, 
        next:       null,
        previous:   null
    }
    default:
      return state      
  }
}