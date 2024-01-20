from menuItem import menuItemObj
from foodPlate import plateObj
from testingFile import tmpData

"""
mealTime: represent either Breakfast, Lunch, or Dinner
desiredCalrs: represents the desired amount of calories
"""


def plateGeneratorFcn(mealTime, desiredCalrsn, refreshNum):
    listPlates = list()
    for currItem in tmpData:
        tmpPlate = plateObj([currItem])
        pass
    return


def userFunction(mealTime, desiredCalrs):
    return


def filterMeals(menuItem):
    if menuItem in tmpData:
        tmpData.remove(menuItem)


constraintList = list()
constraintInt = int(input("Type number of dietary constraints: "))
for _ in range(constraintInt):
    tmpInput = input("Type constraint: ")
    constraintList.append(tmpInput)
