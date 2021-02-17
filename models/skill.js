module.exports = function(sequelize, DataTypes) {
    var Skill = sequelize.define("Skill", {
        name: DataTypes.STRING,
    });

    Skill.associate = function(models) {
        Skill.belongsTo(models.Employment, {
            foreignKey: {
                allowNull: true
            }
        });
        
        Skill.belongsTo(models.Project, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Skill;
};