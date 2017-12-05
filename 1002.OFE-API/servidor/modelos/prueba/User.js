var User = conexion.define('User', { 
    UserId: {
      type: sequelize.INTEGER,
      unique:true,
      primaryKey: true
    },
    FirstName: sequelize.TEXT,
    LastName: sequelize.INTEGER,
    Age: sequelize.INTEGER
  },{
  tableName: 'User',
  timestamps: false
});

module.exports = User;