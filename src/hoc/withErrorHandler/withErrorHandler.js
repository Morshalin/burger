import React,{Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxs from '../Auxs/Auxs';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptors = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }
        /* 10. Burger Builder Project Accessing a Server leactue 9 */
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.request.eject(this.resInterceptors);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render(){
            return (
                <Auxs>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxs>
            );
        }
    }
}

export default withErrorHandler
