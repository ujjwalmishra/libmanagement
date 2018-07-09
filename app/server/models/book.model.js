
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('book', {
      isbn: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
        field: 'Isbn'
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'NO TITLE',
        field: 'Title'          
      }
    }, {
      timestamps: false,
      tableName: 'book'
    });
};
  