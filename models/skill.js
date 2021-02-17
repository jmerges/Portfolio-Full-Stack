module.exports = function(sequelize, DataTypes) {
    var Skill = sequelize.define("Skill", {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });

    Skill.associate = function(models) {
        Skill.belongsTo(models.Employment, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Skill;
};