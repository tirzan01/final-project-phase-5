import React from "react"

const UserInfos = ({ user }) => {
  return (
    <div className='user-infos'>
      <h1 className='user-name'>
        {user.userName}
        <button className='followers-info-btn'>{user.followers} followers</button>
        <button className='followers-info-btn'>{user.followed} followed</button>
      </h1>
      <h4>Bio</h4>
      <h5 className='bio-box'>{user.bio} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corporis necessitatibus eveniet maiores fuga voluptatem nemo error hic. Sed necessitatibus quibusdam ratione ab officiis vitae repellendus commodi vel totam quaerat est asperiores, velit, praesentium quam consectetur deleniti? Illum quia aliquam cupiditate accusamus molestias, debitis perferendis accusantium, facere quibusdam expedita commodi.</h5>
    </div>
  )
}

export default UserInfos