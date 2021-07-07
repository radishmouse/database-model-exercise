
-- have to list grocery items first due to foreign key
insert into groceryitems
    (name, quantity, purchased)
values
    ('la croix', 20, false),
    ('almond milk', 1, false),
    ('frozen pizza', 2, false),
    ('discounted halloween candy', 3, false),
    ('honeycrisp apples', 6, false),
    ('wheaties', 1, false);

insert into users
    (name, username, pwhash)
values
    ('justin', 'justin', '$2b$10$oZ6N6WL7xfB0dmV6qxXIbOTb6rk0cWIrSR.eZLEkbbosIjHdWg4i2' ),
    ('JC' ,'JC', '$2b$10$oZ6N6WL7xfB0dmV6qxXIbOTb6rk0cWIrSR.eZLEkbbosIjHdWg4i2' ),
    ('chris', 'chris', '$2b$10$oZ6N6WL7xfB0dmV6qxXIbOTb6rk0cWIrSR.eZLEkbbosIjHdWg4i2' ),
    ('joey', 'joey', '$2b$10$oZ6N6WL7xfB0dmV6qxXIbOTb6rk0cWIrSR.eZLEkbbosIjHdWg4i2'),
    ('lance', 'lance', '$2b$10$oZ6N6WL7xfB0dmV6qxXIbOTb6rk0cWIrSR.eZLEkbbosIjHdWg4i2');

insert into stores
    (name)
values  
    ('publix'),
    ('kroger'),
    ('target'),
    ('sprouts'),
    ('whole foods');