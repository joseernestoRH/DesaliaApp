exports.getUsers = function(){
  return function(req, res) {
    let db = req.app.get('dbconnection');
    db.query('select * from users', function(err, rows, fields) {
    if (!err){res.send(rows);}
    else{res.error('Error while performing Query.', err);}
  });
  };
}

exports.getUser = function(){
  return function(req, res) {
    let db = req.app.get('dbconnection');
    db.query('select * from users where id = ?', req.body.id, function(err, rows, fields) {
    if (!err){res.send(rows);}
    else{res.error('Error while performing Query.', err);}
  });
  };
}

exports.addUser = function(){
  return function(req, res) {
    let db = req.app.get('dbconnection');
     req.assert('name', 'required').notEmpty();
     req.assert('idcard', 'required').notEmpty();
     req.assert('email', 'required').notEmpty();
    let user = {
      name: req.body.name,
      idcard: req.body.idcard,
      phone: req.body.phone,
      email: req.body.email,
      instagram: req.body.instagram,
      eurovisa: req.body.eurovisa ? req.body.eurovisa : 0
    }
    db.query('insert into users set ?',user, function(err,result) {
    if (!err){res.send("Row inserted id: " + result.insertId);}
    else{res.error('Error while performing Query.', err);}
  });
  };
}

exports.deleteUser = function(){
  return function(req, res) {
    let db = req.app.get('dbconnection');
     req.assert('id', 'required').notEmpty();
    db.query('delete from users where id = ?',req.body.id, function(err,result) {
    if (!err){res.send("row deleted: " + result.affectedRows);}
    else{res.error('Error while performing Query.', err);}
  });
  };
}
