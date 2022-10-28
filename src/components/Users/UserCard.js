import PropTypes from 'prop-types';

import style from './css/userCard.module.css';

export const UserCard = (props)=>{
    let userList = props.users || []
    return (

                userList.map(User=>{
                    return   <div key={User.id} className={style.profile +' col-md-6 m-2 mt-5'}>
                               <div className={style.profile__picture}>
                                    <img src={User?User.image:''} alt='' />
                               </div>
                               <div className={style.profile__header}>
                               <div className={style.profile__account}>
                                   <h6 className={style.profile__username}>{User.firstName+''+ User.maidenName  +' '+ User.lastName}</h6>
                               </div>
                               <div className={style.profile__edit}><a href='./' className={style.profile__button}>Details</a></div>
                               </div>
                               <div className={style.profile__stats}>
                               <div className={style.profile__stat}>
                                   <div className={style.profile__icon +' '+ style.profile__icon_gold}><i className="fas fa-wallet"></i></div>
                                   <div className={style.profile__value}>47</div>
                                   <div className={style.profile__key}>Wallet</div>
                               </div>
                               <div className={style.profile__stat}>
                                   <div className={style.profile__icon+' '+style.profile__icon_blue}><i className={style.fas+' '+ style.fa_signal}></i></div>
                                   <div className={style.profile__value}>357</div>
                                   <div className={style.profile__key}>Ranking</div>
                               </div>
                               <div className={style.profile__stat}>
                                   <div className={style.profile__icon +' '+ style.profile__icon_pink}><i className={style.fas+' '+ style.fa_heart}></i></div>
                                   <div className={style.profile__value}>4
                                   <div className={style.profile__key}>Lives</div>
                                   </div>
                               </div>
                        </div>
                     </div>
                   })
    )
}
UserCard.propTypes = {
    users: PropTypes.array
}

