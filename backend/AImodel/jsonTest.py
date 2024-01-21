import json
import pyhop
import random
from foodPlate import plateObj
from menuItem import menuItemObj

inputFile = "food_items12.json"
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


def selectFood(currPlate, currMenu):
    randomInt = random.randint(0, (len(currMenu.keys()) - 1))
    menuItem = list(currMenu.keys())[randomInt]
    randMenuItem = currMenu[menuItem]
    currPlate.addMenuItem((menuItem, randMenuItem))
    return


# for curr in foodDict.items():
#     print(curr)

userVar_01 = input("Type 20, 40, 25, 30, or 5 : ")
userSet = set()
print("Type in your allergens, type 'STOP' to stop typing allergens\n")
while True:
    userVar_02 = input("Type your Allergen: ")
    if userVar_02 == "STOP" or userVar_02 == "stop":
        break
    else:
        userSet.add(userVar_02)
userVar_03 = int(input("Type desired calories: "))

# print(userSet)

personalMenu = dict()
for currTime in data[userVar_01].keys():
    personalMenu[currTime] = filterMenuItems(userVar_01, userSet, currTime)

tmpPlates = list()
for diningTime, timeMenu in personalMenu.items():
    print(diningTime, "Plat Options")
    for menuItem in timeMenu.items():
        newPlate = plateObj()
        selectFood(newPlate, timeMenu)
        newPlate.addMenuItem(menuItem)
        print(newPlate)
        tmpPlates.append(newPlate)
