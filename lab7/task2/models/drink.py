class Drink:
    def __init__(self, name, volume_ml, price):
        self.name = name
        self.volume_ml = volume_ml
        self.price = price

    def drink(self):
        return f"You drink the {self.name}."

    def getPrice(self):
        return f"The price is ${self.price}"

    def __str__(self):
        return f"{self.name} ({self.volume_ml}ml) - ${self.price}"



