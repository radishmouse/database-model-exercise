create table users (
    id serial primary key,
    name varchar(300)
);

create table groceryitems (
    id serial primary key,
    name text,
    quantity integer,
    user_id integer references users (id)
);

create table stores (
    id serial primary key,
    name text,
    user_id integer references groceryitems (id)
)