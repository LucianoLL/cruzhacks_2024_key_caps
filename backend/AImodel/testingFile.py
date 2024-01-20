from menuItem import menuItemObj
from foodPlate import plateObj

print("Printing menuItemObj\n")
item1 = menuItemObj(
    "Scrambled Eggs",
    50,
    ["Contains Egg", "Gluten Friendly", "Vegetarian"],
    {"Cals": 50, "Prot": 8.366, "Carb": 1.394, "Sugar": 1.394, "Fat": 0.946},
)
item2 = menuItemObj(
    "Pork Sausage Patties",
    458,
    ["Contains Pork", "Gluten Friendly"],
    {"Cals": 457.579, "Prot": 15.916, "Carb": 0, "Sugar": 0, "Fat": 43.768},
)

item3 = menuItemObj(
    "Green Pozole with Chicken",
    140,
    ["Halal", "Gluten Friendly"],
    {
        "Cals": 139.872,
        "Prot": 16.705,
        "Carb": 10.356,
        "Sugar": 1.154,
        "Fat": 5.501,
    },
)

print(item1)
print(item2)
print(item3)

print("\nPrinting plateObj")
plate1 = plateObj([item1, item2])
print(plate1)
print("Getting Plate Calories: ", plate1.getPlateCalories(), "\n")

print("Testing the adding menu item function\n")
plate1.addMenuItem(item3)
print(plate1)

print("Testing the removing function")
plate1.removeMenuItem(item2)
print(plate1)


def tmpData():
    tmpList = [
        menuItemObj(
            "Scrambled Eggs",
            50,
            ["Contains Egg", "Gluten Friendly", "Vegetarian"],
            {"Cals": 50, "Prot": 8.366, "Carb": 1.394, "Sugar": 1.394, "Fat": 0.946},
        ),
        menuItemObj(
            "Pork Sausage Patties",
            458,
            ["Contains Pork", "Gluten Friendly"],
            {"Cals": 457.579, "Prot": 15.916, "Carb": 0, "Sugar": 0, "Fat": 43.768},
        ),
        menuItemObj(
            "Almond Butter",
            337,
            ["Vegan", "Gluten Friendly", "Contains Nuts"],
            {
                "Cals": 336.656,
                "Prot": 12.403,
                "Carb": 12.403,
                "sugar": 3.577,
                "Fat": 30.122,
            },
        ),
        menuItemObj(
            "Green Pozole with Chicken",
            140,
            ["Halal", "Gluten Friendly"],
            {
                "Cals": 139.872,
                "Prot": 16.705,
                "Carb": 10.356,
                "sugar": 1.154,
                "Fat": 5.501,
            },
        ),
        menuItemObj(
            "Allergen Free Halal Chicken Thigh",
            180,
            ["Halal", "Gluten Friendly"],
            {"Cals": 320.304, "Prot": 24.958, "Carb": 0, "sugar": 0, "Fat": 8.215},
        ),
        menuItemObj(
            "Vegan Apple Cranberry Pie",
            313,
            ["Vegan", "Contains Soy"],
            {
                "Cals": 312.716,
                "Prot": 2.667,
                "Carb": 40.184,
                "sugar": 8.104,
                "Fat": 16.722,
            },
        ),
        menuItemObj(
            "Hard Boiled Egg",
            87,
            ["Vegan", "Contains Egg", "Gluten Free"],
            {
                "Cals": 86.486,
                "Prot": 7.596,
                "Carb": 0.435,
                "Sugar": 0.224,
                "Fat": 5.752,
            },
        ),
        menuItemObj(
            "Beef Frank",
            180,
            ["Contains Beef", "Gluten Friendly"],
            {"Cals": 180, "Prot": 7, "Carb": 1, "sugar": 0, "Fat": 16},
        ),
    ]
    return tmpList
