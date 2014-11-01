# Buzz Smart Package
Smart package that wraps [Buzz.js](http://buzz.jaysalvat.com) for MeteorJS use.

## Usage
Using Meteor 1.0

	meteor add brentjanderson:buzz
	
Voila! It's available for your projects.

## Example
The following shows a very simple sample app that uses a sound effect from the buzz library's documentation:

    meteor create test
    cd test
    mkdir -p public/sounds/
    meteor add brentjanderson:buzz
    cd public/sounds
    wget http://buzz.jaysalvat.com/demo/sounds/truck.ogg
    cd -
    meteor

Browse to `http://localhost:3000/` and open up the web inspector to type the following:

    var s = new buzz.sound('/sounds/truck.ogg');
    s.play();

Check out [Buzz.js' documentation](http://buzz.jaysalvat.com/documentation/buzz/) for more information on how it works.
