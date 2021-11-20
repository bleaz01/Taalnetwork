import{
    GET_POSTS,
    UNLIKE_POST,
    LIKE_POST
} from  "../actions/actionTypes"

const initialState=[]

const user = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_POSTS: 
            console.log(payload)
            return state.post = payload
            case LIKE_POST:
               return state.map((post)=>{
                   if(post.id === payload.postId)
                   return{
                       ...post,
                       likers:[payload.userId,...post.liker]
                   }
               })
        default: 
            return state
    }
}

export default user