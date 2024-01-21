import json
import pyhop
from foodPlate import plateObj
from menuItem import menuItemObj

inputFile = "food_items4.json"
with open(inputFile) as f:
    data = json.load(f)


# print("First item in JSON file: \n", data["20"]["Breakfast"])
def filterMenuItems(diningHall, userAller, mealTime):
    foodDict = dict()
    for curr in data[diningHall][mealTime]:
        if any(currAler in userAller for currAler in curr["allergens"]):
            pass
        else:
            macroDict = dict()
            for nutri, amout in curr["macros"].items():
                macroDict[nutri] = float(amout)

            foodDict[curr["name"]] = {
                "calories": int(curr["calories"]),
                "allergens": curr["allergens"],
                "macros": macroDict,
            }

    return foodDict


# for curr in foodDict.items():
#     print(curr)

userVar_01 = input("Type 20, 40, 25, 30, or 5 : ")
userSet = set()
print("Type in your allergens, type 'STOP' to stop typing allergens\n")
while True:
    userVar_02 = input("Type your Allergen: ")
    if userVar_02 == "STOP":
        break
    else:
        userSet.add(userVar_02)

print(userSet)

personalMenu = dict()
for currTime in data[userVar_01].keys():
    personalMenu[currTime] = filterMenuItems(userVar_01, userSet, currTime)
