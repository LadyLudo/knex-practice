INSERT INTO blogful_articles (title, date_published, content)
VALUES 
    ('How to catch a fish', now() - '21 days'::INTERVAL, 'Lots of info about fishing'),
    ('How to not catch a fish', now() - '20 days'::INTERVAL, 'What not to do when catching fishes'),
    ('Things to do at home', now() - '20 days'::INTERVAL, 'Lots of things to do in the comfort of your own home'),
    ('How to get outside', now() - '19 days'::INTERVAL, 'What do do when you find yourself sick of being at home'),
    ('Playing with your kids', now() - '18 days'::INTERVAL, 'Fun things to do with your kids'),
    ('Summer activities', now() - '17 days'::INTERVAL, 'Things to do in the summer'),
    ('Winter activities', now() - '16 days'::INTERVAL, 'Things to do in the winter'),
    ('Fall activities', now() - '15 days'::INTERVAL, 'Things to do in the fall'),
    ('Spring activities', now() - '14 days'::INTERVAL, 'Things to do in the spring'),
    ('How to get along with people', now() - '13 days'::INTERVAL, 'How to make friends and influence people'),
    ('How to not get along with people', now() - '12 days'::INTERVAL, 'How to make enemies and alienate people'),
    ('Diary of a geeky kid', now() - '11 days'::INTERVAL, 'Funny stories from my childhood'),
    ('How to train a dog', now() - '10 days'::INTERVAL, 'Cool tricks and commands for your favorite pup'),
    ('Summer activities Part 2', now() - '9 days'::INTERVAL, 'Things to do in the summer, again'),
    ('Winter activities Part 2', now() - '8 days'::INTERVAL, 'Things to do in the winter, again'),
    ('Fall activities Part 2', now() - '7 days'::INTERVAL, 'Things to do in the fall, again'),
    ('Spring activities Part 2', now() - '6 days'::INTERVAL, 'Things to do in the spring, again'),
    ('The three little pigs', now() - '5 days'::INTERVAL, 'A classic story'),
    ('The two little pigs', now() - '4 days'::INTERVAL, 'A shorter story'),
    ('One lonely pig', now() - '3 days'::INTERVAL, 'A vingette')
    ;