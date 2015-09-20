// in-memory phone database
var db = {};
var id = 0;

exports.search = function(req, res) {
  /* Scan all entries search engine, TODO replace this with a proper database */

  // match all entries
  var match = function() { return true; };

  // surname condition
  if (req.query.surname !== undefined && req.query.surname != '') {
    match = function(entry) {
      return entry.surname.toLowerCase() == req.query.surname.toLowerCase(); // what about soundex?
    };
  }

  // scan through all entries finding matches
  var resultSet = [];
  for(var id in db) {
    if (match(db[id])) {
      resultSet.push(db[id]);
    }
  }

  res.send(resultSet);
};

exports.create = function(req, res) {
  var err = validateAddress(req.body);
  if (err) {
    return res.status(400).send(err.toString());
  }
  db[++id] = req.body;
  db[id]._id = id;
  res.redirect('/phonebook/' + id);
};

exports.retrieve = function(req, res) {
  var id = req.params.id;
  if (db[id] === undefined) {
    return res.status(404).end();
  }
  res.send(db[id]);
};

exports.update = function(req, res) {
  var id = req.params.id;
  if (db[id] === undefined) {
    return res.status(404).end();
  }
  var err = validateAddress(req.body);
  if (err) {
    return res.status(400).send(err.toString());
  }
  db[id] = req.body;
  db[id]._id = id;
  res.status(204).end();
};

exports.delete = function(req, res) {
  var id = req.params.id;
  if (db[id] === undefined) {
    return res.status(404).end();
  }
  delete db[id];
  res.status(204).end();
};

/*
 * Validate an address object matches our expectation
 * @param address object Address object
 */
function validateAddress(address) {
  var template = {
    surname: '',
    firstname: '',
    phone_number: '',
    address: ''
  }

  var isEmpty = true;
  for(var key in address) {
    isEmpty = false;
    if (template[key] === undefined) {
      return new Error('Address object failed validation: ' + key + ' is not a valid phone book entry');
    } else if (typeof address[key] !== typeof template[key]) {
      return new Error('Address object failed validation: ' + key + ' is not of expected type ' + typeof template[key]);
    }
  }
  if (isEmpty) {
    return new Error('Empty address object');
  }

  return;
}

// export for unit testing purposes
exports.test = {};
exports.test.validateAddress = validateAddress;
