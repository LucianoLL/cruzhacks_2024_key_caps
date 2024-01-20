from menuItem import menuItemObj
from foodPlate import plateObj

print("Printing menuItemObj\n")
item1 = menuItemObj("Steamed Rice", 144, ["Vegan", "Gluten Friendly"])
print(item1)
print(item1.getName())
print(item1.getCalories())
print(item1.getDietRestr())

print("\nPrinting plateObj")
plate1 = plateObj([item1])
print(plate1)
print("Getting Plate Calories: ", plate1.getPlateCalories())
