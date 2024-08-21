USE `db`;

CREATE TABLE IF NOT EXISTS `db`.`users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(64) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `email` VARCHAR(128) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL UNIQUE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_bin;

INSERT INTO `db`.`users` SET name = "john doe", email = "john-doe@foobar.com";
INSERT INTO `db`.`users` SET name = "jane doe", email = "jane-doe@foobar.com";
