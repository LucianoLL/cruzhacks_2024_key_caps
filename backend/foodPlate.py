import menuItem


class plateObj:
    def __init__(self, objItems):
        self.menuObjs = objItems
        self.listItems = [tmp.getName() for tmp in objItems]
        self.dictMacro = {}
        self.calAmount = 0
        for curr in objItems:
            self.calAmount += curr.getCalories()

            for macro, amount in curr.getMacros().items():
                if macro not in list(self.dictMacro.keys()):
                    self.dictMacro[macro] = amount
                else:
                    self.dictMacro[macro] += amount

    def __str__(self):
        returStr = (
            "Menut Items: "
            + str(self.listItems)
            + "\n\tAmount of Calories: "
            + str(self.calAmount)
        )

        return returStr

    ###################### Access Functions ##############################

    # """
    # Adds new menu items to the two declared lists
    # """

    # def addToLists(self, newItem):
    #     self.menuObjs.append(newItem)
    #     self.listItems.append(newItem.getName())

    #     return

    """
    Get the plate's combined calorie count
    """

    def getPlateCalories(self):
        return self.calAmount

    """
    Get a list of each menu item on the plate
    """

    def getPlateItems(self):
        return self.listItems

    """
    Gets a dictionary of the combined total macros in the serving
    """

    def getPlateMacros(self):
        return self.dictMacro

    ###################### Modification Functions ########################

    """
    Updates the calories and macro nutrients when adding new items to a plate
    """

    def addMenuItem(self, newItem):
        self.menuObjs.append(newItem)
        self.listItems.append(newItem.getName())
        self.calAmount += newItem.getCalories()

        for item, amount in newItem.getMacros():
            if item not in list(self.dictMacro().keys()):
                self.dictMacro[item] = amount
            else:
                self.dictMacro[item] += amount

    """
    To remove and update any menuitem
    """

    def removeMenuItem(self, chosenItem):
        for curr in self.menuObjs:
            if curr.getName() == chosenItem.getName():
                self.menuObjs.remove(curr)
        self.listItems.remove(chosenItem.getName())
        self.calAmount -= chosenItem.getCalories()

        for item, amount in chosenItem.getMacros():
            self.dictMacro[item] -= amount
