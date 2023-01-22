import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'


export default function Rightbar({profile}) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomERightBar = () => {
    return(
    <>
      <div className="eventContainer">
          <img src="assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
      </div>
      <img src="assets/ad.jpeg" alt="" className='eventImg'/>
      <h4 className="rightbarTitle">オンラインの友達</h4>
      <ul className="rightbarFriendList">
        {Users.map((user)=>(
          <Online user={user} key={user.id}/>
        ))}
      </ul>
      <p className="promotionTitle">プロモーション広告</p>
      <img src="assets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg'/>
      <p className="PromotionName">ショッピング</p>
      <img src="assets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg'/>
      <p className="PromotionName">カーショップ</p>
      <img src="assets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg'/>
      <p className="PromotionName">相澤株式会社</p>
    </>
    )
  }
  
  const ProfileRightBar = () => {
    return(
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身</span>
            <span className="rightbarInfoLey">福岡</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">相澤</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">相澤</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ? <ProfileRightBar/> : <HomERightBar/>}
      </div>
    </div>
  )
}
