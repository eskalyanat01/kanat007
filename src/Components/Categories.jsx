import React from 'react';

export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "Shoes",
                    name: "Shoes"
                },
                {
                    key: "Real Madrid",
                    name: "Real Madrid"
                },
                {
                    key: "Hoodie",
                    name: "Hoodie"
                },
                {
                    key: "Shorts",
                    name: "Shorts"
                },
                {
                    key: "All",
                    name: "All"
                }
            ]
        }
    }

    render() {
        return (
            <div className="Categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories
