module.exports = function(app:any) {
  app.dataSources.db.automigrate('Person', function(err:any) {
    if (err) throw err;

    app.models.Person.create([{
      name: 'Bel Cafe',
      lastname: 'Vancouver'
    }, {
      name: 'Three Bees Coffee House',
      lastname: 'San Mateo'
    }, {
      name: 'Caffe Artigiano',
      lastname: 'Vancouver'
    }, ], function(err:any, coffeeShops:any) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};