

create table users (
    id serial primary key,
    name text,
    username varchar(200) not null,
    pwhash varchar(60) not null
);

create table groceryitems (
    id serial primary key,
    name text,
    quantity integer,
    purchased boolean,
    user_id integer references users (id)
);

create table stores (
    id serial primary key,
    name text,
    user_id integer references groceryitems (id)
);