//테스트 모델

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Test extends Model {
        static associate(models) {
            //외래키 설정
        }
    };

    Test.init({
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        password: DataTypes.STRING(10),
    }, {
        sequelize,
        modelName: "Test",
        tableName: "Tests",
        timestamps: false
    });

    return Test;
};