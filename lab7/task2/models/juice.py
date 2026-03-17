from .drink import Drink

class Juice(Drink):
    def __init__(self, name, volume_ml, price, fruit_type):
        super().__init__(name, volume_ml, price)
        self.fruit_type = fruit_type

    def drink(self):
        return f"You drink the refreshing {self.fruit_type} juice!"

    def fruit_info(self):
        return f"This juice is made from {self.fruit_type}"
