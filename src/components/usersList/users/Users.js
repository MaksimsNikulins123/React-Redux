import classes from './Users.module.css';
import image from '../../../assets/images/Useravatar.png';



const Users = (props) => {

return <div className={classes.users}>
        <div className={classes.pagination}>
            <div className={classes.paginationList}>
                <div className={classes.paginationControl} onClick={ (e) => { props.paginationBack()}}>
                    <div className={classes.backButton}>
                        back
                    </div>
                </div>           
                    { 
                    props.pages.map( 
                    (page) => 

                    <span key={page} className={ 
                        props.currentPage === page 
                        ? 
                        classes.selectedPage 
                        : 
                        classes.unselectedPage
                    } 
                    onClick={ (e) => { props.onChangePage(page)}}>{page}</span>
                    )
                    }
               
               <div className={classes.paginationControl} onClick={ (e) => { props.paginationNext()}}>
                    <div className={classes.nextButton}>
                        next
                    </div> 
               </div>
               
            </div>
            
        </div>
         
            {
                props.users.map(
        
                    (user) => 
                    
                <div className={classes.userBlock} key={user.id}>     
                    <div className={classes.userAvatarButtonBlock}>
                        <div  className={classes.avatar}>
                           <img src={ user.photos.large == null ? image : user.photos.large } alt="Image"/>    
                        </div>
                        <div className={classes.buttonFollow}>
                        
                            { 
                                user.followed 
                                ?
                                <button onClick={ () => { props.unfollow(user.id)} } >Follow</button>
                                :
                                <button onClick={ () => { props.follow(user.id)} } >UnFollow</button>
                            }
           
                        </div>
                    </div>
                    <div className={classes.userInfoBlock}>
                        <div className={classes.userNameAndCountry}>
                            <div className={classes.userName}>
                                <span>name:</span> {user.name}
                            </div>
                            <div className={classes.userCountry}>
                                {/* {'user.location.country'} */}
                            </div>
                        </div>
                        <div className={classes.userStatusAndCity}>
                            <div className={classes.userStatus}>
                                <span>status:</span> {user.status}
                            </div>
                            <div className={classes.userCity}>
                                {/* {'user.location.city'} */}
                            </div>
                        </div>
                    </div>
                </div>
                
                )

            }
            
            
        </div>
}     
    

export default Users;