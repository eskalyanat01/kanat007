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
          title: 'Iphone 12 mini',
          image: "./img/12mini.jpg",
          desc: "-----",
          category: "Phone",
          price: "450"
        },
        {
          id: 2,
          title: 'Iphone xr',
          image: "./img/xr.webp",
          desc: "-----",
          category: "Phone",
          price: "300"
        },
        {
          id: 3,
          title: 'Mac 13 air',
          image: "./img/mac.jpg",
          desc: "-----",
          category: "Notebook",
          price: "1000"
        },
        {
          id: 4,
          title: 'Ipad pro 11',
          image: "./img/ipad.jpeg",
          desc: "-----",
          category: "Ipad",
          price: "800"
        },
        {
          id: 5,
          title: 'Magsafe PowerBank',
          image: "./img/mag.webp",
          desc: "-----",
          category: "Powerbank",
          price: "150"
        },
        {
          id: 6,
          title: 'Apple watch series 10',
          image: "./img/watch.webp",
          desc: "-----",
          category: "Watch",
          price: "1350"
        },

        {
          id: 7,
          title: 'Adapter',
          image: "./img/adapter.jpg",
          desc: "-----",
          category: "Adapter",
          price: "70"
        },

        {
          id: 8,
          title: 'Airpods Pro',
          image: "./img/pods.jpg",
          desc: "-----",
          category: "Headphone",
          price: "230"
        },

        {
          id: 9,
          title: 'Apple watch SE',
          image: "./img/watchh.jpg",
          desc: "-----",
          category: "Watch",
          price: "950"
        },

        {
          id: 10,
          title: 'Mac air 15',
          image: "./img/macc.jpg",
          desc: "-----",
          category: "Notebook",
          price: "1200"
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
