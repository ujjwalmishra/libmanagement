
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authors', {
      authorId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'Author_Id'
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'NO AUTHOR',
        field: 'Name'          
      }
    }, {
      timestamps: true,
      tableName: 'authors'
    });
};
  