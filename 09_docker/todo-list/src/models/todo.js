import pool from '../config/database.js';

// 创建todos表
const createTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await pool.query(sql);
};

export default {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
    return rows;
  },

  async create(title) {
    const [result] = await pool.query('INSERT INTO todos (title) VALUES (?)', [title]);
    return result.insertId;
  },

  async update(id, completed) {
    await pool.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
  },

  async delete(id) {
    await pool.query('DELETE FROM todos WHERE id = ?', [id]);
  },

  createTable
}; 
