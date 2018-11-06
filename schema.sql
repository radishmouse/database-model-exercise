-- Creating a grocery list
    -- item name
    -- number of items
    -- Is it done

CREATE TABLE grocery(
    id serial primary key,
    name text,
    quantity integer,
    completed boolean
);