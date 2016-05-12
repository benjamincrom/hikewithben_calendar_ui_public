var source = $("#hike-list-template").html(); 
var template = Handlebars.compile(source); 

function getHikeList() {
    var response = {
     "hike_list": [
      {
       "hike_id": "5760744339537920",
       "hike_reservation_status": "COMPLETE!",
       "hike_total_capacity": "2",
       "hike_location_name": "Great Smoky Mountains",
       "hike_start_datestring": "Saturday, 24 October 2015",
       "hike_start_datetime": "2015-10-24T09:30:00",
       "hike_end_datestring": "Sunday, 25 October 2015",
       "hike_elevation_gain": "5400",
       "hike_distance_miles": 19.5,
       "hike_pictures_url": "http://imgur.com/a/nOQQb/embed",
       "hike_location_longitude": -83.5,
       "hike_in_future": false,
       "hike_location_latitude": 35.56,
       "hike_route_url": "https://drive.google.com/file/d/0B19LMJR--QDsOEpNZzJUTS1kQ3c/view?usp=sharing",
       "hike_end_datetime": "2015-10-25T15:30:00",
       "hike_hazards": "18 river crossings, black bears"
      },
      {
       "hike_id": "4912171813175296",
       "hike_reservation_status": "COMPLETE!",
       "hike_total_capacity": "4",
       "hike_location_name": "Lassen Volcanic",
       "hike_start_datestring": "Friday, 25 July 2014",
       "hike_start_datetime": "2014-07-25T19:30:00",
       "hike_end_datestring": "Sunday, 27 July 2014",
       "hike_distance_miles": 14.0,
       "hike_pictures_url": "http://imgur.com/a/pVOtB/embed",
       "hike_location_longitude": -121.43,
       "hike_in_future": false,
       "hike_location_latitude": 40.51,
       "hike_route_url": "https://drive.google.com/file/d/0B19LMJR--QDsSmo5eTd6Ul9ZbTQ/edit?usp=sharing",
       "hike_notes": "",
       "hike_end_datetime": "2014-07-27T15:30:00",
       "hike_hazards": "Giardia, bears"
      },
      {
       "hike_id": "4892329601138688",
       "hike_reservation_status": "COMPLETE!",
       "hike_location_name": "Lost Coast Trail (3-day holiday)",
       "hike_start_datestring": "Saturday, 24 May 2014",
       "hike_start_datetime": "2014-05-24T19:30:00",
       "hike_end_datestring": "Monday, 26 May 2014",
       "hike_distance_miles": 25.6,
       "hike_pictures_url": "http://imgur.com/a/XaWwu/embed",
       "hike_location_longitude": -124.35,
       "hike_in_future": false,
       "hike_location_latitude": 40.28,
       "hike_route_url": "http://goo.gl/Db79OX",
       "hike_notes": "",
       "hike_end_datetime": "2014-05-26T15:30:00",
       "hike_hazards": "Black bears, rogue waves, soft shoulder trails on cliffs, unstable sandy cliffs, boulder fields, poison oak"
      },
      {
       "hike_id": "4863223949950976",
       "hike_reservation_status": "COMPLETE!",
       "hike_location_name": "Point Reyes",
       "hike_start_datestring": "Friday, 04 April 2014",
       "hike_start_datetime": "2014-04-04T19:30:00",
       "hike_end_datestring": "Saturday, 05 April 2014",
       "hike_distance_miles": 6.0,
       "hike_pictures_url": "http://imgur.com/a/nyp6J/embed",
       "hike_location_longitude": -122.81,
       "hike_in_future": false,
       "hike_location_latitude": 38.01,
       "hike_route_url": "",
       "hike_notes": "Trail blocked by wild animals.  Sleeping bags were soaked in morning dew which prompted an early exit. ",
       "hike_end_datetime": "2014-04-05T15:30:00",
       "hike_hazards": "Rogue waves, unstable cliffs, rockfalls, giardia, poison oak, stinging nettle, ticks, mountain lions, elk"
      },
      {
       "hike_id": "4825980946350080",
       "hike_reservation_status": "COMPLETE!",
       "hike_elevation_gain": "7309",
       "hike_location_name": "Sykes Hot Springs",
       "hike_start_datestring": "Friday, 28 March 2014",
       "hike_start_datetime": "2014-03-28T19:30:00",
       "hike_end_datestring": "Sunday, 30 March 2014",
       "hike_distance_miles": 18.6,
       "hike_pictures_url": "https://imgur.com/a/Tu7N6/embed",
       "hike_location_longitude": -121.78,
       "hike_in_future": false,
       "hike_location_latitude": 36.25,
       "hike_route_url": "http://goo.gl/dKxTuO",
       "hike_notes": "",
       "hike_end_datetime": "2014-03-30T15:30:00",
       "hike_hazards": "Downed trees, several river crossings, camping in a cold creek valley, giardia"
      },
      {
       "hike_id": "4845720079171584",
       "hike_reservation_status": "COMPLETE!",
       "hike_elevation_gain": "2743",
       "hike_location_name": "Pinnacles",
       "hike_start_datestring": "Friday, 21 March 2014",
       "hike_start_datetime": "2014-03-21T19:30:00",
       "hike_end_datestring": "Saturday, 22 March 2014",
       "hike_distance_miles": 10.6,
       "hike_pictures_url": "http://imgur.com/a/0fRY2/embed",
       "hike_location_longitude": -121.14,
       "hike_in_future": false,
       "hike_location_latitude": 36.52,
       "hike_route_url": "http://goo.gl/9LvHNX",
       "hike_notes": "",
       "hike_end_datetime": "2014-03-22T15:30:00",
       "hike_hazards": "Sun, rattlesnakes, poison oak, stinging nettle"
      }
     ],
     "kind": "hikewithben#hikeItem",
     "etag": "\"7Vgwww92KohlDi_p-Jr7Cogz4jI/U478EhkwGvxCcXAp1V4I4Kq7liU\""
    };

    return response;
}

var data = getHikeList(); 
var html = template(data)
$("#content-placeholder").html(html);

