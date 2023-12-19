const pool = require('../config/config');

class User {
  static async create(name, email, password) {
    const [results] = await pool.promise().query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    return results.insertId;
  }

  static async findByEmail(email) {
    const [users] = await pool.promise().query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return users[0];
  }

  static async comparePassword(candidatePassword, hash) {
    return candidatePassword === hash;
  }
}

module.exports = User;