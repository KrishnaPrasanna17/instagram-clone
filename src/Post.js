import React from 'react'
import Avatar from "@material-ui/core/Avatar";
function Post() {
    return (
        <div className = "post">
            <div className = "post__header">
                <Avatar
                className="post__avatar"
                alt = "Prasu"
                src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>
            
        </div>
    )
}

export default Post
