--DUMMY DATA
-- users
insert into users 
    (name)
        values
    ('Stretch Armstrong'),
    ('LL BEAN'),
    ('Lord Voldemort'),
    ('Gilligan'),
    ('Dr.Feelgood'),
    ('Anonymouse');

-- blogs
insert into blogs
    (title, post, author_id)
        values
    ('Get big fast', ' lorem ipsum ', 1),
    ('Generic clothing and you!', 'asdasdasdads', 2),
    ('The boy who shouldnt have lived', 'asdasdkhadkahsd', 3),
    ('How i wasted my life on boating', 'asdasdadsasd', 4),
    ('Self Titled', 'asdaskdhakdhakjsd', 5),
    ('Cats and why they are the devil', 'ksjdkashsdihwad', 6),
    ('Abused by children', 'sdskdfjlk;SLKALSDKJSKDKSJF', 1),
    ('I used this name as a DND character one time', 'true story', 2),
    ('Make Wizards Great Again', 'sjdlskjdflksjfljslejflesjflsjlesjfsf', 3);

--"helpful" comments
insert into comments
    (comment, commenter_id, blog_id)
        values
    ('This is great', 1, 3),
    ('This is not great', 2, 4),
    ('This is bad', 3, 3),
    ('This is not bad', 4, 4),
    ('This is awesome', 5, 2),
    ('This is not awesome', 6, 1),
    ('This is a masterpiece', 1, 1),
    ('This is not a masterpiece', 2, 6),
    ('This is couldnt be worse', 3, 6),
    ('This is couldnt be better', 4, 4),
    ('I regret my time reading this', 5, 2),
    ('I spend too much time on dummy data', 6, 8),
    ('I <3 data', 1, 1);