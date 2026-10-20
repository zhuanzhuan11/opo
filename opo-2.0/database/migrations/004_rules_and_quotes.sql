CREATE TABLE checkout_quotes(id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id),fingerprint TEXT NOT NULL,points INTEGER NOT NULL,total INTEGER NOT NULL,expires INTEGER NOT NULL);
CREATE INDEX checkout_quotes_expiry ON checkout_quotes(expires);
CREATE TABLE rule_proposals(id TEXT PRIMARY KEY,actor TEXT NOT NULL REFERENCES users(id),base_version INTEGER NOT NULL,value TEXT NOT NULL,reason TEXT NOT NULL,status TEXT NOT NULL CHECK(status IN ('pending','approved','rejected')),reviewer TEXT REFERENCES users(id),created INTEGER NOT NULL,reviewed INTEGER);
