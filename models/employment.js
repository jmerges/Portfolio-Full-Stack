module.exports = function(sequelize, DataTypes) {
    var Employment = sequelize.define("Employment", {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });

    Employment.associate = function(models) {
        Employment.hasMany(models.Skill, {
            onDelete: "SET NULL"
        });
    };

    return Employment;
};