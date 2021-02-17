module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        link: DataTypes.STRING
    });

    Project.associate = function(models) {
        Project.hasMany(models.Skill, {
            onDelete: "SET NULL"
        });
    };

    return Project;
};