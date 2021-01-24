import {Route, Link} from 'react-router-dom';

import reducer from './redux/reducers';

import Counter from './containers/Counter'
import ReduxCounter from './containers/ReduxCounter'
import Converter from './containers/Converter'

import {requestMiddleware} from './redux/middlewares/request'

const counterModule = {
    reducers: {Counter: reducer},
    routers: [
        <Route exact path={'/counter'}>
            <Counter/>
        </Route>,
        <Route exact path={'/reduxCounter'}>
            <ReduxCounter/>
        </Route>,
        <Route exact path={'/converter'}>
            <Converter/>
        </Route>
    ],
    navLinks: [
        <div><Link to={'/counter'}>Counter</Link></div>,
        <div><Link to={'/reduxCounter'}>Redux Counter</Link></div>,
        <div><Link to={'/converter'}>Converter</Link></div>
    ],
    middlewares: [requestMiddleware]
};

export default counterModule;