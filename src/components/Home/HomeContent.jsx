import s from './home.module.sass'
import Post from './PostsWall/PostsWall.jsx';
import Friends from './Friends/Friends.jsx';
import HomeForm from './HomeForm/HomeForm.jsx';
import React from 'react';


class HomeContent  extends React.PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state
    // }

    render() {
        return (
            <>
                <div className={s.Home__friends}>
                    <h2 className={s.friendWrapper__heading}>Friends</h2>
                    <Friends friends={this.props.friends} />
                </div>
    
                <div className={s.Home__wall}>
    
                    <div className={s.Home__wall__form}>
                        <HomeForm addPost={this.props.addPost} />
                    </div>
    
                    <Post
                        postData={this.props.postData}
                        likeUp={this.props.likeUp}
                        postComments={this.props.postComments}
                    />
    
                </div>
            </>
        )
    }
}

export default HomeContent;