import React from 'react';

export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "Phone",
                    name: "Phone"
                },
                {
                    key: "Notebook",
                    name: "Notebook"
                },
                {
                    key: "Watch",
                    name: "Watch"
                },
                {
                    key: "Headphone",
                    name: "Headphone"
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
