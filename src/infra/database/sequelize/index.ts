import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite:memory');

export const Card = sequelize.define('cards', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  list: DataTypes.STRING,
});

sequelize.sync();
