
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('book', {
      authorId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        field: 'Author_Id'
      },
      isbn: {
        type: DataTypes.STRING(10),
        allowNull: false,
        field: 'Isbn'          
      }
    }, {
      timestamps: true,
      tableName: 'book_authors'
    });
};
  