import React from "react";
import UserInfo from "./UserInfo";
import Post from "./post";
import Albums from "./album";
import { connect } from "react-redux";
import { getUserInfo, getUserPosts } from "../services";
import { Tabs, Icon } from 'antd';
const { TabPane } = Tabs;

class Blogs extends React.Component {
    componentDidMount() {
        this.props.fetchUserInfo(1);
        this.props.fetchUserPosts(1);
    }
    render() {
        return (
            <>
                <UserInfo userinfo={this.props.userInfo} />
                <Tabs>
                    <TabPane tab={
                        <span>
                            <Icon type="message" theme="twoTone" />
                            Posts
                   </span>
                    }
                    key="1">
                        {this.props.posts.map((post, index) => <Post key={index} postInfo={post} />)}
                    </TabPane>
                    <TabPane tab={
                        <span>
                            <Icon type="picture" theme="twoTone" twoToneColor="#eb2f96" />
                            Albums
                        </span>
                    }  key="2">
                        <Albums/>
                     </TabPane>
                </Tabs>
                {/* {this.props.posts.map((post, index) => <Post key={index} postInfo={post}/>)} */}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    fetchUserInfo: (userId) => dispatch(getUserInfo(userId)),
    fetchUserPosts: (userId) => dispatch(getUserPosts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);