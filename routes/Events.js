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
            id_event: req.body.id_event
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
                { where: {id_event: event.id_event}}
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

events.put('/getEvent', (req, res) => {
    Event.findOne({
        where: {
            id_event: req.body.id_event
        }
    }).then(event => {
        if (event) {
            res.send(event)
        } else {
            res.status(403).json({ error: "event not exist" })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});

events.get('/getAllEvents', (req, res) => {
    Event.findAll().then(events => {
        if(events)
        {
            res.json(events);
        }
        else
        {
            res.status(403).json({error: "there are no one data in tabel events"})
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});
events.put('/getAllUserEvents', (req, res) => {
    Event.findAll({
        where: {
            id_user: req.body.id_user
        }
    }).then(events => {
        if(events)
        {
            res.json(events);
        }
        else
        {
            res.status(403).json({error: "there are no one data in tabel events created by you"})
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});

events.delete('/deleteEvent', (req, res) => {
        Event.destroy({
            where: {
                id_event: req.body.id_event
            }
        })
        res.json({ status: req.body.id_event + ' deleted' })
});

module.exports = events;