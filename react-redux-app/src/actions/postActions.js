import { FETCH_POSTS, NEW_POST} from './types';


export const fetchPosts = () => dispatch => {
        //console.log('fetching');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type : FETCH_POSTS,
            payload: posts
        }
        )); 
}

export const createPost = (postsData) => dispatch => {
    console.log('create post');
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method : 'POST', 
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(postsData)
    })
    .then(res => res.json())
    .then(posts => dispatch({
        type : NEW_POST,
        payload : posts

    })
    );
}