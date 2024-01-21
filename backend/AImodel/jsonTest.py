import json
import pyhop
import random
import itertools
from foodPlate import plateObj
from menuItem import menuItemObj

inputFile = "food.json"
with open(inputFile) as f:
    data = json.load(f)

"""
Is to filter out all menu items that is checked off as an allergens 

diningHall: a number in string fromat representing each individual dining hall on campus 
userAller: a set of the user's selected allergens
mealTime: a string representing either Breakfast, Lunch, or Dinner
"""


def filterMenuItems(diningHall, userAller, mealTime):
    foodDict = dict()
    # Going through the menu items of each meal time
    for curr in data[diningHall][mealTime]:
        # Checking if any menu items contain allergens
        if any(currAler in userAller for currAler in curr["allergens"]):
            pass
        else:
            # Making a dicitionary of all valid menu items
            macroDict = dict()
            for nutri, amout in curr["macros"].items():
                macroDict[nutri] = float(amout)
            # Adding the menu item to the dicitionary
            foodDict[curr["name"]] = {
                "calories": int(curr["calories"]),
                "allergens": curr["allergens"],
                "macros": macroDict,
            }

    return foodDict


"""
Randomly selects food for each plate passed
currPlate: the plate of food passed into the function, alters the object itself
currMenu: passing the menu to reandomly select the food
"""


def selectFoodRand(currPlate, currMenu):
    randomInt = random.randint(0, (len(currMenu.keys()) - 1))
    menuItem = list(currMenu.keys())[randomInt]
    randMenuItem = currMenu[menuItem]
    currPlate.addMenuItem((menuItem, randMenuItem))
    return


def calcNutriVal(currPlate, nutriCat):
    nutriVal = 0
    plateMacros = currPlate.getPlateMacros()

    if nutriCat == "HP":
        otherVal = 0
        restPop = 0
        for tmpKey, tmpVal in plateMacros.items():
            if tmpKey != "Protein":
                otherVal += tmpVal
                restPop += 1
                nutriVal += 1 / tmpVal

        if plateMacros["Protein"] >= (otherVal / restPop):
            nutriVal += plateMacros["Protein"]

    return nutriVal


"""
HP = High Portein 35% more emphasis
    4 Calories per Gram
LC = Low Carbs and Sugars, 45% less emphasis
    4 Calories per Gram in Carbs
    4 Calories per Gram in Sugars
LF = Low Fat, 35% less emphasis
    9 Calories per Gram
"""


# def plateGenerator(newPlate, currentMenu, desiredCals, nutriCat):
def plateGenerator(currentMenu, desiredCals, nutriCat):
    allPlates = list()
    for currItem, currAssets in currentMenu.items():
        newPlate = plateObj()
        nutriValue = 0
        newPlate.addMenuItem((currItem, currAssets))
        currCals = newPlate.getPlateCalories()

        while currCals <= (desiredCals + desiredCals * 0.25):
            for menuItem, menuAssets in currentMenu.items():
                if menuItem not in newPlate.getPlateItems():
                    newPlate.addMenuItem((menuItem, menuAssets))
                    print(newPlate)
                    # Weighing High Protein
                    nutriValue += calcNutriVal(newPlate, nutriCat)
                    currCals += newPlate.getPlateCalories()

                # if currCals > (desiredCals + desiredCals * 0.25):
                #     break

        # print(nutriValue, newPlate)
        allPlates.append((nutriValue, newPlate))

    return max(allPlates, key=lambda x: x[0])


#################### Main User Client Code ####################

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

# Creating a list of plates that are within range of the desired caloires
# Still a work on progress, this is probably where the AI model will live
# PS, the model is not yet implemented
tmpPlates = list()
# for diningTime, timeMenu in personalMenu.items():
#     print(diningTime, "Plat Options")
#     bestPlate = plateGenerator(timeMenu, userVar_03, "HP")
#     print("The best: ", bestPlate[1])
bestPlate = plateGenerator(personalMenu["Lunch"], userVar_03, "HP")
print(bestPlate[1])
