import Topic from './topic/Topic';
import classes from './Dialogs.module.css';
import TextareaContainer from './textarea/TextareaContainer';
import { Route } from 'react-router-dom';
import DialogItemContainer from '../dialogs/dialogItem/DialogItemContainer';



const Dialogs = (props) => {

    return(
        
                <div className={classes.dialogs}>
                    <div className={classes.users}>
                        <DialogItemContainer />
                    </div>
                     <div className={classes.content}>
                    <Route path={props.route}
                        render={ () => 
                            ([
                                <TextareaContainer  />,
                                <Topic userTopic={props.userTopic} />
                            ])
                            }
                    />
                     </div>
                </div>    
        )


}
export default Dialogs;