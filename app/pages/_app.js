import Head from "next/head";
import Script from "next/script";
import React, {Component} from 'react';
import Navbar from "../components/Navbar";
import '../styles/globals.css'
import { Schema } from '../utils/schema';
const _ = require('lodash'); 
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class MyApp extends Component {

  constructor(props) {
    super(props);
    this.nukeDB = this.nukeDB.bind(this);
    this.upsert = this.upsert.bind(this);
    this.insert = this.insert.bind(this);
    this.findAll = this.findAll.bind(this);
    this.handleBookingsChange = this.handleBookingsChange.bind(this);
    this.state = {
      db: {},
      bookings: [],
    };
  }
  
  async createDatabase() {
    // if (_.isEmpty(this.state.db)){
    try {
      const db = await createRxDatabase({
        name: dbName,
        storage: getRxStorageDexie()
      });
      await db.addCollections({
        bookings: {
          schema: Schema
        },
      });
      console.log("created")
      // this.setState({db: db})
      return db; 
    } catch (error) {
      console.error(error)
    }
    // }
  }

  handleBookingsChange(b) {
    this.setState({bookings: b})
  }

  async insert({pitchId, startTime, playersCount, totalAmount}) {
    console.log("inserting")
    try {
      let data = {
        "pitchId": pitchId,
        "startTime": startTime,
        "playersCount": playersCount,
        "totalAmount": totalAmount
      }
      const res = await fetch("/api/bookings/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    console.log('finding all bookings')
    try {
      var res = await fetch("/api/bookings/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      res = await res.json()
      this.setState({bookings: res["bookings"]})
      console.log(res)
      return res["bookings"]
    } catch (error) {
      console.error(error)
    }
    // try {
    //   const result = await this.db.bookings.find().exec()
    //   const bookings = []
    //   result.map(booking => {
    //     bookings.push({total: booking.total, players: booking.players, playersCount: booking.playersCount, startTime: booking.startTime, pitchId: booking.pitchId, bookingId: booking.bookingId})
    //   })
    //   console.log(bookings)
    //   this.setState({"bookings": bookings})
    //   return bookings
    // } catch (error) {
    //   console.error(error)
    // }
  }

  async nukeDB() {
    // if (!(_.isEmpty(this.state.db))){
    try {
      console.log("Doing")
      localStorage.setItem("bookings", "[]")
      localStorage.setItem("updateBookings", true)
      await this.db.remove()
      const db = await createRxDatabase({
        name: dbName,
        storage: getRxStorageDexie()
      });
      await db.addCollections({
        bookings: {
          schema: Schema
        },
      });
      this.db = db
    } catch (error) {
      console.error(error)
    }
    console.log("done")
    // }
  }

  async upsert({pitchId, startTime, playersCount, players}){
    console.log("upserting")
    // if (!(_.isEmpty(this.state.db))){
    // console.log("upserting")
    // try {
    //   const res = await this.db.bookings.upsert({pitchId: pitchId,
    //     startTime: startTime,
    //     playersCount: playersCount,
    //   players: players})
    //   console.log(res)
    //   const bookings = await this.findAll()
    //   localStorage.setItem("bookings", JSON.stringify(bookings))
    // } catch (error) {
    //   console.error(error)
    // }
    // }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
          <link rel='manifest' href='/manifest.json' />
        </Head>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <Navbar nukeDB = {this.nukeDB} state = {this.state} />
        <Component  bookings={this.state.bookings} onBookingsChange = {this.handleBookingsChange} upsert = {this.upsert} findAll = {this.findAll} insert = {this.insert}  rootState={this.state}/>
      </>
    );
  }
}

export default MyApp;
