CREATE TABLE catalog_products(id TEXT PRIMARY KEY,names TEXT NOT NULL,descriptions TEXT NOT NULL,image_url TEXT NOT NULL DEFAULT '',status TEXT NOT NULL CHECK(status IN ('draft','published')),version INTEGER NOT NULL DEFAULT 1,created INTEGER NOT NULL,updated INTEGER NOT NULL);
CREATE INDEX catalog_products_status ON catalog_products(status,updated);
CREATE TABLE catalog_inquiries(id TEXT PRIMARY KEY,product_id TEXT REFERENCES catalog_products(id),product_snapshot TEXT NOT NULL,email TEXT NOT NULL,name TEXT NOT NULL,message TEXT NOT NULL,language TEXT NOT NULL,status TEXT NOT NULL CHECK(status IN ('open','closed')),consent_version TEXT NOT NULL,created INTEGER NOT NULL,expires INTEGER NOT NULL);
CREATE INDEX catalog_inquiries_expiry ON catalog_inquiries(expires);
