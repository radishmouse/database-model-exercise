create table authors(
  id serial primary key,
  name text
);

create table posts(
  id serial primary key,
  title text,
  author_id integer references authors (id)
);