import classes from './UserPagination.module.css';

const UserPagination = (props) => {

    return  <div className={classes.pagination}>
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
}

export default UserPagination;