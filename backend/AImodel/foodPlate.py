class plateObj:
    def __init__(self):
        self.menuObjs = dict()
        self.macroObjs = dict()
        self.calObj = 0

    def __str__(self):
        # return "Word"
        returStr = (
            str(self.menuObjs.keys())
            + "\n\tMacros: "
            + str(self.macroObjs.items())
            + "\n\tCalories: "
            + str(self.calObj)
            + "\n"
        )

        return returStr

    ###################### Access Functions ##############################

    """
    Get the plate's combined calorie count
    """

    def getPlateCalories(self):
        return self.calObj

    """
    Get a list of each menu item on the plate
    """

    def getPlateItems(self):
        return list(self.menuObjs.keys())

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
        self.menuObjs[newItem[0]] = newItem[1]
        self.calObj += newItem[1]["calories"]

        for macroKey, macroVal in newItem[1]["macros"].items():
            if macroKey not in self.macroObjs.keys():
                self.macroObjs[macroKey] = round(macroVal, 2)
            else:
                self.macroObjs[macroKey] += round(macroVal, 2)

        # print(self.menuObjs, "\n", self.macroObjs, "\n", self.calObj, "\n")

    """
    To remove and update any menuitem
    """

    def removeMenuItem(self, chosenItem):
        for curr in self.menuObjs.keys():
            if curr == chosenItem:
                self.calObj -= self.menuObjs["calories"]
                self.macroObjs[curr] -= round(self.macroObjs[curr], 2)
                self.menuObjs.pop(curr)
