import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {
    state = {
        jokes: [],
    };

    componentDidMount() {
        axios.get('/jokes').then(res => {
            this.setState({jokes: res.data.jokes});
        });
    }

    render () {
        return (
            <>
                <h3>Dad Jokes!</h3>
                <div className="jokeList"> 
                    {this.state.jokes.map(joke => (
                        <h5 key={joke.id}>{joke.joke}</h5> 
                    ))}
                </div>

            </>
        );
    }

   

}

export default requiresAuth(Jokes);