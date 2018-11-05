-- create users
create table users (
  id serial primary key,
  name varchar (100)
);
-- create blogs
create table blogs (
  id serial primary key,
  title varchar (200),
  post text,
  author_id integer references users (id)
);

-- create comments
create table comments (
  id serial primary key,
  comment text,
  commenter_id references users (id),
  blog_id references blogs (id)
);