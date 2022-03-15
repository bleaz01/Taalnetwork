import{
    GET_POSTS,
    UNLIKE_POST,
    LIKE_POST,
    MODIFY_POST
} from  "../actions/actionTypes"

const initialState=[]

const user = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_POSTS: 
            return state.post = payload
        case LIKE_POST:
            return state.map((post)=>{
                if(post._id === payload.postId)
                return{
                    ...post,
                    likers:[payload.userId,...post.liker]
                }
                return post
            })
            case UNLIKE_POST:
                return state.map((post)=>{
                    if(post._id === payload.postId)
                    return{
                        ...post,
                        likers:post.likers.filter((id)=>id !== payload.userId)
                    }
                    return post
                })
            case MODIFY_POST:
                return state.map((post) => {
                    if (post._id === payload.postId) {
                    return {
                        ...post,
                        message: payload.message,
                    };
                    } else return post;
                });
        default: 
            return state
    }
}

export default user