import React,{Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import Auxs from '../../../hoc/Auxs/Auxs';


class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        //console.log(nextProps.children);
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render(){
        return (
            <Auxs>
                <Backdrop show={this.props.show} modalClosed={this.props.modalClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Auxs>
        )
    }
}

export default Modal;