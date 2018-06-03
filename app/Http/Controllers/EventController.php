<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;


class EventController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'location' => 'required',
            'topic' => 'required',
            'time' => 'required|date',
        ]);

        //
        $event = new Event;
        $event->name = $request->input('name');
        $event->location = $request->input('location');
        $event->time = $request->input('time');
        $event->topic = $request->input('topic');

//        $this->validator($event->toArray())->validate();
        $event->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }
}
