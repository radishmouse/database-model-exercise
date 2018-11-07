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