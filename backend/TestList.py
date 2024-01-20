from menuItem import menuItemObj
from foodPlate import plateObj

print("printing menuItemObj\n")

item1 = menuItemObj("Scrambled Eggs",
                     50, ["Contains Egg", "Gluten Friendly", "Vegetarian"])
item2 = menuItemObj("Pork Sausage Patties",
                     458, ["Contains Pork", "Gluten Friendly"])
item3 = menuItemObj("Almond Butter",
                     337, ["Vegan", "Gluten Friendly", "Contains Nuts"])
item4 = menuItemObj("Green Pozole with Chicken",
                     140, ["Halal", "Gluten Friendly"])
item5 = menuItemObj("Allergen Free Halal Chicken Thigh",
                    180, ["Halal","Gluten Friendly" ])
item6 = menuItemObj("Vegan Apple Cranberry Pie",
                    313, ["Vegan","Contains Soy" ])
item7 = menuItemObj("Hard Boiled Egg",
                    87, ["Vegan","Contains Egg", "Gluten Free" ])
item8 = menuItemObj("Beef Frank",
                    180, ["Contains Beef", "Gluten Friendly"])

items = [item1, item2, item3, item4, item5, item6, item7, item8] 

for item in items:
    print(item)

plate1 = plateObj([item2, item6])
plate2 = plateObj([item1, item5])
plate3 = plateObj([item7, item8])
plate4 = plateObj({item1, item2, item3})
plate5 = plateObj([item8, item2, item5])
plate6 = plateObj(items)

plates = [plate1,plate2,plate3,plate4,plate5,plate6]
for plate in plates:
    print(plate)
