import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js';

class UserTopicProgress extends Model {
  public id!: number;
  public userId!: number;
  public topicId!: number;
  public status!: number;
  public lastUpdate!: Date;
}

UserTopicProgress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Name of the Users table
        key: 'id', // Column in the Users table
      },
      onUpdate: 'CASCADE', // Optional: Ensures updates cascade to foreign keys
      onDelete: 'CASCADE', // Optional: Deletes rows referencing this key
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 3,
      },
    },
    lastUpdated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'UserProgress',
    tableName: 'UserProgress',
    timestamps: false,
  }
);

export default UserTopicProgress;