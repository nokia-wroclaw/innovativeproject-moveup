const express = require("express");
const events = express.Router();
const cors = require('cors');

const Event = require("../models/Event");
events.use(cors())


events.post('/addEvent', (req, res) => {
    const eventData = {
        name_event: req.body.name_event,
        start_point: req.body.start_point,
        type_sport: req.body.type_sport,
        id_user: req.body.id_user,
        date: req.body.date,
        time: req.body.time,
        pref_age: req.body.pref_age,
        pref_sex: req.body.pref_sex,
        advanced: req.body.advanced,
        repetition: req.body.repetition,
        phone_organizer: req.body.phone_organizer,
    };

    Event.findOne({
        where: {
            name_event: req.body.name_event
        }
    }).then(event => {
        if (!event) {
            Event.create(eventData)
            res.json({ status: eventData.name_event + ' created' })
        } else {

            res.status(403).json({ error: "Event already exists" })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});

events.put('/editEvent', (req, res) => {
    const eventData = {
        name_event: req.body.name_event,
        start_point: req.body.start_point,
        type_sport: req.body.type_sport,
        id_user: req.body.id_user,
        date: req.body.date,
        time: req.body.time,
        pref_age: req.body.pref_age,
        pref_sex: req.body.pref_sex,
        advanced: req.body.advanced,
        repetition: req.body.repetition,
        phone_organizer: req.body.phone_organizer,
    };

    Event.findOne({
        where: {
            name_event: req.body.name_event
        }
    }).then(event => {
        if (event) {
            Event.update(
                {
                    name_event: eventData.name_event,
                    start_point: eventData.start_point,
                    type_sport: eventData.type_sport,
                    date: eventData.date,
                    time: eventData.time,
                    pref_age: eventData.pref_age,
                    pref_sex: eventData.pref_sex,
                    advanced: eventData.advanced,
                    repetition: eventData.repetition,
                    phone_organizer: eventData.phone_organizer,
                },
                { where: {name_event: event.name_event}}
            )
            res.json({ status: event.name_event + ' edited' })
        } else {
            res.status(403).json({ error: "event not exist" })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});

module.exports = events;