import menuItem


class plateObj:
    def __init__(self, objItems):
        self.menuObjs = objItems
        self.listObjs = [tmp.getName() for tmp in objItems]
        self.calAmount = 0
        for curr in objItems:
            self.calAmount += curr.getCalories()

    def __str__(self):
        returStr = (
            "Menut Items: "
            + str(self.listObjs)
            + "\n\tAmount of Calories: "
            + str(self.calAmount)
        )

        return returStr
