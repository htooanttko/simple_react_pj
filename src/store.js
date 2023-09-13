import { createStore, action, thunk, computed } from "easy-peasy";
import api from './api/posts';

const store = createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload;
    }),

    isLoading: true,
    setIsLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    
    searchPost: '',
    setSearchPost: action((state, payload) => {
        state.searchPost = payload;
    }),

    searchResult: [],
    setSearchResult: action((state, payload) => {
        state.searchResult = payload;
    }),

    addTitle: '',
    setAddTitle: action((state, payload) => {
        state.addTitle = payload;
    }),

    addDes: '',
    setAddDes: action((state, payload) => {
        state.addDes = payload;
    }),

    editTitle: '',
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),

    editDes: '',
    setEditDes: action((state, payload) => {
        state.editDes = payload;
    }),

    postCount: computed((state) => state.posts.length),

    getPostById: computed((state) => {
        return (id) => state.posts.find(post => (post.id).toString() === id);
    }),

    savePost: thunk(async (actions, newPost, helper) => {
        const { posts } = helper.getState();
       
        try{
            const res = await api.post('/posts',newPost)
            actions.setPosts([...posts,res.data]);
            actions.setAddTitle('');
            actions.setAddDes('');
        } catch(err){
            console.log(err);
        }
    }),

    updatePost: thunk(async (actions, editPost, helper) => {
        const { posts } = helper.getState();
        const { id } = editPost;
       
        try{
            const res = await api.put(`/posts/${id}`,editPost)
            actions.setPosts(posts.map(post => post.id === id ? [...res.data] : post));
            actions.setAddTitle('');
            actions.setAddDes('');
        } catch(err){
            console.log(err);
        }
    }),

   deletePost: thunk(async (actions, id, helper) => {
        const { posts } = helper.getState();

        try{
            await api.delete(`/posts/${id}`)
            actions.setPosts(posts.filter(post => post.id !== id));
            actions.setAddTitle('');
            actions.setAddDes('');
        } catch(err){
            console.log(err);
        }
    })
});
 export default store;