import React, { Component } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
class Documentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {}
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            this.getData();

        },1000)
    }

    getData = () => {
        fetch('./getApisList')
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then((data) => {
                        this.setState({ result: data });
                    });
                }
            )
            .catch((err) => {
                console.log('Fetch Error :-S', err);
            });
    }
    render() {
        let { result } = this.state.result;
        return (
            <div className="documentation">
                <PageTitle
                    title="APIs & Services"
                    description="Access information on how to use Forge APIs and Services"
                />
                {!result && <Loader></Loader>}

                <div className="container card__container">
                    <div className="row">
                        {
                            result && result.map((item, key) => {
                                return (
                                    <div key={key} className="col-lg-4 col-md-6 card__container--row">
                                        <Card {...item} ></Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Documentation;