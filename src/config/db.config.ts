interface DBConfig {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  dialect: 'mysql' | 'sqlite' | 'mssql' | 'postgres';
  pool: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
}

const dbConfig: DBConfig = {
  HOST: process.env.MYSQL_HOST || 'localhost',
  USER: process.env.MYSQL_USER || 'user',
  PASSWORD: process.env.MYSQL_PASSWORD || 'password',
  DB: process.env.MYSQL_DATABASE || 'mydb',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
