import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js'

class TestResult extends Model {
  public id!: number;
  public userId!: number;
  public questionId!: number;
  public memoryScore!: number;
  public applicationScore!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

TestResult.init(
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
        model: 'Users', // Link to Users table
        key: 'id',
      },
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    memoryScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // 0 = Incorrect
    },
    applicationScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // 0 = Incorrect
    },
  },
  {
    sequelize,
    modelName: 'TestResult',
    tableName: 'TestResults',
    timestamps: true,
  }
);

export default TestResult;
