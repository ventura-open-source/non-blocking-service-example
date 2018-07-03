const Sequelize = require('sequelize');
const database = require('./../db');

const Trip = database.define('trip', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  trip_type_id: Sequelize.INTEGER,
  locale_id: Sequelize.STRING,
  project_id: Sequelize.INTEGER,
  code: Sequelize.STRING,
  name: Sequelize.STRING,
  emotional_headline: Sequelize.STRING,
  introduction: Sequelize.TEXT,
  highlights_description: Sequelize.STRING,
  included_services: Sequelize.TEXT,
  excluded_services: Sequelize.TEXT,
  highlight1: Sequelize.STRING,
  highlight2: Sequelize.STRING,
  highlight3: Sequelize.STRING,
  highlight4: Sequelize.STRING,
  usp1: Sequelize.STRING,
  usp2: Sequelize.STRING,
  usp3: Sequelize.STRING,
  usp4: Sequelize.STRING,
  video_url: Sequelize.STRING,
  default_max_no_of_pax: Sequelize.INTEGER,
  cached_number_of_trip_days: Sequelize.INTEGER,
  cached_margin: Sequelize.BIGINT,
  cached_amount_of_feedback: Sequelize.BIGINT,
  cached_average_evaluation: Sequelize.DOUBLE,
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at',
  }
}, { tableName: 'trip' });

module.exports = Trip;
