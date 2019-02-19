module.exports = function (sequelize, DataTypes) {
    let Project = sequelize.define("Project", {
        image_link: DataTypes.STRING,
        project_name: DataTypes.STRING,
        project_description: DataTypes.STRING,
        tech_used: DataTypes.ARRAY,
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });
    return Project;
};