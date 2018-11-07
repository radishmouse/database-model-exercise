
-- have to list grocery items first due to foreign key
insert into groceryitems
    (name, quantity)
values
    ('la croix', 20),
    ('almond milk', 1),
    ('frozen pizza', 2),
    ('discounted halloween candy', 3),
    ('honeycrisp apples', 6),
    ('wheaties', 1);

insert into users
    (name)
values
    ('justin'),
    ('JC'),
    ('chris'),
    ('joey'),
    ('lance');
