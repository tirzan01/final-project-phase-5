# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the biseed command (or created alongside the database with db:setup
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# INSERT INTO foods(id, name, calories, fibre, sugar, proteins, fats, carbohydrate) VALUES (1, 'Banana',      89,   2.6,  12.2, 1.1,   0.3, 22.8)
# INSERT INTO foods(id, name, calories, fibre, sugar, proteins, fats, carbohydrate) VALUES (2, 'Apple',       52,   10.4, 10.4, 0.3,   0.2, 13.8)
# INSERT INTO foods(id, name, calories, fibre, sugar, proteins, fats, carbohydrate) VALUES (3, 'Strawberry',  32,   2,    4.9,  0.7,   0.3, 7.7)
# INSERT INTO foods(id, name, calories, fibre, sugar, proteins, fats, carbohydrate) VALUES (4, 'Oranges',     47,   2,    12,   8.6,   0.1, 10.6)
# INSERT INTO foods(id, name, calories, fibre, sugar, proteins, fats, carbohydrate) VALUES (5, 'Lobster',     89,   0,    0,    19,    0.9, 0)
# INSERT INTO foods(id, name, calories, fibre, sugar, proteins, fats, carbohydrate) VALUES (6, 'Greek yogurt',84.2, 0.9,  7.6,  4.4,   2.7, 11.1)
# Food.create(id:1, name:'Banana', calories:89, fibre:2.6, sugar:12.2, proteins:1.1, fats:0.3, carbohydrates:22.8)
Food.create(id:2, name:'Apple', calories:52, fibre:10.4, sugar:10.4, proteins:0.3, fats:0.2, carbohydrates:13.8)
Food.create(id:3, name:'Strawberry', calories:32, fibre:2, sugar:4.9, proteins:0.7, fats:0.3, carbohydrates:7.7)
Food.create(id:4, name:'Oranges', calories:47, fibre:2, sugar:12, proteins:8.6, fats:0.1, carbohydrates:10.6)
Food.create(id:5, name:'Lobster', calories:89, fibre:0, sugar:0, proteins:19, fats:0.9, carbohydrates:0)
Food.create(id:6, name:'Greek yogurt', calories:84.2, fibre:0.9, sugar:7.6, proteins:4.4, fats:2.7, carbohydrates:11.1)

p Food.all