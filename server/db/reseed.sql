DROP TABLE IF EXISTS users CASCADE;
\i 'server/db/migrations/user-migration.sql'
\i 'server/db/seeds/users-seed.sql'