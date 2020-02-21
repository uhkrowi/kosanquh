module.exports = function({ sequelize, Model, DataTypes }){
    class VRenter extends Model {}

    return VRenter.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identityType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identityNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identityPhotoUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identitySelfieUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bornYear: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roomId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, { sequelize })
}