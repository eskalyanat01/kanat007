import React, { Component } from 'react';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Items from './Components/Items';
import Categories from './Components/Categories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItems: [],
      orders: [],
      items: [
        {
          id: 1,
          title: 'Samba OG',
          image: "./img/sambaogshoes.jpg",
          desc: "-----",
          category: "Shoes",
          price: "100"
        },
        {
          id: 2,
          title: 'Real Madrid',
          image: "./img/realmadrid.jpg",
          desc: "-----",
          category: "Real Madrid",
          price: "150"
        },
        {
          id: 3,
          title: 'Shorts',
          image: "./img/shorts.jpg",
          desc: "-----",
          category: "Shorts",
          price: "25"
        },
        {
          id: 4,
          title: 'Pants',
          image: "./img/pants.jpg",
          desc: "-----",
          category: "Pants",
          price: "80"
        },
        {
          id: 5,
          title: 'Fleece',
          image: "./img/fleece.jpg",
          desc: "-----",
          category: "Fleece",
          price: "85"
        },
        {
          id: 6,
          title: 'Hoodie',
          image: "./img/hoodie.jpg",
          desc: "-----",
          category: "Hoodie",
          price: "135"
        },

        {
          id: 7,
          title: 'Spezial',
          image: "./img/spezial.jpg",
          desc: "-----",
          category: "Shoes",
          price: "110"
        },

        {
          id: 8,
          title: 'Blue Shorts',
          image: "./img/blueshorts.jpg",
          desc: "-----",
          category: "Shorts",
          price: "23"
        },

        {
          id: 9,
          title: 'Red Hoodie',
          image: "./img/redhoodie.jpg",
          desc: "-----",
          category: "Hoodie",
          price: "95"
        },

        {
          id: 10,
          title: 'RMA Shorts',
          image: "./img/rmashorts.jpg",
          desc: "-----",
          category: "Real Madrid",
          price: "60"
        },
      ]
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  componentDidMount() {
    this.setState({ currentItems: this.state.items });
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  chooseCategory(category) {
    if (category === 'All') {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({ currentItems: this.state.items.filter(el => el.category === category) });
    }
  }

  addToOrder(item) {
    const arrayId = this.state.orders.some(el => el.id === item.id);
    if (!arrayId) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.orders !== this.state.orders){
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }

}

export default App;
