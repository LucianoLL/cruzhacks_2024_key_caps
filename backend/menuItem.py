class menuItemObj:
    """
    objName: a string of the menu item's name
    objAmount: an integer of the amount of calories
    objRestr: a list of dietary restrictions
    """

    def __init__(self, objName, objAmount, objRestr):
        self.itemName = objName
        self.calAmount = objAmount
        self.dietRestr = objRestr

    def __str__(self):
        returStr = (
            self.itemName
            + " : \n"
            + "\tCalories: "
            + str(self.calAmount)
            + "\n"
            + "\tDietary Restrictions: "
            + str(self.dietRestr)
            + "\n"
        )
        return returStr
