import Sequelize from 'sequelize';

import Recipient from '../app/models/Recipient';
import User from '../app/models/User';
import File from '../app/models/File';
import Courier from '../app/models/Courier';

import databaseConfig from '../config/database';

const models = [Recipient, User, File, Courier];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));

    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
