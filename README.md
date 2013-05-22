# Buzz Smart Package
Smart package that wraps [Buzz.js](http://buzz.jaysalvat.com) for MeteorJS use.

## Usage
Using [Meteorite](https://github.com/oortcloud/meteorite)…

	mrt add buzz.js
	
Voila! It's available for your projects.

## Example
The following shows a very simple sample app that uses a sound effect from the buzz library's documentation:

    mrt create test
    cd test
    mkdir -p public/sounds/
    mrt add buzz.js
    cd public/sounds
    wget http://buzz.jaysalvat.com/demo/sounds/truck.ogg
    cd -
    mrt

Browse to `http://localhost:3000/` and open up the web inspector to type the following:

    var s = new buzz.sound('/sounds/truck.ogg');
    s.play();

Check out [Buzz.js' documentation](http://buzz.jaysalvat.com/documentation/buzz/) for more information on how it works.