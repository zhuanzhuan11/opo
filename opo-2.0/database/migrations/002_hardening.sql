CREATE TABLE order_inventory_returns(order_id TEXT PRIMARY KEY REFERENCES orders(id),created INTEGER NOT NULL);
CREATE TABLE login_attempts(bucket TEXT PRIMARY KEY,count INTEGER NOT NULL,expires INTEGER NOT NULL);
CREATE INDEX sessions_expiration ON sessions(expires);
CREATE INDEX orders_buyer_created ON orders(buyer,created);
CREATE INDEX orders_status ON orders(status);
CREATE INDEX orders_merchant_created ON orders(merchant_id,created);
CREATE INDEX journal_debit ON journal(asset,debit);
CREATE INDEX journal_credit ON journal(asset,credit);
CREATE INDEX tickets_user ON tickets(user_id,created);
