module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'apiauth',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
