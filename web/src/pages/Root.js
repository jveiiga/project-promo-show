import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesPromtionSearch from './Promotion/Search/Search';
import PagesPromotionForm from './Promotion/Form/Form';


const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm} />
                <Route path="/edit/:id" component={PagesPromotionForm} />
                <Route path="/" component={PagesPromtionSearch} />
            </Switch>
        </Router>
    );
};

export default Root;