const db = require('../config/db.config');

class User {
  static create(newUser, result) {
    db.query('INSERT INTO users SET ?', newUser, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newUser });
    });
  }

  static findById(id, result) {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res[0]);
        return;
      }
      result({ kind: 'not_found' }, null);
    });
  }

  static getAll(result) {
    db.query('SELECT * FROM users', (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res);
    });
  }

  static updateById(id, user, result) {
    db.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [user.name, user.email, id],
      (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          result({ kind: 'not_found' }, null);
          return;
        }
        result(null, { id: id, ...user });
      }
    );
  }

  static remove(id, result) {
    db.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }
      result(null, res);
    });
  }
}

module.exports = User;
