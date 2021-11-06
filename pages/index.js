import React from "react";
import MeetupList from '../components/meetups/MeetupList';
import {Fragment} from 'react';

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "First Meetup",
        image: "https://www.govilnius.lt/images/5e1ee12e36de74801a7b3158?w=750&h=500&fit=contain",
        address: "This is the first meetup."
    }
]

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
