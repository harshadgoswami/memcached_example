var Memcached = require('memcached');

var memcached = new Memcached("localhost:11211");

// memcached.connect('localhost:11211', function (err, conn) {
//     if (err) throw new Error(err);
//     console.log(conn.server);
// });


memcached.set('foo', 'harshad', 10, function (err) { /* stuff */

    memcached.get('foo', function (err, data) {
        console.log(data);
    });

});


