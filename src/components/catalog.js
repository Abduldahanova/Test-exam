import React, { Element } from "react";


export default class Catalog extends Element {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://16.16.149.51/mentor")
            .then(res => res.json)
            .then(
               (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.course
                })
               },
               (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
               }
            )

    }
    
    
    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    {items.map(item => (
                        <p key={item.name}>
                            {item.course}
                        </p>
                    ))}
                </div>
            )
        }
    }
}
