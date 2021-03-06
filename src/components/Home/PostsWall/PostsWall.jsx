import Post from './Post/Post';
import s from './post.module.sass'

const PostsWall = (props) => {

    let posts = props.postData.map((post) => {
        return (
            <Post
                key={post.id}
                id={post.id}
                message={post.msg}
                likesCounter={post.likesCounter}
                img={post.img}
                likeUp={props.likeUp}
            />
        )
    })

    return(
        <div className={s.postWrapper}>
            <h2 className={s.postWrapper__heading}>"Posts wall"</h2>

            {posts}

        </div>
    )
}

export default PostsWall;