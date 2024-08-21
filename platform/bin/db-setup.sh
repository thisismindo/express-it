#!/usr/bin/env bash
set -eu

echo "Attempt to connect to mysql-db-primary"

until docker exec mysql-db-primary sh -c 'export MYSQL_PWD=password; mysql -h 127.0.0.1 -uroot -e ";"'
do
    echo "Waiting for mysql-db-primary database connection..."
    sleep 5
done

docker exec -it mysql-db-primary /bin/bash -c 'mysql -h 127.0.0.1 -uroot -p db < migration.sql'
