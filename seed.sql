
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
    (name)
values
    ('justin'),
    ('JC'),
    ('chris'),
    ('joey'),
    ('lance');

insert into stores
    (name)
values  
    ('publix'),
    ('kroger'),
    ('target'),
    ('sprouts'),
    ('whole foods');