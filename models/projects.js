module.exports = function (sequelize, DataTypes) {
    let Project = sequelize.define("Project", {
        image_link: DataTypes.STRING,
        image_description: DataTypes.STRING,
        project_name: DataTypes.STRING,
        project_url: DataTypes.STRING,
        github_url: DataTypes.STRING,
        project_description: DataTypes.STRING        
    });
    return Project;
};