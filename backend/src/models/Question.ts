import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js';

class Question extends Model {
  public id!: number; // Unique identifier for the question
  public topicId!: number; // Foreign key linking to a specific topic
  public question!: string; // The text of the question
  public options!: string[]; // Array of options for the question
  public correct!: string; // The correct answer
  public questionLevel!: number; // Level of the question (0 = Memory, 1 = Application, 2 = Analysis)
  public createdAt!: Date; // Timestamp for record creation
  public updatedAt!: Date; // Timestamp for record updates
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    options: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    correct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionLevel: {
      type: DataTypes.INTEGER, // Using INTEGER for levels
      allowNull: false,
      validate: {
        isIn: [[0, 1, 2]], // Ensures only 0, 1, or 2 are allowed
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Question',
    tableName: 'Questions',
    timestamps: true, // Enables createdAt and updatedAt fields
  }
);

export default Question;